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
exports.EmbeddedNamespaceRegistrationTransactionDTOToJSON = exports.EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped = exports.EmbeddedNamespaceRegistrationTransactionDTOFromJSON = exports.instanceOfEmbeddedNamespaceRegistrationTransactionDTO = void 0;
const runtime_1 = require("../runtime");
const NamespaceRegistrationTypeEnum_1 = require("./NamespaceRegistrationTypeEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the EmbeddedNamespaceRegistrationTransactionDTO interface.
 */
function instanceOfEmbeddedNamespaceRegistrationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfEmbeddedNamespaceRegistrationTransactionDTO = instanceOfEmbeddedNamespaceRegistrationTransactionDTO;
function EmbeddedNamespaceRegistrationTransactionDTOFromJSON(json) {
    return EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json, false);
}
exports.EmbeddedNamespaceRegistrationTransactionDTOFromJSON = EmbeddedNamespaceRegistrationTransactionDTOFromJSON;
function EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'duration': !(0, runtime_1.exists)(json, 'duration') ? undefined : json['duration'],
        'parentId': !(0, runtime_1.exists)(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumFromJSON)(json['registrationType']),
        'name': json['name'],
    };
}
exports.EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped = EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped;
function EmbeddedNamespaceRegistrationTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumToJSON)(value.registrationType),
        'name': value.name,
    };
}
exports.EmbeddedNamespaceRegistrationTransactionDTOToJSON = EmbeddedNamespaceRegistrationTransactionDTOToJSON;
