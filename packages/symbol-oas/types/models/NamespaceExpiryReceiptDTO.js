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
exports.NamespaceExpiryReceiptDTOToJSON = exports.NamespaceExpiryReceiptDTOFromJSONTyped = exports.NamespaceExpiryReceiptDTOFromJSON = exports.instanceOfNamespaceExpiryReceiptDTO = void 0;
const ReceiptTypeEnum_1 = require("./ReceiptTypeEnum");
/**
 * Check if a given object implements the NamespaceExpiryReceiptDTO interface.
 */
function instanceOfNamespaceExpiryReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
exports.instanceOfNamespaceExpiryReceiptDTO = instanceOfNamespaceExpiryReceiptDTO;
function NamespaceExpiryReceiptDTOFromJSON(json) {
    return NamespaceExpiryReceiptDTOFromJSONTyped(json, false);
}
exports.NamespaceExpiryReceiptDTOFromJSON = NamespaceExpiryReceiptDTOFromJSON;
function NamespaceExpiryReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json["version"],
        type: (0, ReceiptTypeEnum_1.ReceiptTypeEnumFromJSON)(json["type"]),
        artifactId: json["artifactId"],
    };
}
exports.NamespaceExpiryReceiptDTOFromJSONTyped = NamespaceExpiryReceiptDTOFromJSONTyped;
function NamespaceExpiryReceiptDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        type: (0, ReceiptTypeEnum_1.ReceiptTypeEnumToJSON)(value.type),
        artifactId: value.artifactId,
    };
}
exports.NamespaceExpiryReceiptDTOToJSON = NamespaceExpiryReceiptDTOToJSON;
