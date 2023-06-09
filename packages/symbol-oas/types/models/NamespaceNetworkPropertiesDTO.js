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
exports.NamespaceNetworkPropertiesDTOToJSON = exports.NamespaceNetworkPropertiesDTOFromJSONTyped = exports.NamespaceNetworkPropertiesDTOFromJSON = exports.instanceOfNamespaceNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NamespaceNetworkPropertiesDTO interface.
 */
function instanceOfNamespaceNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNamespaceNetworkPropertiesDTO = instanceOfNamespaceNetworkPropertiesDTO;
function NamespaceNetworkPropertiesDTOFromJSON(json) {
    return NamespaceNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.NamespaceNetworkPropertiesDTOFromJSON = NamespaceNetworkPropertiesDTOFromJSON;
function NamespaceNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxNameSize': !(0, runtime_1.exists)(json, 'maxNameSize') ? undefined : json['maxNameSize'],
        'maxChildNamespaces': !(0, runtime_1.exists)(json, 'maxChildNamespaces') ? undefined : json['maxChildNamespaces'],
        'maxNamespaceDepth': !(0, runtime_1.exists)(json, 'maxNamespaceDepth') ? undefined : json['maxNamespaceDepth'],
        'minNamespaceDuration': !(0, runtime_1.exists)(json, 'minNamespaceDuration') ? undefined : json['minNamespaceDuration'],
        'maxNamespaceDuration': !(0, runtime_1.exists)(json, 'maxNamespaceDuration') ? undefined : json['maxNamespaceDuration'],
        'namespaceGracePeriodDuration': !(0, runtime_1.exists)(json, 'namespaceGracePeriodDuration') ? undefined : json['namespaceGracePeriodDuration'],
        'reservedRootNamespaceNames': !(0, runtime_1.exists)(json, 'reservedRootNamespaceNames') ? undefined : json['reservedRootNamespaceNames'],
        'namespaceRentalFeeSinkAddress': !(0, runtime_1.exists)(json, 'namespaceRentalFeeSinkAddress') ? undefined : json['namespaceRentalFeeSinkAddress'],
        'rootNamespaceRentalFeePerBlock': !(0, runtime_1.exists)(json, 'rootNamespaceRentalFeePerBlock') ? undefined : json['rootNamespaceRentalFeePerBlock'],
        'childNamespaceRentalFee': !(0, runtime_1.exists)(json, 'childNamespaceRentalFee') ? undefined : json['childNamespaceRentalFee'],
    };
}
exports.NamespaceNetworkPropertiesDTOFromJSONTyped = NamespaceNetworkPropertiesDTOFromJSONTyped;
function NamespaceNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxNameSize': value.maxNameSize,
        'maxChildNamespaces': value.maxChildNamespaces,
        'maxNamespaceDepth': value.maxNamespaceDepth,
        'minNamespaceDuration': value.minNamespaceDuration,
        'maxNamespaceDuration': value.maxNamespaceDuration,
        'namespaceGracePeriodDuration': value.namespaceGracePeriodDuration,
        'reservedRootNamespaceNames': value.reservedRootNamespaceNames,
        'namespaceRentalFeeSinkAddress': value.namespaceRentalFeeSinkAddress,
        'rootNamespaceRentalFeePerBlock': value.rootNamespaceRentalFeePerBlock,
        'childNamespaceRentalFee': value.childNamespaceRentalFee,
    };
}
exports.NamespaceNetworkPropertiesDTOToJSON = NamespaceNetworkPropertiesDTOToJSON;
