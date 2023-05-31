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
exports.HashLockTransactionDTOToJSON = exports.HashLockTransactionDTOFromJSONTyped = exports.HashLockTransactionDTOFromJSON = exports.instanceOfHashLockTransactionDTO = void 0;
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the HashLockTransactionDTO interface.
 */
function instanceOfHashLockTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hash" in value;
    return isInstance;
}
exports.instanceOfHashLockTransactionDTO = instanceOfHashLockTransactionDTO;
function HashLockTransactionDTOFromJSON(json) {
    return HashLockTransactionDTOFromJSONTyped(json, false);
}
exports.HashLockTransactionDTOFromJSON = HashLockTransactionDTOFromJSON;
function HashLockTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hash': json['hash'],
    };
}
exports.HashLockTransactionDTOFromJSONTyped = HashLockTransactionDTOFromJSONTyped;
function HashLockTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hash': value.hash,
    };
}
exports.HashLockTransactionDTOToJSON = HashLockTransactionDTOToJSON;
