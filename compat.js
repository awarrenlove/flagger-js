'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Ajv = _interopDefault(require('ajv'));
var ajvErrors = _interopDefault(require('ajv-errors'));
var md5 = _interopDefault(require('md5'));
var stringify = _interopDefault(require('fast-json-stable-stringify'));
require('eventsource');
require('superagent');

let logger = x => {
  console.error(x);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

const SCHEMA = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      pattern: '^([A-Z][a-zA-Z]*)+$',
      maxLength: 50,
      minLength: 1,
      errorMessage: {
        type: 'Entity type must be a string that starts with a capital letter like [C]ar or [U]ser',
        maxLength: 'Entity type must be a non-empty string of 50 characters or less',
        minLength: 'Entity type must be a non-empty string of 50 characters or less'
      }
    },
    isGroup: {
      type: 'boolean',
      errorMessage: {
        type: '`isGroup` must be a boolean'
      }
    },
    id: {
      type: ['string', 'integer'],
      pattern: '^[ -~]+$',
      maxLength: 250,
      minLength: 1,
      errorMessage: {
        type: "An entity's `id` must be a string or integer. An integer `id` will be cast into a string.",
        maxLength: "An entity's `id` must be a non-empty string of 250 characters or less.",
        minLength: "An entity's `id` must be a non-empty string of 250 characters or less."
      }
    },
    displayName: {
      type: 'string',
      maxLength: 250,
      minLength: 1,
      errorMessage: {
        type: "An entity's `displayName` must be a string",
        maxLength: "An entity's `displayName` must be a non-empty string of 250 characters or less.",
        minLength: "An entity's `displayName` must be a non-empty string of 250 characters or less."
      }
    },
    attributes: {
      type: 'object',
      patternProperties: {
        '^[a-zA-Z]$|^[a-zA-Z_]{0,48}[a-zA-Z]$': {
          oneOf: [{
            type: 'string',
            maxLength: 3000,
            errorMessage: {
              type: "An entity's attribute value must be a string, boolean, or number.",
              maxLength: "An entity's string attribute must be 3000 characters or less."
            }
          }, {
            type: 'boolean',
            errorMessage: {
              type: "An entity's attribute value must be a string, boolean, or number."
            }
          }, {
            type: 'number',
            errorMessage: {
              type: "An entity's attribute value must be a string, boolean, or number."
            }
          }],
          errorMessage: {
            oneOf: "An entity's attribute value must be a string, boolean, or number."
          }
        }
      },
      maxProperties: 100,
      additionalProperties: false,
      errorMessage: {
        maxProperties: 'There can only be up to 100 attributes for an entity.',
        additionalProperties: 'Each attribute must begin and end with an alphabet letter (a-z, A-Z). In between, allowed characters are a-z, A-Z, and "_". For example: isStudent or is_student. Preceding or trailing underscore is not allowed (i.e., _is_student or is_student_). Each attribute value must be a number, string or boolean.'
      }
    },
    group: {
      type: ['object', 'null'],
      properties: {
        type: {
          type: 'string',
          pattern: '^([A-Z][a-zA-Z]*)+$',
          maxLength: 50,
          minLength: 1,
          errorMessage: {
            type: 'Group type must be a string that starts with a capital letter like [C]arGroup or [U]serGroup. Camel casing is used to separate words.',
            maxLength: 'Group type must be a non-empty string of 50 characters or less',
            minLength: 'Group type must be a non-empty string of 50 characters or less'
          }
        },
        isGroup: {
          type: 'boolean',
          enum: [true],
          errorMessage: {
            type: '`isGroup` must be a boolean',
            enum: '`isGroup` must always be true for an group'
          }
        },
        id: {
          type: ['string', 'integer'],
          pattern: '^[ -~]+$',
          maxLength: 250,
          minLength: 1,
          errorMessage: {
            type: "A group's `id` must be a string or integer. An integer `id` will be cast into a string.",
            maxLength: "A group's `id` must be a non-empty string of 250 characters or less.",
            minLength: "A group's `id` must be a non-empty string of 250 characters or less."
          }
        },
        displayName: {
          type: 'string',
          maxLength: 250,
          minLength: 1,
          errorMessage: {
            type: "A group's `displayName` must be a string",
            maxLength: "A group's `displayName` must be a non-empty string of 250 characters or less.",
            minLength: "A group's `displayName` must be a non-empty string of 250 characters or less."
          }
        },
        attributes: {
          type: 'object',
          patternProperties: {
            '^[a-zA-Z]$|^[a-zA-Z_]{0,48}[a-zA-Z]$': {
              oneOf: [{
                type: 'string',
                maxLength: 3000,
                errorMessage: {
                  type: "A group's attribute value must be a string, boolean, or number.",
                  maxLength: "A group's string attribute must be 3000 characters or less."
                }
              }, {
                type: 'boolean',
                errorMessage: {
                  type: "A group's attribute value must be a string, boolean, or number."
                }
              }, {
                type: 'number',
                errorMessage: {
                  type: "A group's attribute value must be a string, boolean, or number."
                }
              }],
              errorMessage: {
                oneOf: "A group's attribute value must be a string, boolean, or number."
              }
            }
          },
          maxProperties: 100,
          additionalProperties: false,
          errorMessage: {
            additionalProperties: 'Each attribute must begin and end with an alphabet letter (a-z, A-Z). In between, allowed characters are a-z, A-Z, and "_". For example: isStudent or is_student. Preceding or trailing underscore is not allowed (i.e., _is_student or is_student_). Each attribute value must be a number, string or boolean.'
          }
        }
      },
      required: ['id'],
      additionalProperties: false,
      errorMessage: {
        required: 'Each group must have an `id` field.',
        additionalProperties: 'Allowed properties for a group are: `type`, `id`, `displayName`, `attributes`, and `isGroup`. `id` is required, rest are optional.'
      }
    }
  },
  required: ['id'],
  additionalProperties: false,
  errorMessage: {
    type: 'An entity is represented using a dictionary',
    required: 'Each entity must have an `id` field.',
    additionalProperties: 'Allowed properties for an entity are: `type`, `id`, `displayName`, `attributes`, `group`, and `isGroup`. `id` is required, rest are optional.'
  }
};
const ajv = Ajv({
  allErrors: true,
  jsonPointers: true
});
ajvErrors(ajv);
const validate = ajv.compile(SCHEMA);
const DEFAULT_ENTITY_TYPE = 'User';
class AirshipObject {
  constructor(obj) {
    let isValid = AirshipObject.isValidObject(obj);

    if (!isValid) {
      this.object = null;
      return;
    }

    obj = AirshipObject._cloneObject(obj);
    isValid = AirshipObject._fillInFields(obj);

    if (!isValid) {
      this.object = null;
      return;
    }

    this.object = obj;
  }

