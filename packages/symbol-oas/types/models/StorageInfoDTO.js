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
exports.StorageInfoDTOToJSON = exports.StorageInfoDTOFromJSONTyped = exports.StorageInfoDTOFromJSON = exports.instanceOfStorageInfoDTO = void 0;
/**
 * Check if a given object implements the StorageInfoDTO interface.
 */
function instanceOfStorageInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "numBlocks" in value;
    isInstance = isInstance && "numTransactions" in value;
    isInstance = isInstance && "numAccounts" in value;
    return isInstance;
}
exports.instanceOfStorageInfoDTO = instanceOfStorageInfoDTO;
function StorageInfoDTOFromJSON(json) {
    return StorageInfoDTOFromJSONTyped(json, false);
}
exports.StorageInfoDTOFromJSON = StorageInfoDTOFromJSON;
function StorageInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numBlocks': json['numBlocks'],
        'numTransactions': json['numTransactions'],
        'numAccounts': json['numAccounts'],
    };
}
exports.StorageInfoDTOFromJSONTyped = StorageInfoDTOFromJSONTyped;
function StorageInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numBlocks': value.numBlocks,
        'numTransactions': value.numTransactions,
        'numAccounts': value.numAccounts,
    };
}
exports.StorageInfoDTOToJSON = StorageInfoDTOToJSON;
