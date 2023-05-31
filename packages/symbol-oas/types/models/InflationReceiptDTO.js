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
exports.InflationReceiptDTOToJSON = exports.InflationReceiptDTOFromJSONTyped = exports.InflationReceiptDTOFromJSON = exports.instanceOfInflationReceiptDTO = void 0;
const ReceiptTypeEnum_1 = require("./ReceiptTypeEnum");
/**
 * Check if a given object implements the InflationReceiptDTO interface.
 */
function instanceOfInflationReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfInflationReceiptDTO = instanceOfInflationReceiptDTO;
function InflationReceiptDTOFromJSON(json) {
    return InflationReceiptDTOFromJSONTyped(json, false);
}
exports.InflationReceiptDTOFromJSON = InflationReceiptDTOFromJSON;
function InflationReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': (0, ReceiptTypeEnum_1.ReceiptTypeEnumFromJSON)(json['type']),
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
exports.InflationReceiptDTOFromJSONTyped = InflationReceiptDTOFromJSONTyped;
function InflationReceiptDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'type': (0, ReceiptTypeEnum_1.ReceiptTypeEnumToJSON)(value.type),
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}
exports.InflationReceiptDTOToJSON = InflationReceiptDTOToJSON;
