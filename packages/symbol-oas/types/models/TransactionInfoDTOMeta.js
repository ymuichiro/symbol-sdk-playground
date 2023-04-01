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
exports.TransactionInfoDTOMetaToJSON = exports.TransactionInfoDTOMetaFromJSONTyped = exports.TransactionInfoDTOMetaFromJSON = exports.instanceOfTransactionInfoDTOMeta = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionInfoDTOMeta interface.
 */
function instanceOfTransactionInfoDTOMeta(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "merkleComponentHash" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "aggregateHash" in value;
    isInstance = isInstance && "aggregateId" in value;
    return isInstance;
}
exports.instanceOfTransactionInfoDTOMeta = instanceOfTransactionInfoDTOMeta;
function TransactionInfoDTOMetaFromJSON(json) {
    return TransactionInfoDTOMetaFromJSONTyped(json, false);
}
exports.TransactionInfoDTOMetaFromJSON = TransactionInfoDTOMetaFromJSON;
function TransactionInfoDTOMetaFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        height: json["height"],
        hash: json["hash"],
        merkleComponentHash: json["merkleComponentHash"],
        index: json["index"],
        timestamp: !(0, runtime_1.exists)(json, "timestamp") ? undefined : json["timestamp"],
        feeMultiplier: !(0, runtime_1.exists)(json, "feeMultiplier")
            ? undefined
            : json["feeMultiplier"],
        aggregateHash: json["aggregateHash"],
        aggregateId: json["aggregateId"],
    };
}
exports.TransactionInfoDTOMetaFromJSONTyped = TransactionInfoDTOMetaFromJSONTyped;
function TransactionInfoDTOMetaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        height: value.height,
        hash: value.hash,
        merkleComponentHash: value.merkleComponentHash,
        index: value.index,
        timestamp: value.timestamp,
        feeMultiplier: value.feeMultiplier,
        aggregateHash: value.aggregateHash,
        aggregateId: value.aggregateId,
    };
}
exports.TransactionInfoDTOMetaToJSON = TransactionInfoDTOMetaToJSON;
