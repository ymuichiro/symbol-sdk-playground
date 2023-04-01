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
exports.OrderToJSON = exports.OrderFromJSONTyped = exports.OrderFromJSON = exports.Order = void 0;
/**
 * Indicates how to sort the results:
 * * ``asc`` - ascending
 * * ``desc`` - descending
 * @export
 */
exports.Order = {
    Asc: "asc",
    Desc: "desc",
};
function OrderFromJSON(json) {
    return OrderFromJSONTyped(json, false);
}
exports.OrderFromJSON = OrderFromJSON;
function OrderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.OrderFromJSONTyped = OrderFromJSONTyped;
function OrderToJSON(value) {
    return value;
}
exports.OrderToJSON = OrderToJSON;