  static isValidObject(obj) {
    let isValid = validate(obj);

    if (!isValid) {
      logger(validate.errors.map(e => e.message));
    }

    if (isValid) {
      const isGroup = obj.isGroup !== undefined ? obj.isGroup : false;
      const type = obj.type !== undefined ? obj.type : DEFAULT_ENTITY_TYPE;
      const groupIndex = type.lastIndexOf('Group');

      if (groupIndex !== -1 && groupIndex === type.length - 'Group'.length && !isGroup) {
        logger("An entity's type that ends with `Group` must be a group entity and therefore has to have an explicit `isGroup: true` property");
        isValid = false;
      }
    }

    return isValid;
  }

  static _cloneObject(obj) {
    const clone = Object.assign({}, obj);

    if (obj.attributes !== undefined) {
      clone.attributes = Object.assign({}, obj.attributes);
    }

    if (obj.group !== undefined) {
      clone.group = Object.assign({}, obj.group);

      if (obj.group.attributes !== undefined) {
        clone.group.attributes = Object.assign({}, obj.group.attributes);
      }
    }

    return clone;
  }

  static _fillInFields(obj) {
    if (obj.type === undefined) {
      obj.type = DEFAULT_ENTITY_TYPE;
    }

    if (obj.displayName === undefined) {
      obj.displayName = '' + obj.id;
    }

    if (obj.isGroup === undefined) {
      obj.isGroup = false;
    }

    if (Number.isInteger(obj.id)) {
      const idStr = '' + obj.id;

      if (idStr.length > 250) {
        logger('Integer id must have 250 digits or less');
        return false;
      }

      obj.id = idStr;
    }

    let group = null;

    if (obj.group !== undefined) {
      group = obj.group;
    }

    if (group !== null && group.displayName === undefined) {
      group.displayName = '' + group.id;
    }

    if (group !== null && group.type === undefined) {
      group.type = obj.type + 'Group';
    }

    if (group !== null) {
      group.isGroup = true;
    }

    if (group !== null) {
      if (Number.isInteger(group.id)) {
        const idStr = '' + group.id;

        if (idStr.length > 250) {
          logger('Integer id must have 250 digits or less');
          return false;
        }

        group.id = idStr;
      }
    }

    return true;
  }

  getHash() {
    return md5(stringify(_objectSpread({}, this.object, {
      attributes: this.object.attributes || {},
      group: _objectSpread({}, this.object.group, {
        attributes: this.object.group && this.object.group.attributes || {}
      })
    })));
  }

  getId() {
    const obj = this.object;
    return `${obj.type}_${obj.id}`;
  }

  isValid() {
    return this.object !== null;
  }

  getRawObject() {
    return this.object;
  }

  getObject() {
    const obj = this.object;
    const clone = Object.assign({}, obj);
    delete clone.group;
    return new AirshipObject(clone);
  }

  getGroup() {
    const group = this.object.group || null;
    return group && new AirshipObject(group);
  }

}

