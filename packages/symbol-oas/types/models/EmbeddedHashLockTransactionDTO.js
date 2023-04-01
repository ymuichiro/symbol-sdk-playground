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
exports.EmbeddedHashLockTransactionDTOToJSON = exports.EmbeddedHashLockTransactionDTOFromJSONTyped = exports.EmbeddedHashLockTransactionDTOFromJSON = exports.instanceOfEmbeddedHashLockTransactionDTO = void 0;
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the EmbeddedHashLockTransactionDTO interface.
 */
function instanceOfEmbeddedHashLockTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hash" in value;
    return isInstance;
}
exports.instanceOfEmbeddedHashLockTransactionDTO = instanceOfEmbeddedHashLockTransactionDTO;
function EmbeddedHashLockTransactionDTOFromJSON(json) {
    return EmbeddedHashLockTransactionDTOFromJSONTyped(json, false);
}
exports.EmbeddedHashLockTransactionDTOFromJSON = EmbeddedHashLockTransactionDTOFromJSON;
function EmbeddedHashLockTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json["signerPublicKey"],
        version: json["version"],
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json["network"]),
        type: json["type"],
        mosaicId: json["mosaicId"],
        amount: json["amount"],
        duration: json["duration"],
        hash: json["hash"],
    };
}
exports.EmbeddedHashLockTransactionDTOFromJSONTyped = EmbeddedHashLockTransactionDTOFromJSONTyped;
function EmbeddedHashLockTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signerPublicKey: value.signerPublicKey,
        version: value.version,
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        type: value.type,
        mosaicId: value.mosaicId,
        amount: value.amount,
        duration: value.duration,
        hash: value.hash,
    };
}
exports.EmbeddedHashLockTransactionDTOToJSON = EmbeddedHashLockTransactionDTOToJSON;
