import EventSource from 'eventsource'
import request from 'superagent'
import Environment from './environment'
import {logger} from './logger'
import LRU from './lru'
import Router from './router'
import Stat from './stat'
import {version} from '../package.json'

const SERVER_URL = 'https://api.airshiphq.com'
const IDENTIFY_ENDPOINT = `${SERVER_URL}/v2/identify`
const GATING_INFO_ENDPOINT = `${SERVER_URL}/v2/gating-info`

const SSE_URL = 'https://sse.airshiphq.com'
const SSE_GATING_INFO_ENDPOINT = `${SSE_URL}/v2/sse-events`

const CLOUD_FRONT_URL = 'https://backup-api.airshiphq.com'
const CLOUD_FRONT_GATING_INFO_ENDPOINT = `${CLOUD_FRONT_URL}/v2/gating-info`

const REQUEST_TIMEOUT = 10 * 1000

export default class Airship extends Environment {
  constructor(gatingInfoListener) {
    super()

    this.gatingInfoListener = gatingInfoListener
    this.init()
  }

  init() {
    this.ingestionMaxItems = 500
    this.ingestionInterval = 30 * 1000

    this.objects = []
    this.stats = []
    this.exposures = []
    this.flags = new Set()
    this.oldFlags = new Set()

    this.objectLRUCache = new LRU(500)
    this.firstIngestion = true

    this.shouldIngestObjects = true
    this.shouldIngestStats = true
    this.shouldIngestExposures = true
    this.shouldIngestFlags = true

    this.restartIngestionWorker()
  }

  restartIngestionWorker() {
    if (this.ingestionWorker) {
      clearInterval(this.ingestionWorker)
    }

    this.ingestionWorker = setInterval(() => {
      this.maybeIngest(true)
    }, this.ingestionInterval)
  }

  async maybeIngest(force = false) {
    if (!this.shouldIngestObjects) {
      this.objects = []
    }

    if (!this.shouldIngestStats) {
      this.stats = []
    }

    if (!this.shouldIngestExposures) {
      this.exposures = []
    }

    if (!this.shouldIngestFlags) {
      this.flags = new Set()
    }

    let shouldIngest =
      force ||
      (this.objects.length >= this.ingestionMaxItems ||
        this.stats.length >= this.ingestionMaxItems ||
        this.exposures.length >= this.ingestionMaxItems ||
        this.flags.size > 0)

    if (this.firstIngestion) {
      shouldIngest = shouldIngest || this.objects.length > 0
      this.firstIngestion = !shouldIngest
    }

    if (
      this.objects.length === 0 &&
      this.stats.length === 0 &&
      this.exposures.length === 0 &&
      this.flags.size === 0
    ) {
      shouldIngest = false
    }

    if (shouldIngest) {
      const objects = this.objects
      const stats = this.stats
      const exposures = this.exposures
      const flags = Array.from(this.flags)
      flags.forEach(flagName => {
        this.oldFlags.add(flagName)
      })

      this.objects = []
      this.stats = []
      this.exposures = []
      this.flags = new Set()

      await request
        .post(IDENTIFY_ENDPOINT + '/' + this.envKey)
        .type('application/json')
        .timeout(REQUEST_TIMEOUT)
        .send({
          objects: objects,
          stats: stats.map(s => s.getStatsObj()).filter(so => so !== null),
          exposures: exposures,
          flags: flags,
          sdkInfo: {
            name: '__SDK_NAME__',
            version: version
          }
        })
        .then(res => {
          if (!res.ok) {
            logger('Something went wrong. Ingestion failed')
          }
        })
        .catch(err => {
          logger(err.message)
        })
    }
  }

  _identifyObject(obj) {
    const airshipObj = Environment.prototype._identifyObject.call(this, obj)

    if (!airshipObj.isValid()) {
      return airshipObj
    }
    const id = airshipObj.getId()
    const hash = airshipObj.getHash()
    const storedHash = this.objectLRUCache.get(id)
    if (storedHash === null || hash !== storedHash) {
      this.objects.push(airshipObj.getRawObject())
    }

    this.objectLRUCache.set(id, hash)
    this.maybeIngest()

    return airshipObj
  }

  _compactStats() {
    this.stats = Stat.compactStats(this.stats)
  }

  _saveStat(stat) {
    this.stats.push(stat)
    if (this.stats.length >= this.ingestionMaxItems) {
      this._compactStats()
    }
    this.maybeIngest()
  }

  _saveExposure(expo) {
    this.exposures.push(expo)
    this.maybeIngest()
  }

  async publish(objs) {
    if (!Array.isArray(objs)) {
      logger('The "publish" method takes an array of objects (aka entities).')
      return
    }

    objs.forEach(obj => {
      this._identifyObject(obj)
    })

    await this.maybeIngest(true)
  }

