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
exports.AggregateTransactionBodyDTOToJSON = exports.AggregateTransactionBodyDTOFromJSONTyped = exports.AggregateTransactionBodyDTOFromJSON = exports.instanceOfAggregateTransactionBodyDTO = void 0;
const runtime_1 = require("../runtime");
const CosignatureDTO_1 = require("./CosignatureDTO");
/**
 * Check if a given object implements the AggregateTransactionBodyDTO interface.
 */
function instanceOfAggregateTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "transactionsHash" in value;
    return isInstance;
}
exports.instanceOfAggregateTransactionBodyDTO = instanceOfAggregateTransactionBodyDTO;
function AggregateTransactionBodyDTOFromJSON(json) {
    return AggregateTransactionBodyDTOFromJSONTyped(json, false);
}
exports.AggregateTransactionBodyDTOFromJSON = AggregateTransactionBodyDTOFromJSON;
function AggregateTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionsHash': json['transactionsHash'],
        'cosignatures': !(0, runtime_1.exists)(json, 'cosignatures') ? undefined : (json['cosignatures'].map(CosignatureDTO_1.CosignatureDTOFromJSON)),
    };
}
exports.AggregateTransactionBodyDTOFromJSONTyped = AggregateTransactionBodyDTOFromJSONTyped;
function AggregateTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionsHash': value.transactionsHash,
        'cosignatures': value.cosignatures === undefined ? undefined : (value.cosignatures.map(CosignatureDTO_1.CosignatureDTOToJSON)),
    };
}
exports.AggregateTransactionBodyDTOToJSON = AggregateTransactionBodyDTOToJSON;
