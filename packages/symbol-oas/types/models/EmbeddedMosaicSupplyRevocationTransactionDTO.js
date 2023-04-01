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
exports.EmbeddedMosaicSupplyRevocationTransactionDTOToJSON = exports.EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped = exports.EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON = exports.instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO = void 0;
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the EmbeddedMosaicSupplyRevocationTransactionDTO interface.
 */
function instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO = instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO;
function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON(json) {
    return EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json, false);
}
exports.EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON = EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON;
function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json["signerPublicKey"],
        version: json["version"],
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json["network"]),
        type: json["type"],
        sourceAddress: json["sourceAddress"],
        mosaicId: json["mosaicId"],
        amount: json["amount"],
    };
}
exports.EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped = EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped;
function EmbeddedMosaicSupplyRevocationTransactionDTOToJSON(value) {
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
        sourceAddress: value.sourceAddress,
        mosaicId: value.mosaicId,
        amount: value.amount,
    };
}
exports.EmbeddedMosaicSupplyRevocationTransactionDTOToJSON = EmbeddedMosaicSupplyRevocationTransactionDTOToJSON;
