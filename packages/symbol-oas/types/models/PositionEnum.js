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
exports.PositionEnumToJSON = exports.PositionEnumFromJSONTyped = exports.PositionEnumFromJSON = exports.PositionEnum = void 0;
/**
 * Position relative to the proofHash being evaluated.
 * @export
 */
exports.PositionEnum = {
    Left: "left",
    Right: "right",
};
function PositionEnumFromJSON(json) {
    return PositionEnumFromJSONTyped(json, false);
}
exports.PositionEnumFromJSON = PositionEnumFromJSON;
function PositionEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PositionEnumFromJSONTyped = PositionEnumFromJSONTyped;
function PositionEnumToJSON(value) {
    return value;
}
exports.PositionEnumToJSON = PositionEnumToJSON;