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
exports.BlockOrderByEnumToJSON = exports.BlockOrderByEnumFromJSONTyped = exports.BlockOrderByEnumFromJSON = exports.BlockOrderByEnum = void 0;
/**
 *
 * @export
 */
exports.BlockOrderByEnum = {
    Id: 'id',
    Height: 'height'
};
function BlockOrderByEnumFromJSON(json) {
    return BlockOrderByEnumFromJSONTyped(json, false);
}
exports.BlockOrderByEnumFromJSON = BlockOrderByEnumFromJSON;
function BlockOrderByEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BlockOrderByEnumFromJSONTyped = BlockOrderByEnumFromJSONTyped;
function BlockOrderByEnumToJSON(value) {
    return value;
}
exports.BlockOrderByEnumToJSON = BlockOrderByEnumToJSON;
