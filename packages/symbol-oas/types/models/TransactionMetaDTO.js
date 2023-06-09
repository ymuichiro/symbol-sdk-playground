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
exports.TransactionMetaDTOToJSON = exports.TransactionMetaDTOFromJSONTyped = exports.TransactionMetaDTOFromJSON = exports.instanceOfTransactionMetaDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionMetaDTO interface.
 */
function instanceOfTransactionMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "merkleComponentHash" in value;
    isInstance = isInstance && "index" in value;
    return isInstance;
}
exports.instanceOfTransactionMetaDTO = instanceOfTransactionMetaDTO;
function TransactionMetaDTOFromJSON(json) {
    return TransactionMetaDTOFromJSONTyped(json, false);
}
exports.TransactionMetaDTOFromJSON = TransactionMetaDTOFromJSON;
function TransactionMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'hash': json['hash'],
        'merkleComponentHash': json['merkleComponentHash'],
        'index': json['index'],
        'timestamp': !(0, runtime_1.exists)(json, 'timestamp') ? undefined : json['timestamp'],
        'feeMultiplier': !(0, runtime_1.exists)(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    };
}
exports.TransactionMetaDTOFromJSONTyped = TransactionMetaDTOFromJSONTyped;
function TransactionMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'hash': value.hash,
        'merkleComponentHash': value.merkleComponentHash,
        'index': value.index,
        'timestamp': value.timestamp,
        'feeMultiplier': value.feeMultiplier,
    };
}
exports.TransactionMetaDTOToJSON = TransactionMetaDTOToJSON;
