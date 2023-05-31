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
exports.MosaicMetadataTransactionBodyDTOToJSON = exports.MosaicMetadataTransactionBodyDTOFromJSONTyped = exports.MosaicMetadataTransactionBodyDTOFromJSON = exports.instanceOfMosaicMetadataTransactionBodyDTO = void 0;
/**
 * Check if a given object implements the MosaicMetadataTransactionBodyDTO interface.
 */
function instanceOfMosaicMetadataTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "targetMosaicId" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfMosaicMetadataTransactionBodyDTO = instanceOfMosaicMetadataTransactionBodyDTO;
function MosaicMetadataTransactionBodyDTOFromJSON(json) {
    return MosaicMetadataTransactionBodyDTOFromJSONTyped(json, false);
}
exports.MosaicMetadataTransactionBodyDTOFromJSON = MosaicMetadataTransactionBodyDTOFromJSON;
function MosaicMetadataTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetMosaicId': json['targetMosaicId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}
exports.MosaicMetadataTransactionBodyDTOFromJSONTyped = MosaicMetadataTransactionBodyDTOFromJSONTyped;
function MosaicMetadataTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetMosaicId': value.targetMosaicId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}
exports.MosaicMetadataTransactionBodyDTOToJSON = MosaicMetadataTransactionBodyDTOToJSON;
