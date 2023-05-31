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
exports.NamespaceNameDTOToJSON = exports.NamespaceNameDTOFromJSONTyped = exports.NamespaceNameDTOFromJSON = exports.instanceOfNamespaceNameDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NamespaceNameDTO interface.
 */
function instanceOfNamespaceNameDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfNamespaceNameDTO = instanceOfNamespaceNameDTO;
function NamespaceNameDTOFromJSON(json) {
    return NamespaceNameDTOFromJSONTyped(json, false);
}
exports.NamespaceNameDTOFromJSON = NamespaceNameDTOFromJSON;
function NamespaceNameDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parentId': !(0, runtime_1.exists)(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'name': json['name'],
    };
}
exports.NamespaceNameDTOFromJSONTyped = NamespaceNameDTOFromJSONTyped;
function NamespaceNameDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parentId': value.parentId,
        'id': value.id,
        'name': value.name,
    };
}
exports.NamespaceNameDTOToJSON = NamespaceNameDTOToJSON;
