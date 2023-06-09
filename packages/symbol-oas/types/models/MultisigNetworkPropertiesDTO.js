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
exports.MultisigNetworkPropertiesDTOToJSON = exports.MultisigNetworkPropertiesDTOFromJSONTyped = exports.MultisigNetworkPropertiesDTOFromJSON = exports.instanceOfMultisigNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MultisigNetworkPropertiesDTO interface.
 */
function instanceOfMultisigNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMultisigNetworkPropertiesDTO = instanceOfMultisigNetworkPropertiesDTO;
function MultisigNetworkPropertiesDTOFromJSON(json) {
    return MultisigNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.MultisigNetworkPropertiesDTOFromJSON = MultisigNetworkPropertiesDTOFromJSON;
function MultisigNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMultisigDepth': !(0, runtime_1.exists)(json, 'maxMultisigDepth') ? undefined : json['maxMultisigDepth'],
        'maxCosignatoriesPerAccount': !(0, runtime_1.exists)(json, 'maxCosignatoriesPerAccount') ? undefined : json['maxCosignatoriesPerAccount'],
        'maxCosignedAccountsPerAccount': !(0, runtime_1.exists)(json, 'maxCosignedAccountsPerAccount') ? undefined : json['maxCosignedAccountsPerAccount'],
    };
}
exports.MultisigNetworkPropertiesDTOFromJSONTyped = MultisigNetworkPropertiesDTOFromJSONTyped;
function MultisigNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMultisigDepth': value.maxMultisigDepth,
        'maxCosignatoriesPerAccount': value.maxCosignatoriesPerAccount,
        'maxCosignedAccountsPerAccount': value.maxCosignedAccountsPerAccount,
    };
}
exports.MultisigNetworkPropertiesDTOToJSON = MultisigNetworkPropertiesDTOToJSON;
