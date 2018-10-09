import EventSource from 'eventsource'
import request from 'superagent'
import Environment from './environment'
import {logger} from './logger'
import LRU from './lru'
import Router from './router'
import Stat from './stat'
import {version} from '../package.json'

const http = require('http')
const https = require('https')
const URL = require('url')

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

      await this.postContent(
        IDENTIFY_ENDPOINT + '/' + this.envKey,
        JSON.stringify({
          objects: objects,
          stats: stats.map(s => s.getStatsObj()).filter(so => so !== null),
          exposures: exposures,
          flags: flags,
          sdkInfo: {
            name: '__SDK_NAME__',
            version: version
          }
        })
      )
        .then(result => {})
        .catch(err => {
          logger(err)
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

  getContent(url, timeout = REQUEST_TIMEOUT) {
    return new Promise((resolve, reject) => {
      // select http or https module, depending on reqested url
      const urlObj = URL.parse(url)

      const lib = urlObj.protocol === 'https:' ? https : http

      const request = lib.get(url, response => {
        console.log('fooooooooooooooooooo')
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
          console.log('fooooooooooooooooooo111111')
          reject(
            new Error(
              'Failed to load page, status code: ' + response.statusCode
            )
          )
        }
        // temporary data holder
        const body = []
        // on every content chunk, push it to the data array
        response.on('data', chunk => body.push(chunk))
        // we are done, resolve promise with those joined chunks
        response.on('end', () => {
          resolve(body.join(''))
        })
      })
      // handle connection errors of the request
      request.on('error', err => reject(err))
      request.setTimeout(timeout, () => {
        request.abort()
      })
    })
  }

  postContent(url, data, timeout = REQUEST_TIMEOUT) {
    return new Promise((resolve, reject) => {
      // select http or https module, depending on reqested url
      const urlObj = URL.parse(url)

      const lib = urlObj.protocol === 'https:' ? https : http

      const options = {
        hostname: urlObj.hostname,
        port: urlObj.protocol === 'https:' ? 443 : 80,
        path: urlObj.path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
      }
      const request = lib.request(options, response => {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(
            new Error(
              'Failed to post to page, status code: ' + response.statusCode
            )
          )
        }
        // temporary data holder
        const body = []
        // on every content chunk, push it to the data array
        response.on('data', chunk => body.push(chunk))
        // we are done, resolve promise with those joined chunks
        response.on('end', () => resolve(body.join('')))
      })
      // handle connection errors of the request
      request.on('error', err => {
        console.log('HERE??')
        reject(err)
      })
      request.setTimeout(timeout, () => {
        request.abort()
      })
      request.write(data)
      request.end()
    })
  }

  async _getGatingInfo() {
    const body = await this.getContent(
      `${GATING_INFO_ENDPOINT}/${this.envKey}?casing=camel`
    )
    console.log('RETURNs')
    return JSON.parse(body)
  }

  async _getGatingInfoFromCloudFront() {
    const body = await this.getContent(
      `${CLOUD_FRONT_GATING_INFO_ENDPOINT}/${this.envKey}-camel`
    )
    return JSON.parse(body)
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
      console.log(result)
      const gatingInfo = result
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
        const gatingInfo = result
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
    console.log('does it come?')
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
