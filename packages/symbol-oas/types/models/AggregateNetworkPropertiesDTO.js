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
exports.AggregateNetworkPropertiesDTOToJSON = exports.AggregateNetworkPropertiesDTOFromJSONTyped = exports.AggregateNetworkPropertiesDTOFromJSON = exports.instanceOfAggregateNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AggregateNetworkPropertiesDTO interface.
 */
function instanceOfAggregateNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAggregateNetworkPropertiesDTO = instanceOfAggregateNetworkPropertiesDTO;
function AggregateNetworkPropertiesDTOFromJSON(json) {
    return AggregateNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.AggregateNetworkPropertiesDTOFromJSON = AggregateNetworkPropertiesDTOFromJSON;
function AggregateNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxTransactionsPerAggregate': !(0, runtime_1.exists)(json, 'maxTransactionsPerAggregate') ? undefined : json['maxTransactionsPerAggregate'],
        'maxCosignaturesPerAggregate': !(0, runtime_1.exists)(json, 'maxCosignaturesPerAggregate') ? undefined : json['maxCosignaturesPerAggregate'],
        'enableStrictCosignatureCheck': !(0, runtime_1.exists)(json, 'enableStrictCosignatureCheck') ? undefined : json['enableStrictCosignatureCheck'],
        'enableBondedAggregateSupport': !(0, runtime_1.exists)(json, 'enableBondedAggregateSupport') ? undefined : json['enableBondedAggregateSupport'],
        'maxBondedTransactionLifetime': !(0, runtime_1.exists)(json, 'maxBondedTransactionLifetime') ? undefined : json['maxBondedTransactionLifetime'],
    };
}
exports.AggregateNetworkPropertiesDTOFromJSONTyped = AggregateNetworkPropertiesDTOFromJSONTyped;
function AggregateNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxTransactionsPerAggregate': value.maxTransactionsPerAggregate,
        'maxCosignaturesPerAggregate': value.maxCosignaturesPerAggregate,
        'enableStrictCosignatureCheck': value.enableStrictCosignatureCheck,
        'enableBondedAggregateSupport': value.enableBondedAggregateSupport,
        'maxBondedTransactionLifetime': value.maxBondedTransactionLifetime,
    };
}
exports.AggregateNetworkPropertiesDTOToJSON = AggregateNetworkPropertiesDTOToJSON;
