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
exports.NetworkTypeEnumToJSON = exports.NetworkTypeEnumFromJSONTyped = exports.NetworkTypeEnumFromJSON = exports.NetworkTypeEnum = void 0;
/**
 * Network type:
 * * 0x68 (104 decimal) - Main network.
 * * 0x98 (152 decimal) - Test network.
 * @export
 */
exports.NetworkTypeEnum = {
    NUMBER_104: 104,
    NUMBER_152: 152
};
function NetworkTypeEnumFromJSON(json) {
    return NetworkTypeEnumFromJSONTyped(json, false);
}
exports.NetworkTypeEnumFromJSON = NetworkTypeEnumFromJSON;
function NetworkTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NetworkTypeEnumFromJSONTyped = NetworkTypeEnumFromJSONTyped;
function NetworkTypeEnumToJSON(value) {
    return value;
}
exports.NetworkTypeEnumToJSON = NetworkTypeEnumToJSON;