const RULE_TYPE_STRING = 'string';
const RULE_TYPE_INT = 'int';
const RULE_TYPE_FLOAT = 'float';
const RULE_TYPE_BOOLEAN = 'boolean';
const RULE_TYPE_DATE = 'date';
const RULE_TYPE_DATETIME = 'datetime';
const RULE_OPERATOR_IS = 'is';
const RULE_OPERATOR_IS_NOT = 'is_not';
const RULE_OPERATOR_IN = 'in';
const RULE_OPERATOR_NOT_IN = 'not_in';
const RULE_OPERATOR_LT = 'lt';
const RULE_OPERATOR_LTE = 'lte';
const RULE_OPERATOR_GT = 'gt';
const RULE_OPERATOR_GTE = 'gte';
const RULE_OPERATOR_FROM = 'from';
const RULE_OPERATOR_UNTIL = 'until';
const RULE_OPERATOR_AFTER = 'after';
const RULE_OPERATOR_BEFORE = 'before';
const getHashedValue = s => {
  return parseInt(md5(s), 16) * 1.0 / 340282366920938463463374607431768211455;
};
class Population {
  constructor(population) {
    this.population = population;
  }

  static categorizeValueType(v) {
    if (v === true || v === false) {
      return 'boolean';
    } else if (typeof v === 'number') {
      if ((v + '').indexOf('.') >= 0) {
        return 'float';
      } else {
        return 'int';
      }
    } else if (typeof v === 'string') {
      const unixTimestamp = new Date(v).getTime();

      if (!isNaN(unixTimestamp)) {
        const isoFormat = new Date(v).toISOString();
        const timeIndex = isoFormat.lastIndexOf('T00:00:00.000Z');

        if (timeIndex !== -1 && isoFormat.length - 'T00:00:00.000Z'.length === timeIndex) {
          return 'date';
        } else {
          return 'datetime';
        }
      }

      return 'string';
    }

    logger('Unexpected attribute value type encountered');
    return null;
  }

  _ruleMatches(rule, obj) {
    const attributes = obj.attributes || {};

    if (!attributes.hasOwnProperty(rule.attributeName)) {
      return false;
    }

    const v = attributes[rule.attributeName];
    const attributeType = Population.categorizeValueType(v);
    const numberTypes = [RULE_TYPE_INT, RULE_TYPE_FLOAT];

    if (numberTypes.indexOf(attributeType) !== -1 && numberTypes.indexOf(rule.attributeType) !== -1) ; else if (attributeType !== rule.attributeType) {
      return false;
    }

    const targetVal = rule.value;
    const targetValList = rule.valueList;
    const op = rule.operator;

    if (attributeType === RULE_TYPE_STRING) {
      if (op === RULE_OPERATOR_IS) {
        return v === targetVal;
      } else if (op === RULE_OPERATOR_IS_NOT) {
        return v !== targetVal;
      } else if (op === RULE_OPERATOR_IN) {
        return targetValList.indexOf(v) !== -1;
      } else if (op === RULE_OPERATOR_NOT_IN) {
        return targetValList.indexOf(v) === -1;
      } else {
        logger('Invalid rule operator encountered');
        return false;
      }
    } else if (numberTypes.indexOf(attributeType) !== -1) {
      if (op === RULE_OPERATOR_IS) {
        return v === targetVal;
      } else if (op === RULE_OPERATOR_IS_NOT) {
        return v !== targetVal;
      } else if (op === RULE_OPERATOR_IN) {
        return targetValList.indexOf(v) !== -1;
      } else if (op === RULE_OPERATOR_NOT_IN) {
        return targetValList.indexOf(v) === -1;
      } else if (op === RULE_OPERATOR_LT) {
        return v < targetVal;
      } else if (op === RULE_OPERATOR_LTE) {
        return v <= targetVal;
      } else if (op === RULE_OPERATOR_GT) {
        return v > targetVal;
      } else if (op === RULE_OPERATOR_GTE) {
        return v >= targetVal;
      } else {
        logger('Invalid rule operator encountered');
        return false;
      }
    } else if (attributeType === RULE_TYPE_BOOLEAN) {
      if (op === RULE_OPERATOR_IS) {
        return v === targetVal;
      } else if (op === RULE_OPERATOR_IS_NOT) {
        return v !== targetVal;
      } else {
        logger('Invalid rule operator encountered');
        return false;
      }
    } else if (attributeType === RULE_TYPE_DATE || attributeType === RULE_TYPE_DATETIME) {
      const targetTime = targetVal && new Date(targetVal).getTime();
      const targetTimeList = targetValList && targetValList.map(tv => new Date(tv).getTime());
      const vTime = new Date(v).getTime();

      if (op === RULE_OPERATOR_IS) {
        return vTime === targetTime;
      } else if (op === RULE_OPERATOR_IS_NOT) {
        return vTime !== targetTime;
      } else if (op === RULE_OPERATOR_IN) {
        return targetTimeList.indexOf(vTime) !== -1;
      } else if (op === RULE_OPERATOR_NOT_IN) {
        return targetTimeList.indexOf(vTime) === -1;
      } else if (op === RULE_OPERATOR_FROM) {
        return vTime >= targetTime;
      } else if (op === RULE_OPERATOR_UNTIL) {
        return vTime <= targetTime;
      } else if (op === RULE_OPERATOR_AFTER) {
        return vTime > targetTime;
      } else if (op === RULE_OPERATOR_BEFORE) {
        return vTime < targetTime;
      } else {
        logger('Invalid rule operator encountered');
        return false;
      }
    } else {
      logger('Invalid attribute type encountered');
      return false;
    }
  }

