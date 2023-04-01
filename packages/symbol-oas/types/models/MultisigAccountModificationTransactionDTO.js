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
exports.MultisigAccountModificationTransactionDTOToJSON = exports.MultisigAccountModificationTransactionDTOFromJSONTyped = exports.MultisigAccountModificationTransactionDTOFromJSON = exports.instanceOfMultisigAccountModificationTransactionDTO = void 0;
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the MultisigAccountModificationTransactionDTO interface.
 */
function instanceOfMultisigAccountModificationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;
    return isInstance;
}
exports.instanceOfMultisigAccountModificationTransactionDTO = instanceOfMultisigAccountModificationTransactionDTO;
function MultisigAccountModificationTransactionDTOFromJSON(json) {
    return MultisigAccountModificationTransactionDTOFromJSONTyped(json, false);
}
exports.MultisigAccountModificationTransactionDTOFromJSON = MultisigAccountModificationTransactionDTOFromJSON;
function MultisigAccountModificationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        minRemovalDelta: json["minRemovalDelta"],
        minApprovalDelta: json["minApprovalDelta"],
        addressAdditions: json["addressAdditions"],
        addressDeletions: json["addressDeletions"],
    };
}
exports.MultisigAccountModificationTransactionDTOFromJSONTyped = MultisigAccountModificationTransactionDTOFromJSONTyped;
function MultisigAccountModificationTransactionDTOToJSON(value) {
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
        minRemovalDelta: value.minRemovalDelta,
        minApprovalDelta: value.minApprovalDelta,
        addressAdditions: value.addressAdditions,
        addressDeletions: value.addressDeletions,
    };
}
exports.MultisigAccountModificationTransactionDTOToJSON = MultisigAccountModificationTransactionDTOToJSON;
