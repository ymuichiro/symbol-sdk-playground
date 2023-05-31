"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashLockNetworkPropertiesDTOToJSON = exports.HashLockNetworkPropertiesDTOFromJSONTyped = exports.HashLockNetworkPropertiesDTOFromJSON = exports.instanceOfHashLockNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HashLockNetworkPropertiesDTO interface.
 */
function instanceOfHashLockNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHashLockNetworkPropertiesDTO = instanceOfHashLockNetworkPropertiesDTO;
function HashLockNetworkPropertiesDTOFromJSON(json) {
    return HashLockNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.HashLockNetworkPropertiesDTOFromJSON = HashLockNetworkPropertiesDTOFromJSON;
function HashLockNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lockedFundsPerAggregate': !(0, runtime_1.exists)(json, 'lockedFundsPerAggregate') ? undefined : json['lockedFundsPerAggregate'],
        'maxHashLockDuration': !(0, runtime_1.exists)(json, 'maxHashLockDuration') ? undefined : json['maxHashLockDuration'],
    };
}
exports.HashLockNetworkPropertiesDTOFromJSONTyped = HashLockNetworkPropertiesDTOFromJSONTyped;
function HashLockNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lockedFundsPerAggregate': value.lockedFundsPerAggregate,
        'maxHashLockDuration': value.maxHashLockDuration,
    };
}
exports.HashLockNetworkPropertiesDTOToJSON = HashLockNetworkPropertiesDTOToJSON;