  getGateValues(obj, env, flag, sticky) {
    const population = this.population;

    if (this.population.entityType !== obj.type) {
      return {
        eligible: false
      };
    }

    const splits = sticky ? this.population.universes[Math.floor(parseInt(this.population.percentage * 100)) - 1] : flag.splits;
    const splitsMap = {};

    for (let i = 0; i < splits.length; i++) {
      const split = splits[i];
      splitsMap[split.treatmentId] = split;
    }

    const rules = population.rules;
    let matches = true;

    for (let i = 0; i < rules.length; i++) {
      const r = rules[i];
      matches = matches && this._ruleMatches(r, obj);
    }

    if (matches) {
      const samplingHashKey = `SAMPLING:control_${flag.hashKey}:env_${env.hashKey}:rule_set_${this.population.hashKey}:client_object_${obj.type}_${obj.id}`;

      if (getHashedValue(samplingHashKey) <= this.population.percentage) {
        if (this.population.percentage === 0) {
          return {
            eligible: false
          };
        }

        const allocationHashKey = `DISTRIBUTION:control_${flag.hashKey}:env_${env.hashKey}:client_object_${obj.type}_${obj.id}`;
        const allocationHashedPercentage = getHashedValue(allocationHashKey);
        let trailingSum = 0.0;
        const treatments = flag.treatments.filter(t => !t.isOffTreatment);
        let treatment = null;

        for (let i = 0; i < treatments.length; i++) {
          const t = treatments[i];

          if (splitsMap.hasOwnProperty(t.treatmentId)) {
            trailingSum = parseFloat((trailingSum + splitsMap[t.treatmentId].percentage).toFixed(3));

            if (allocationHashedPercentage <= trailingSum) {
              treatment = t;
              break;
            }
          }
        }

        return {
          treatment: treatment,
          eligible: true
        };
      } else {
        return {
          eligible: true
        };
      }
    } else {
      return {
        eligible: false
      };
    }
  }

}

const NS_PER_SEC = 1e9;
class Stat {
  static compactStats(stats) {
    const groups = stats.reduce((groups, stat) => {
      const key = [stat.name, stat.type].join(',');
      groups[key] = groups[key] || [];
      groups[key].push(stat);
      return groups;
    }, {});
    return Object.values(groups).map(stats => {
      const newStat = new Stat(stats[0].name, stats[0].type);

      switch (newStat.type) {
        case Stat.TYPE_DURATION:
          const totalDuration = stats.reduce((duration, stat) => duration + stat.averageDuration * stat.count, 0);
          const totalCount = stats.reduce((count, stat) => count + stat.count, 0);
          newStat.setAverageDuration(totalDuration / totalCount);
          newStat.setCount(totalCount);
          break;

        case Stat.TYPE_COUNT:
          newStat.setCount(stats.reduce((count, stat) => count + stat.count, 0));
          break;
      }

      return newStat;
    });
  }

  constructor(name, type) {
    const allowedTypes = [Stat.TYPE_DURATION, Stat.TYPE_COUNT];

    if (allowedTypes.indexOf(type) === -1) {
      throw 'Invalid stat type passed';
    }

    this.name = name;
    this.type = type;
    this.count = 0;
    this.startTime = null;
    this.averageDuration = 0;
  }

  start() {
    if (this.averageDuration !== 0) {
      throw 'Duration already calculated';
    }

    if (this.startTime !== null) {
      throw 'Stat start() already called';
    }

    this.startTime = process.hrtime();
    return this;
  }

  stop() {
    if (this.averageDuration !== 0) {
      throw 'Duration already calculated';
    }

    if (this.startTime === null) {
      throw 'Stat start() has not been called';
    }

    const stopTime = process.hrtime(this.startTime);
    this.averageDuration = stopTime[0] * NS_PER_SEC + stopTime[1];
    this.count = 1;
    return this;
  }

  setCount(n) {
    this.count = n;
    return this;
  }

  setAverageDuration(t) {
    this.averageDuration = t;
    return this;
  }

  getDuration() {
    return this.averageDuration;
  }

  getStatsObj() {
    const statsObj = {
      name: this.name
    };

    if (this.type === Stat.TYPE_DURATION) {
      if (this.averageDuration !== 0) {
        statsObj.duration = this.averageDuration;
        statsObj.unit = 'ns';
        statsObj.count = this.count;
        return statsObj;
      }
    } else if (this.type === Stat.TYPE_COUNT) {
      statsObj.count = this.count;
      return statsObj;
    }

    return null;
  }

}
Stat.TYPE_DURATION = 'stat_type__duration';
Stat.TYPE_COUNT = 'stat_type__count';

