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
exports.MosaicSupplyChangeTransactionBodyDTOToJSON = exports.MosaicSupplyChangeTransactionBodyDTOFromJSONTyped = exports.MosaicSupplyChangeTransactionBodyDTOFromJSON = exports.instanceOfMosaicSupplyChangeTransactionBodyDTO = void 0;
const MosaicSupplyChangeActionEnum_1 = require("./MosaicSupplyChangeActionEnum");
/**
 * Check if a given object implements the MosaicSupplyChangeTransactionBodyDTO interface.
 */
function instanceOfMosaicSupplyChangeTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    return isInstance;
}
exports.instanceOfMosaicSupplyChangeTransactionBodyDTO = instanceOfMosaicSupplyChangeTransactionBodyDTO;
function MosaicSupplyChangeTransactionBodyDTOFromJSON(json) {
    return MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json, false);
}
exports.MosaicSupplyChangeTransactionBodyDTOFromJSON = MosaicSupplyChangeTransactionBodyDTOFromJSON;
function MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': (0, MosaicSupplyChangeActionEnum_1.MosaicSupplyChangeActionEnumFromJSON)(json['action']),
    };
}
exports.MosaicSupplyChangeTransactionBodyDTOFromJSONTyped = MosaicSupplyChangeTransactionBodyDTOFromJSONTyped;
function MosaicSupplyChangeTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': (0, MosaicSupplyChangeActionEnum_1.MosaicSupplyChangeActionEnumToJSON)(value.action),
    };
}
exports.MosaicSupplyChangeTransactionBodyDTOToJSON = MosaicSupplyChangeTransactionBodyDTOToJSON;
