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
exports.SizePrefixedEntityDTOToJSON = exports.SizePrefixedEntityDTOFromJSONTyped = exports.SizePrefixedEntityDTOFromJSON = exports.instanceOfSizePrefixedEntityDTO = void 0;
/**
 * Check if a given object implements the SizePrefixedEntityDTO interface.
 */
function instanceOfSizePrefixedEntityDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    return isInstance;
}
exports.instanceOfSizePrefixedEntityDTO = instanceOfSizePrefixedEntityDTO;
function SizePrefixedEntityDTOFromJSON(json) {
    return SizePrefixedEntityDTOFromJSONTyped(json, false);
}
exports.SizePrefixedEntityDTOFromJSON = SizePrefixedEntityDTOFromJSON;
function SizePrefixedEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
    };
}
exports.SizePrefixedEntityDTOFromJSONTyped = SizePrefixedEntityDTOFromJSONTyped;
function SizePrefixedEntityDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
    };
}
exports.SizePrefixedEntityDTOToJSON = SizePrefixedEntityDTOToJSON;