class Environment {
  identify(obj) {
    this.object = obj;
  }

  async maybeIngest() {}

  _identifyObject(obj) {
    const airshipObj = obj instanceof AirshipObject ? obj : new AirshipObject(obj);
    return airshipObj;
  }

  _saveStat() {}

  _saveExposure() {}

  async publish(objs) {}

  shutdown() {}

  flag(flagName) {
    const flag = this.router.getFlag(flagName);
    flag.setDelegate(this);
    return flag;
  }

  _getAllocation(flag, airshipObj) {
    const offTreatment = flag.offTreatment;

    if (flag.isArchived()) {
      logger(`The flag "${flag.codename}" has been archived`);
      return {
        treatment: offTreatment,
        eligible: false
      };
    }

    if (flag.isPaused) {
      return {
        treatment: offTreatment,
        eligible: false
      };
    } // If the airshipObj is not a valid obj,
    // then return the offTreatment/false


    if (!airshipObj) {
      return {
        treatment: offTreatment,
        eligible: false
      };
    }

    const id = airshipObj.getId();
    const override = flag.overrides[id];

    if (override) {
      const treatment = flag.treatmentsMap[override.treatmentId];
      return {
        treatment: treatment,
        eligible: !treatment.isOffTreatment,
        fromOverride: true
      };
    }

    const obj = airshipObj.getRawObject();
    const useUniverses = flag.getType() === 'experiment';
    const populations = flag.populations;
    let treatment = null;
    let eligible = false;

    for (let i = 0; i < populations.length; i++) {
      const p = new Population(populations[i]);
      const gateValues = p.getGateValues(obj, this.router.getEnv(), flag, useUniverses);
      eligible = eligible || gateValues.eligible;

      if (gateValues.treatment) {
        treatment = gateValues.treatment;
        break;
      }
    }

    return {
      treatment: treatment || offTreatment,
      eligible: eligible
    };
  }

  _resolveAllocations(alloc1, alloc2) {
    if (alloc1.fromOverride) {
      return alloc1;
    }

    if (alloc2.fromOverride) {
      return alloc2;
    }

    if (!alloc1.treatment.isOffTreatment) {
      return alloc1;
    }

    if (!alloc2.treatment.isOffTreatment) {
      return alloc2;
    }

    return alloc1;
  }

  _getExposure(airshipObj, alloc) {
    const obj = airshipObj.getRawObject();
    return {
      type: obj.type,
      id: obj.id,
      treatmentId: alloc.treatment.treatmentId,
      treatment: alloc.treatment.codename
    };
  }

  getTreatment(flag, obj) {
    const stat = new Stat('duration__get_treatment', Stat.TYPE_DURATION);
    stat.start();
    obj = obj || this.object;

    const airshipObj = this._identifyObject(obj);

    if (!airshipObj.isValid() || flag.isUncategorized()) {
      return 'off';
    }

    const allocation = this._getAllocation(flag, airshipObj);

    const groupAllocation = this._getAllocation(flag, airshipObj.getGroup());

    const finalAllocation = this._resolveAllocations(allocation, groupAllocation);

    const expo = this._getExposure(airshipObj, finalAllocation);

    this._saveExposure(expo);

    stat.stop();

    this._saveStat(stat);

    return finalAllocation.treatment.codename;
  }

  getPayload(flag, obj) {
    const stat = new Stat('duration__get_payload', Stat.TYPE_DURATION);
    stat.start();
    obj = obj || this.object;

    const airshipObj = this._identifyObject(obj);

    if (!airshipObj.isValid() || flag.isUncategorized()) {
      return null;
    }

    const allocation = this._getAllocation(flag, airshipObj);

    const groupAllocation = this._getAllocation(flag, airshipObj.getGroup());

    const finalAllocation = this._resolveAllocations(allocation, groupAllocation);

    stat.stop();

    this._saveStat(stat);

    return finalAllocation.treatment.payload;
  }

  isEligible(flag, obj) {
    const stat = new Stat('duration__is_eligible', Stat.TYPE_DURATION);
    stat.start();
    obj = obj || this.object;

    const airshipObj = this._identifyObject(obj);

    if (!airshipObj.isValid() || flag.isUncategorized()) {
      return false;
    }

    const allocation = this._getAllocation(flag, airshipObj);

    const groupAllocation = this._getAllocation(flag, airshipObj.getGroup());

    const finalAllocation = this._resolveAllocations(allocation, groupAllocation);

    stat.stop();

    this._saveStat(stat);

    return finalAllocation.eligible;
  }

