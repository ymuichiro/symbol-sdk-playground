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
exports.AggregateTransactionDTOToJSON = exports.AggregateTransactionDTOFromJSONTyped = exports.AggregateTransactionDTOFromJSON = exports.instanceOfAggregateTransactionDTO = void 0;
const CosignatureDTO_1 = require("./CosignatureDTO");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the AggregateTransactionDTO interface.
 */
function instanceOfAggregateTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "cosignatures" in value;
    return isInstance;
}
exports.instanceOfAggregateTransactionDTO = instanceOfAggregateTransactionDTO;
function AggregateTransactionDTOFromJSON(json) {
    return AggregateTransactionDTOFromJSONTyped(json, false);
}
exports.AggregateTransactionDTOFromJSON = AggregateTransactionDTOFromJSON;
function AggregateTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        transactionsHash: json["transactionsHash"],
        cosignatures: json["cosignatures"].map(CosignatureDTO_1.CosignatureDTOFromJSON),
    };
}
exports.AggregateTransactionDTOFromJSONTyped = AggregateTransactionDTOFromJSONTyped;
function AggregateTransactionDTOToJSON(value) {
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
        transactionsHash: value.transactionsHash,
        cosignatures: value.cosignatures.map(CosignatureDTO_1.CosignatureDTOToJSON),
    };
}
exports.AggregateTransactionDTOToJSON = AggregateTransactionDTOToJSON;
