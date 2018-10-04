import {FlaggerBase} from './index'

export default class AirshipLegacy {
  constructor(options) {
    this.envKey = options.envKey
    this.airship = new AirshipBase()
  }

  async init() {
    console.warn('This method is deprecated. Please refer to v2 documentation.')
    await this.airship.configure({envKey: this.envKey})
  }

  isEnabled(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.')
    return this.airship.flag(controlShortName).isEnabled(object)
  }

  getVariation(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.')
    return this.airship.flag(controlShortName).getTreatment(object)
  }

  isEligible(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.')
    return this.airship.flag(controlShortName).isEligible(object)
  }
}

if (__BROWSER__) {
  AirshipLegacy.prototype.identify = async function(object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.')
    await this.init()
    this.airship.identify(object)
  }
}