  isEnabled(flag, obj) {
    const stat = new Stat('duration__is_enabled', Stat.TYPE_DURATION);
    stat.start();
    obj = obj || this.object;

    const airshipObj = this._identifyObject(obj);

    if (!airshipObj.isValid() || flag.isUncategorized()) {
      return false;
    }

    const allocation = this._getAllocation(flag, airshipObj);

    const groupAllocation = this._getAllocation(flag, airshipObj.getGroup());

    const finalAllocation = this._resolveAllocations(allocation, groupAllocation);

    stat.stop();

    this._saveStat(stat);

    return !finalAllocation.treatment.isOffTreatment;
  }

}

// Based on https://chrisrng.svbtle.com/lru-cache-in-javascript

class Flag {
  constructor(flag, delegate) {
    if (typeof flag === 'string') {
      this._isWild = true;
      this.flagName = flag;
    } else {
      // These along with flag.flagType and flag.flagStatus
      // should always be present
      this.hashKey = flag.hashKey;
      this.flag = flag;
      this.codename = flag.codename; // Pass through fields

      this.isPaused = flag.isPaused;
      this.offTreatment = flag.offTreatment;
      this.treatments = flag.treatments;
      this.treatmentsMap = flag.treatmentsMap;
      this.overrides = flag.overrides;
      this.populations = flag.populations;
      this.splits = flag.splits;
    }

    this.delegate = delegate;
  }

  isUncategorized() {
    return Boolean(this._isWild) || this.flag.flagType === 'uncategorized';
  }

  isWild() {
    return Boolean(this._isWild);
  }

  isArchived() {
    return this.flag.flagStatus === 'archived';
  }

  setDelegate(delegate) {
    this.delegate = delegate;
  }

  getType() {
    if (this._isWild) {
      logger(`Encountered uncategorized flag "${this.flagName}". Visit Airship web app to convert it to a real flag`);
      return 'uncategorized';
    }

    const flagType = this.flag.flagType;

    switch (flagType) {
      case 'basic':
        return 'basic';

      case 'experiment':
        return 'experiment';

      case 'uncategorized':
        return 'uncategorized';

      default:
        logger('Unexpected flag type encountered');
        return null;
    }
  }

  getTreatment(obj) {
    if (!this.delegate) {
      throw 'Delegate not provided to flag';
    }

    return this.delegate.getTreatment(this, obj);
  }

  getPayload(obj) {
    if (!this.delegate) {
      throw 'Delegate not provided to flag';
    }

    return this.delegate.getPayload(this, obj);
  }

  isEligible(obj) {
    if (!this.delegate) {
      throw 'Delegate not provided to flag';
    }

    return this.delegate.isEligible(this, obj);
  }

  isEnabled(obj) {
    if (!this.delegate) {
      throw 'Delegate not provided to flag';
    }

    return this.delegate.isEnabled(this, obj);
  }

}

class Router {
  constructor(gatingInfo) {
    this.gatingInfo = gatingInfo;
    this.gatingInfoMap = this._getGatingInfoMap(this.gatingInfo);
  }

  _getGatingInfoMap(gatingInfo) {
    const map = {};
    const flags = gatingInfo.flags;

    for (let i = 0; i < flags.length; i++) {
      const flag = Object.assign({}, flags[i]);

      if (flag.flagType === 'uncategorized' || flag.flagStatus === 'archived') {
        map[flag.codename] = new Flag(flag);
        continue;
      }

      const overrides = flag.overrides;
      const overridesMap = {};

      for (let j = 0; j < overrides.length; j++) {
        const override = overrides[j];
        overridesMap[`${override.entityType}_${override.entityId}`] = override;
      }

      flag.overrides = overridesMap;
      const treatments = flag.treatments;
      const treatmentsMap = {};
      let offTreatment = null;

      for (let k = 0; k < treatments.length; k++) {
        const treatment = treatments[k];
        treatmentsMap[treatment.treatmentId] = treatment;

        if (treatment.isOffTreatment) {
          offTreatment = treatment;
        }
      }

      flag.treatments = treatments;
      flag.treatmentsMap = treatmentsMap;
      flag.offTreatment = offTreatment;
      map[flag.codename] = new Flag(flag);
    }

    return map;
  }

  getIngestionMaxItem() {
    const sdkInfo = this.gatingInfo.sdkInfo;

    if (sdkInfo) {
      return sdkInfo.SDK_INGESTION_MAX_ITEMS;
    }

    return null;
  }

  getIngestionInterval() {
    const sdkInfo = this.gatingInfo.sdkInfo;

    if (sdkInfo) {
      return sdkInfo.SDK_INGESTION_INTERVAL * 1000;
    }

    return null;
  }

  getFlag(flagName) {
    return this.gatingInfoMap[flagName] || new Flag(flagName);
  }

  getEnv() {
    return this.gatingInfo.env;
  }

  isLocallyConfigured() {
    return this.getEnv().envKey === null;
  }

}

