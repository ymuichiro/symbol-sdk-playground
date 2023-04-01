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
exports.VerifiableEntityDTOToJSON = exports.VerifiableEntityDTOFromJSONTyped = exports.VerifiableEntityDTOFromJSON = exports.instanceOfVerifiableEntityDTO = void 0;
/**
 * Check if a given object implements the VerifiableEntityDTO interface.
 */
function instanceOfVerifiableEntityDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    return isInstance;
}
exports.instanceOfVerifiableEntityDTO = instanceOfVerifiableEntityDTO;
function VerifiableEntityDTOFromJSON(json) {
    return VerifiableEntityDTOFromJSONTyped(json, false);
}
exports.VerifiableEntityDTOFromJSON = VerifiableEntityDTOFromJSON;
function VerifiableEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signature: json["signature"],
    };
}
exports.VerifiableEntityDTOFromJSONTyped = VerifiableEntityDTOFromJSONTyped;
function VerifiableEntityDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signature: value.signature,
    };
}
exports.VerifiableEntityDTOToJSON = VerifiableEntityDTOToJSON;
