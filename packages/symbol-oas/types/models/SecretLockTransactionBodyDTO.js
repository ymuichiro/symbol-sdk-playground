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
exports.SecretLockTransactionBodyDTOToJSON = exports.SecretLockTransactionBodyDTOFromJSONTyped = exports.SecretLockTransactionBodyDTOFromJSON = exports.instanceOfSecretLockTransactionBodyDTO = void 0;
const LockHashAlgorithmEnum_1 = require("./LockHashAlgorithmEnum");
/**
 * Check if a given object implements the SecretLockTransactionBodyDTO interface.
 */
function instanceOfSecretLockTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    return isInstance;
}
exports.instanceOfSecretLockTransactionBodyDTO = instanceOfSecretLockTransactionBodyDTO;
function SecretLockTransactionBodyDTOFromJSON(json) {
    return SecretLockTransactionBodyDTOFromJSONTyped(json, false);
}
exports.SecretLockTransactionBodyDTOFromJSON = SecretLockTransactionBodyDTOFromJSON;
function SecretLockTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hashAlgorithm': (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumFromJSON)(json['hashAlgorithm']),
    };
}
exports.SecretLockTransactionBodyDTOFromJSONTyped = SecretLockTransactionBodyDTOFromJSONTyped;
function SecretLockTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hashAlgorithm': (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumToJSON)(value.hashAlgorithm),
    };
}
exports.SecretLockTransactionBodyDTOToJSON = SecretLockTransactionBodyDTOToJSON;
