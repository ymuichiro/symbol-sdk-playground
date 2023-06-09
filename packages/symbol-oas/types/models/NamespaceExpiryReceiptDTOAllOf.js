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
exports.NamespaceExpiryReceiptDTOAllOfToJSON = exports.NamespaceExpiryReceiptDTOAllOfFromJSONTyped = exports.NamespaceExpiryReceiptDTOAllOfFromJSON = exports.instanceOfNamespaceExpiryReceiptDTOAllOf = void 0;
/**
 * Check if a given object implements the NamespaceExpiryReceiptDTOAllOf interface.
 */
function instanceOfNamespaceExpiryReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
exports.instanceOfNamespaceExpiryReceiptDTOAllOf = instanceOfNamespaceExpiryReceiptDTOAllOf;
function NamespaceExpiryReceiptDTOAllOfFromJSON(json) {
    return NamespaceExpiryReceiptDTOAllOfFromJSONTyped(json, false);
}
exports.NamespaceExpiryReceiptDTOAllOfFromJSON = NamespaceExpiryReceiptDTOAllOfFromJSON;
function NamespaceExpiryReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'artifactId': json['artifactId'],
    };
}
exports.NamespaceExpiryReceiptDTOAllOfFromJSONTyped = NamespaceExpiryReceiptDTOAllOfFromJSONTyped;
function NamespaceExpiryReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'artifactId': value.artifactId,
    };
}
exports.NamespaceExpiryReceiptDTOAllOfToJSON = NamespaceExpiryReceiptDTOAllOfToJSON;
