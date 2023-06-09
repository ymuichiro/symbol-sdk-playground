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
exports.TransactionBodyDTOToJSON = exports.TransactionBodyDTOFromJSONTyped = exports.TransactionBodyDTOFromJSON = exports.instanceOfTransactionBodyDTO = void 0;
/**
 * Check if a given object implements the TransactionBodyDTO interface.
 */
function instanceOfTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    return isInstance;
}
exports.instanceOfTransactionBodyDTO = instanceOfTransactionBodyDTO;
function TransactionBodyDTOFromJSON(json) {
    return TransactionBodyDTOFromJSONTyped(json, false);
}
exports.TransactionBodyDTOFromJSON = TransactionBodyDTOFromJSON;
function TransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
    };
}
exports.TransactionBodyDTOFromJSONTyped = TransactionBodyDTOFromJSONTyped;
function TransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxFee': value.maxFee,
        'deadline': value.deadline,
    };
}
exports.TransactionBodyDTOToJSON = TransactionBodyDTOToJSON;
