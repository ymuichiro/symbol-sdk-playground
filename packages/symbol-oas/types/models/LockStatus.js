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
exports.LockStatusToJSON = exports.LockStatusFromJSONTyped = exports.LockStatusFromJSON = exports.LockStatus = void 0;
/**
 * Possible status of lock states:
 * * 0 - UNUSED.
 * * 1 - USED.
 * @export
 */
exports.LockStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1
};
function LockStatusFromJSON(json) {
    return LockStatusFromJSONTyped(json, false);
}
exports.LockStatusFromJSON = LockStatusFromJSON;
function LockStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LockStatusFromJSONTyped = LockStatusFromJSONTyped;
function LockStatusToJSON(value) {
    return value;
}
exports.LockStatusToJSON = LockStatusToJSON;
