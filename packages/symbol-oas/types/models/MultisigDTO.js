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
exports.MultisigDTOToJSON = exports.MultisigDTOFromJSONTyped = exports.MultisigDTOFromJSON = exports.instanceOfMultisigDTO = void 0;
/**
 * Check if a given object implements the MultisigDTO interface.
 */
function instanceOfMultisigDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "accountAddress" in value;
    isInstance = isInstance && "minApproval" in value;
    isInstance = isInstance && "minRemoval" in value;
    isInstance = isInstance && "cosignatoryAddresses" in value;
    isInstance = isInstance && "multisigAddresses" in value;
    return isInstance;
}
exports.instanceOfMultisigDTO = instanceOfMultisigDTO;
function MultisigDTOFromJSON(json) {
    return MultisigDTOFromJSONTyped(json, false);
}
exports.MultisigDTOFromJSON = MultisigDTOFromJSON;
function MultisigDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'accountAddress': json['accountAddress'],
        'minApproval': json['minApproval'],
        'minRemoval': json['minRemoval'],
        'cosignatoryAddresses': json['cosignatoryAddresses'],
        'multisigAddresses': json['multisigAddresses'],
    };
}
exports.MultisigDTOFromJSONTyped = MultisigDTOFromJSONTyped;
function MultisigDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'accountAddress': value.accountAddress,
        'minApproval': value.minApproval,
        'minRemoval': value.minRemoval,
        'cosignatoryAddresses': value.cosignatoryAddresses,
        'multisigAddresses': value.multisigAddresses,
    };
}
exports.MultisigDTOToJSON = MultisigDTOToJSON;