  async _getGatingInfo() {
    return request
      .get(`${GATING_INFO_ENDPOINT}/${this.envKey}?casing=camel`)
      .timeout(REQUEST_TIMEOUT)
  }

  async _getGatingInfoFromCloudFront() {
    return request
      .get(`${CLOUD_FRONT_GATING_INFO_ENDPOINT}/${this.envKey}-camel`)
      .timeout(REQUEST_TIMEOUT)
  }

  updateSDK() {
    const ingestionMaxItems = this.router.getIngestionMaxItem()
    const ingestionInterval = this.router.getIngestionInterval()

    if (typeof ingestionMaxItems === 'number' && ingestionMaxItems > 0) {
      this.ingestionMaxItems = ingestionMaxItems
    }
    if (
      typeof ingestionInterval === 'number' &&
      ingestionInterval > 0 &&
      ingestionInterval != this.ingestionInterval
    ) {
      this.ingestionInterval = ingestionInterval
      this.restartIngestionWorker()
    }
  }

  async configure(envKey, subscribeToUpdates = true) {
    const envKeyRegex = /^[a-z0-9]{16}$/
    if (!envKey.match(envKeyRegex)) {
      throw 'options["envKey"] should be a string of lowercase characters and digits. Double check on the Airship web app.'
    }

    this.envKey = envKey
    this.subscribeToUpdates = subscribeToUpdates
    this.init()

    this.success = null

    // First try our server
    try {
      const stat = new Stat('duration__gating_info', Stat.TYPE_DURATION)
      stat.start()
      const result = await this._getGatingInfo()
      const gatingInfo = result.body
      this.router = new Router(gatingInfo)
      this.updateSDK()
      if (this.gatingInfoListener) {
        this.gatingInfoListener(gatingInfo)
      }
      this.success = true
      stat.stop()
      this._saveStat(stat)
    } catch (err) {
      logger(err)
    }

    // Next try CloudFront distribution
    if (!this.success) {
      try {
        const stat = new Stat(
          'duration__cloudfront_gating_info',
          Stat.TYPE_DURATION
        )
        stat.start()
        const result = await this._getGatingInfoFromCloudFront()
        const gatingInfo = result.body
        this.router = new Router(gatingInfo)
        this.updateSDK()
        if (this.gatingInfoListener) {
          this.gatingInfoListener(gatingInfo)
        }
        this.success = true
        stat.stop()
        this._saveStat(stat)
      } catch (err) {
        logger(err)
        this.success = false
      }
    }

    if (!this.success) {
      throw 'Failed to retrieve initial gating information'
    }

    if (subscribeToUpdates) {
      this._subscribeToUpdates()
      this._policeSSE()
    }
  }

  async shutdown() {
    if (this.ingestionWorker) {
      clearInterval(this.ingestionWorker)
    }

    this._unpoliceSSE()
    this._unsubscribeFromUpdates()

    await this.maybeIngest(true)
  }

  flag(flagName) {
    const flag = Environment.prototype.flag.call(this, flagName)
    if (flag.isWild()) {
      // Register the new uncategorized flag
      if (!this.oldFlags.has(flagName)) {
        this.flags.add(flagName)
        this.maybeIngest()
      }
    }
    return flag
  }

  _policeSSE() {
    this._unpoliceSSE()
    this.policeSSEInterval = setInterval(() => {
      const now = Date.now()
      const then = this.lastSSEConnectTimestamp || Date.now()
      if ((now - then) / 1000 > 30) {
        logger(
          'Did not receive a keepalive for more than 30 seconds. Reconnecting.'
        )
        this._subscribeToUpdates()
      }
    }, 5 * 1000)
  }

  _unpoliceSSE() {
    if (this.policeSSEInterval) {
      clearInterval(this.policeSSEInterval)
      delete this.policeSSEInterval

      if (this.lastSSEConnectTimestamp) {
        delete this.lastSSEConnectTimestamp
      }
    }
  }

  _subscribeToUpdates() {
    this._unsubscribeFromUpdates()

    this.eventSource = new EventSource(
      `${SSE_GATING_INFO_ENDPOINT}?envkey=${this.envKey}&casing=camel`
    )
    this.eventSource.addEventListener('gatingInfoUpdate', evt => {
      const gatingInfo = JSON.parse(evt.data)
      this.router = new Router(gatingInfo)
      this.updateSDK()
      if (this.gatingInfoListener) {
        this.gatingInfoListener(gatingInfo)
      }
      this.lastSSEConnectTimestamp = Date.now()
    })

    this.eventSource.addEventListener('keepalive', () => {
      this.lastSSEConnectTimestamp = Date.now()
    })
  }

  _unsubscribeFromUpdates() {
    if (this.eventSource) {
      this.eventSource.close()
      delete this.eventSource
    }
  }
}
