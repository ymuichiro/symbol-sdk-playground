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
exports.NamespaceMetadataTransactionDTOToJSON = exports.NamespaceMetadataTransactionDTOFromJSONTyped = exports.NamespaceMetadataTransactionDTOFromJSON = exports.instanceOfNamespaceMetadataTransactionDTO = void 0;
const runtime_1 = require("../runtime");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the NamespaceMetadataTransactionDTO interface.
 */
function instanceOfNamespaceMetadataTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfNamespaceMetadataTransactionDTO = instanceOfNamespaceMetadataTransactionDTO;
function NamespaceMetadataTransactionDTOFromJSON(json) {
    return NamespaceMetadataTransactionDTOFromJSONTyped(json, false);
}
exports.NamespaceMetadataTransactionDTOFromJSON = NamespaceMetadataTransactionDTOFromJSON;
function NamespaceMetadataTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        size: json["size"],
        signature: json["signature"],
        signerPublicKey: json["signerPublicKey"],
        version: json["version"],
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json["network"]),
        type: json["type"],
        maxFee: json["maxFee"],
        deadline: json["deadline"],
        targetAddress: json["targetAddress"],
        scopedMetadataKey: json["scopedMetadataKey"],
        targetNamespaceId: !(0, runtime_1.exists)(json, "targetNamespaceId")
            ? undefined
            : json["targetNamespaceId"],
        valueSizeDelta: json["valueSizeDelta"],
        valueSize: json["valueSize"],
        value: json["value"],
    };
}
exports.NamespaceMetadataTransactionDTOFromJSONTyped = NamespaceMetadataTransactionDTOFromJSONTyped;
function NamespaceMetadataTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        size: value.size,
        signature: value.signature,
        signerPublicKey: value.signerPublicKey,
        version: value.version,
        network: (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        type: value.type,
        maxFee: value.maxFee,
        deadline: value.deadline,
        targetAddress: value.targetAddress,
        scopedMetadataKey: value.scopedMetadataKey,
        targetNamespaceId: value.targetNamespaceId,
        valueSizeDelta: value.valueSizeDelta,
        valueSize: value.valueSize,
        value: value.value,
    };
}
exports.NamespaceMetadataTransactionDTOToJSON = NamespaceMetadataTransactionDTOToJSON;
