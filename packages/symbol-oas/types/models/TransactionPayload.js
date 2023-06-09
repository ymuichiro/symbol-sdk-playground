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
exports.TransactionPayloadToJSON = exports.TransactionPayloadFromJSONTyped = exports.TransactionPayloadFromJSON = exports.instanceOfTransactionPayload = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionPayload interface.
 */
function instanceOfTransactionPayload(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionPayload = instanceOfTransactionPayload;
function TransactionPayloadFromJSON(json) {
    return TransactionPayloadFromJSONTyped(json, false);
}
exports.TransactionPayloadFromJSON = TransactionPayloadFromJSON;
function TransactionPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payload': !(0, runtime_1.exists)(json, 'payload') ? undefined : json['payload'],
    };
}
exports.TransactionPayloadFromJSONTyped = TransactionPayloadFromJSONTyped;
function TransactionPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payload': value.payload,
    };
}
exports.TransactionPayloadToJSON = TransactionPayloadToJSON;
