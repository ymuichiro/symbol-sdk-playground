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
exports.MosaicSupplyChangeActionEnumToJSON = exports.MosaicSupplyChangeActionEnumFromJSONTyped = exports.MosaicSupplyChangeActionEnumFromJSON = exports.MosaicSupplyChangeActionEnum = void 0;
/**
 * Direction of the supply change:
 * * 0  - Decrease.
 * * 1  - Increase.
 * @export
 */
exports.MosaicSupplyChangeActionEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
};
function MosaicSupplyChangeActionEnumFromJSON(json) {
    return MosaicSupplyChangeActionEnumFromJSONTyped(json, false);
}
exports.MosaicSupplyChangeActionEnumFromJSON = MosaicSupplyChangeActionEnumFromJSON;
function MosaicSupplyChangeActionEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MosaicSupplyChangeActionEnumFromJSONTyped = MosaicSupplyChangeActionEnumFromJSONTyped;
function MosaicSupplyChangeActionEnumToJSON(value) {
    return value;
}
exports.MosaicSupplyChangeActionEnumToJSON = MosaicSupplyChangeActionEnumToJSON;
