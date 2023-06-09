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
exports.TransactionHashesToJSON = exports.TransactionHashesFromJSONTyped = exports.TransactionHashesFromJSON = exports.instanceOfTransactionHashes = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionHashes interface.
 */
function instanceOfTransactionHashes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionHashes = instanceOfTransactionHashes;
function TransactionHashesFromJSON(json) {
    return TransactionHashesFromJSONTyped(json, false);
}
exports.TransactionHashesFromJSON = TransactionHashesFromJSON;
function TransactionHashesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hashes': !(0, runtime_1.exists)(json, 'hashes') ? undefined : json['hashes'],
    };
}
exports.TransactionHashesFromJSONTyped = TransactionHashesFromJSONTyped;
function TransactionHashesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hashes': value.hashes,
    };
}
exports.TransactionHashesToJSON = TransactionHashesToJSON;