const SCHEMA$1 = {
  type: 'object',
  patternProperties: {
    '^.{1,150}$': {
      type: 'object',
      properties: {
        whitelist: {
          type: 'array',
          items: {
            type: ['integer', 'string'],
            errorMessage: {
              type: 'An ID can be a string or integer. Integer ID will be cast into a string.'
            }
          },
          errorMessage: {
            type: '`whitelist` must be an array of IDs (string|integer)'
          }
        },
        blacklist: {
          type: 'array',
          items: {
            type: ['integer', 'string'],
            errorMessage: {
              type: 'An ID can be a string or integer. Integer ID will be cast into a string.'
            }
          },
          errorMessage: {
            type: '`blacklist` must be an array of IDs (string|integer)'
          }
        },
        population: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attribute: {
                type: 'string',
                maxLength: 50,
                errorMessage: {
                  type: 'A population\'s filter attribute must be a string of 50 characters or less. E.g., "age", "height", "birthDate", etc.',
                  maxLength: 'A population\'s filter attribute must be a string of 50 characters or less. E.g., "age", "height", "birthDate", etc.'
                }
              },
              operator: {
                type: 'string',
                enum: ['is', 'is_not', 'in', 'not_in', 'lt', 'lte', 'gt', 'gte', 'from', 'until', 'after', 'before'],
                errorMessage: {
                  type: 'A population\'s filter operator must be a string and must be one of: ["is", "is_not", "in", "not_in", "lt", "lte", "gt", "gte", "from", "until", "after", "before"]',
                  enum: 'A population\'s filter operator must be a string and must be one of: ["is", "is_not", "in", "not_in", "lt", "lte", "gt", "gte", "from", "until", "after", "before"]'
                }
              },
              value: {
                type: ['number', 'string', 'boolean', 'array'],
                maxLength: 3000,
                items: {
                  oneOf: [{
                    type: 'number',
                    errorMessage: {
                      type: "A population's filter valueList must contain numbers or strings."
                    }
                  }, {
                    type: 'string',
                    maxLength: 3000,
                    errorMessage: {
                      maxLength: 'A string value for a population filter must be 3000 characters or less'
                    }
                  }]
                },
                minItems: 1,
                errorMessage: {
                  type: "A population's filter value is a number, string, or boolean or an array of numbers or strings.",
                  maxLength: 'A string value for a population filter must be 3000 characters or less',
                  minItems: "A population's filter value must have at least one item if it is an array."
                }
              }
            },
            errorMessage: {
              type: 'Each filter within a population is represented by an object of the form: {attribute: <attribute>, operator: <operator>, value/valueList: <value>/<valueList>}'
            }
          },
          errorMessage: {
            type: '`population` must be an array of filters, each of the form: {attribute: <attribute>, operator: <operator>, value/valueList: <value>/<valueList>}'
          }
        },
        sample: {
          type: 'number',
          minimum: 0.0,
          maximum: 1.0,
          errorMessage: {
            type: '`sample` must be a float between 0.0 and 1.0, inclusive',
            minimum: '`sample` must be between 0.0 and 1.0, inclusive',
            maximum: '`sample` must be between 0.0 and 1.0, inclusive'
          }
        },
        active: {
          type: 'boolean',
          errorMessage: {
            type: '`active` must be a boolean'
          }
        }
      },
      additionalProperties: false,
      errorMessage: {
        type: 'flagConfig must be a dictionary of flag name keys to flag configuration values',
        additionalProperties: 'Unexpected config option found. Please refer to the documentation.'
      }
    }
  },
  errorMessage: {
    patternProperties: 'Flag name must be strings of up to 150 characters.'
  }
};
const ajv$1 = Ajv({
  allErrors: true,
  jsonPointers: true
});
ajvErrors(ajv$1);
const validate$1 = ajv$1.compile(SCHEMA$1);
const isValidFlagConfig = flagConfig => {
  const isValid = validate$1(flagConfig);

  if (!isValid) {
    logger(validate$1.errors.map(e => e.message));
  }

  return isValid;
};

