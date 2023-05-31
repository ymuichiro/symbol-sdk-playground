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
exports.NamespaceMetaDTOToJSON = exports.NamespaceMetaDTOFromJSONTyped = exports.NamespaceMetaDTOFromJSON = exports.instanceOfNamespaceMetaDTO = void 0;
/**
 * Check if a given object implements the NamespaceMetaDTO interface.
 */
function instanceOfNamespaceMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "index" in value;
    return isInstance;
}
exports.instanceOfNamespaceMetaDTO = instanceOfNamespaceMetaDTO;
function NamespaceMetaDTOFromJSON(json) {
    return NamespaceMetaDTOFromJSONTyped(json, false);
}
exports.NamespaceMetaDTOFromJSON = NamespaceMetaDTOFromJSON;
function NamespaceMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': json['active'],
        'index': json['index'],
    };
}
exports.NamespaceMetaDTOFromJSONTyped = NamespaceMetaDTOFromJSONTyped;
function NamespaceMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'index': value.index,
    };
}
exports.NamespaceMetaDTOToJSON = NamespaceMetaDTOToJSON;
