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
exports.EmbeddedSecretProofTransactionDTOToJSON = exports.EmbeddedSecretProofTransactionDTOFromJSONTyped = exports.EmbeddedSecretProofTransactionDTOFromJSON = exports.instanceOfEmbeddedSecretProofTransactionDTO = void 0;
const LockHashAlgorithmEnum_1 = require("./LockHashAlgorithmEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the EmbeddedSecretProofTransactionDTO interface.
 */
function instanceOfEmbeddedSecretProofTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;
    return isInstance;
}
exports.instanceOfEmbeddedSecretProofTransactionDTO = instanceOfEmbeddedSecretProofTransactionDTO;
function EmbeddedSecretProofTransactionDTOFromJSON(json) {
    return EmbeddedSecretProofTransactionDTOFromJSONTyped(json, false);
}
exports.EmbeddedSecretProofTransactionDTOFromJSON = EmbeddedSecretProofTransactionDTOFromJSON;
function EmbeddedSecretProofTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json["signerPublicKey"],
        version: json["version"],
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json["network"]),
        type: json["type"],
        recipientAddress: json["recipientAddress"],
        secret: json["secret"],
        hashAlgorithm: (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumFromJSON)(json["hashAlgorithm"]),
        proof: json["proof"],
    };
}
exports.EmbeddedSecretProofTransactionDTOFromJSONTyped = EmbeddedSecretProofTransactionDTOFromJSONTyped;
function EmbeddedSecretProofTransactionDTOToJSON(value) {
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
        recipientAddress: value.recipientAddress,
        secret: value.secret,
        hashAlgorithm: (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumToJSON)(value.hashAlgorithm),
        proof: value.proof,
    };
}
exports.EmbeddedSecretProofTransactionDTOToJSON = EmbeddedSecretProofTransactionDTOToJSON;