const RULE_TYPE_TO_ALLOWED_OPERATORS = {
  [RULE_TYPE_STRING]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT, RULE_OPERATOR_IN, RULE_OPERATOR_NOT_IN]),
  [RULE_TYPE_INT]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT, RULE_OPERATOR_IN, RULE_OPERATOR_NOT_IN, RULE_OPERATOR_LT, RULE_OPERATOR_LTE, RULE_OPERATOR_GT, RULE_OPERATOR_GTE]),
  [RULE_TYPE_FLOAT]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT, RULE_OPERATOR_IN, RULE_OPERATOR_NOT_IN, RULE_OPERATOR_LT, RULE_OPERATOR_LTE, RULE_OPERATOR_GT, RULE_OPERATOR_GTE]),
  [RULE_TYPE_BOOLEAN]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT]),
  [RULE_TYPE_DATE]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT, RULE_OPERATOR_IN, RULE_OPERATOR_NOT_IN, RULE_OPERATOR_FROM, RULE_OPERATOR_UNTIL, RULE_OPERATOR_AFTER, RULE_OPERATOR_BEFORE]),
  [RULE_TYPE_DATETIME]: new Set([RULE_OPERATOR_IS, RULE_OPERATOR_IS_NOT, RULE_OPERATOR_IN, RULE_OPERATOR_NOT_IN, RULE_OPERATOR_FROM, RULE_OPERATOR_UNTIL, RULE_OPERATOR_AFTER, RULE_OPERATOR_BEFORE])
};
const transformFlagConfig = flagConfig => {
  if (!isValidFlagConfig(flagConfig)) {
    return null;
  }

  const flags = [];
  const keys = Object.keys(flagConfig);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const config = flagConfig[key];
    const active = config.active !== undefined ? config.active : true;
    const flagInfo = {
      flagType: 'basic',
      hashKey: key,
      isPaused: !active,
      isWebAccessible: false,
      codename: key,
      flagStatus: 'operational'
    };
    const whitelist = config.whitelist || [];
    const blacklist = config.blacklist || [];
    const blacklistSet = new Set(blacklist);
    const filteredWhitelist = whitelist.filter(i => !blacklistSet.has(i));
    flagInfo.treatments = [{
      treatmentId: 'off-treatment',
      codename: 'off',
      isControl: false,
      isOffTreatment: true
    }, {
      treatmentId: 'on-treatment',
      codename: 'on',
      isControl: false,
      isOffTreatment: false
    }];
    flagInfo.overrides = [];
    flagInfo.overrides = flagInfo.overrides.concat(filteredWhitelist.map(i => ({
      treatmentId: 'on-treatment',
      entityType: 'User',
      entityId: i.toString()
    })));
    flagInfo.overrides = flagInfo.overrides.concat(blacklist.map(i => ({
      treatmentId: 'off-treatment',
      entityType: 'User',
      entityId: i.toString()
    })));
    flagInfo.splits = [{
      treatmentId: 'on-treatment',
      percentage: 1
    }];

    if (config.population) {
      const rules = config.population || [];
      const ruleInfos = [];

      for (let j = 0; j < rules.length; j++) {
        const r = rules[j];
        let type;

        if (Array.isArray(r.value)) {
          const types = new Set(r.value.map(v => Population.categorizeValueType(v)));

          if (types.size != 1) {
            logger("Population's filter criteria each should have a singular value type. In other words, do not mix strings with numbers in the same array, for example.");
            return null;
          }

          type = Array.from(types)[0];
        } else {
          type = Population.categorizeValueType(r.value);
        }

        const rInfo = {
          attributeName: r.attribute,
          attributeType: type,
          operator: r.operator,
          value: !Array.isArray(r.value) ? r.value : null,
          valueList: !Array.isArray(r.value) ? null : r.value
        };

        if (!RULE_TYPE_TO_ALLOWED_OPERATORS[type].has(r.operator)) {
          logger(`Population's filter operator \`${r.operator}\` is not allowed for filter type \`${type}\``);
          return null;
        }

        if (rInfo.valueList) {
          if (rInfo.operator !== RULE_OPERATOR_IN && rInfo.operator !== RULE_OPERATOR_NOT_IN) {
            logger("Population's filter operator must be `in` or `not_in` if the value is an array.");
            return null;
          }
        } else {
          if (rInfo.operator === RULE_OPERATOR_IN && rInfo.operator === RULE_OPERATOR_NOT_IN) {
            logger("Population's filter operator must not be `in` or `not_in` if the value is a number, boolean or string.");
            return null;
          }
        }

        ruleInfos.push(rInfo);
      }

      flagInfo.populations = [{
        hashKey: 'population-1',
        entityType: 'User',
        percentage: config.sample || 0.0,
        rules: ruleInfos,
        universes: []
      }];
    } else {
      flagInfo.populations = [{
        hashKey: 'population-1',
        entityType: 'User',
        percentage: config.sample || 0.0,
        rules: [],
        universes: []
      }];
    }

    flags.push(flagInfo);
  }

  return {
    flags: flags,
    env: {
      hashKey: 'env-1',
      envKey: null
    }
  };
};

class Core extends Environment {
  async configure(flagConfig) {
    const gatingInfo = transformFlagConfig(flagConfig);

    if (gatingInfo === null) {
      throw 'Failed to transform flagConfig into initial gating information';
    }

    this.router = new Router(gatingInfo);
  }

}

const defaultEnv = new Core();
defaultEnv.configure({});

class AirshipLegacy {
  constructor(options) {
    this.envKey = options.envKey;
    this.airship = new AirshipBase();
  }

  async init() {
    console.warn('This method is deprecated. Please refer to v2 documentation.');
    await this.airship.configure({
      envKey: this.envKey
    });
  }

  isEnabled(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.');
    return this.airship.flag(controlShortName).isEnabled(object);
  }

  getVariation(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.');
    return this.airship.flag(controlShortName).getTreatment(object);
  }

  isEligible(controlShortName, object) {
    console.warn('This method is deprecated. Please refer to v2 documentation.');
    return this.airship.flag(controlShortName).isEligible(object);
  }

}

module.exports = AirshipLegacy;
//# sourceMappingURL=compat.js.map
