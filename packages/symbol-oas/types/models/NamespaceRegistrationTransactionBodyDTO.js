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
exports.NamespaceRegistrationTransactionBodyDTOToJSON = exports.NamespaceRegistrationTransactionBodyDTOFromJSONTyped = exports.NamespaceRegistrationTransactionBodyDTOFromJSON = exports.instanceOfNamespaceRegistrationTransactionBodyDTO = void 0;
const runtime_1 = require("../runtime");
const NamespaceRegistrationTypeEnum_1 = require("./NamespaceRegistrationTypeEnum");
/**
 * Check if a given object implements the NamespaceRegistrationTransactionBodyDTO interface.
 */
function instanceOfNamespaceRegistrationTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfNamespaceRegistrationTransactionBodyDTO = instanceOfNamespaceRegistrationTransactionBodyDTO;
function NamespaceRegistrationTransactionBodyDTOFromJSON(json) {
    return NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json, false);
}
exports.NamespaceRegistrationTransactionBodyDTOFromJSON = NamespaceRegistrationTransactionBodyDTOFromJSON;
function NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'duration': !(0, runtime_1.exists)(json, 'duration') ? undefined : json['duration'],
        'parentId': !(0, runtime_1.exists)(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumFromJSON)(json['registrationType']),
        'name': json['name'],
    };
}
exports.NamespaceRegistrationTransactionBodyDTOFromJSONTyped = NamespaceRegistrationTransactionBodyDTOFromJSONTyped;
function NamespaceRegistrationTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumToJSON)(value.registrationType),
        'name': value.name,
    };
}
exports.NamespaceRegistrationTransactionBodyDTOToJSON = NamespaceRegistrationTransactionBodyDTOToJSON;
