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
exports.InflationReceiptDTOAllOfToJSON = exports.InflationReceiptDTOAllOfFromJSONTyped = exports.InflationReceiptDTOAllOfFromJSON = exports.instanceOfInflationReceiptDTOAllOf = void 0;
/**
 * Check if a given object implements the InflationReceiptDTOAllOf interface.
 */
function instanceOfInflationReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfInflationReceiptDTOAllOf = instanceOfInflationReceiptDTOAllOf;
function InflationReceiptDTOAllOfFromJSON(json) {
    return InflationReceiptDTOAllOfFromJSONTyped(json, false);
}
exports.InflationReceiptDTOAllOfFromJSON = InflationReceiptDTOAllOfFromJSON;
function InflationReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
exports.InflationReceiptDTOAllOfFromJSONTyped = InflationReceiptDTOAllOfFromJSONTyped;
function InflationReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}
exports.InflationReceiptDTOAllOfToJSON = InflationReceiptDTOAllOfToJSON;
