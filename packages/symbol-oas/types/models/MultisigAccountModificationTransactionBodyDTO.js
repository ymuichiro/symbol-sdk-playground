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
exports.MultisigAccountModificationTransactionBodyDTOToJSON = exports.MultisigAccountModificationTransactionBodyDTOFromJSONTyped = exports.MultisigAccountModificationTransactionBodyDTOFromJSON = exports.instanceOfMultisigAccountModificationTransactionBodyDTO = void 0;
/**
 * Check if a given object implements the MultisigAccountModificationTransactionBodyDTO interface.
 */
function instanceOfMultisigAccountModificationTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;
    return isInstance;
}
exports.instanceOfMultisigAccountModificationTransactionBodyDTO = instanceOfMultisigAccountModificationTransactionBodyDTO;
function MultisigAccountModificationTransactionBodyDTOFromJSON(json) {
    return MultisigAccountModificationTransactionBodyDTOFromJSONTyped(json, false);
}
exports.MultisigAccountModificationTransactionBodyDTOFromJSON = MultisigAccountModificationTransactionBodyDTOFromJSON;
function MultisigAccountModificationTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
    };
}
exports.MultisigAccountModificationTransactionBodyDTOFromJSONTyped = MultisigAccountModificationTransactionBodyDTOFromJSONTyped;
function MultisigAccountModificationTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
    };
}
exports.MultisigAccountModificationTransactionBodyDTOToJSON = MultisigAccountModificationTransactionBodyDTOToJSON;
