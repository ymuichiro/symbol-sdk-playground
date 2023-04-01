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
exports.PaginationToJSON = exports.PaginationFromJSONTyped = exports.PaginationFromJSON = exports.instanceOfPagination = void 0;
/**
 * Check if a given object implements the Pagination interface.
 */
function instanceOfPagination(value) {
    let isInstance = true;
    isInstance = isInstance && "pageNumber" in value;
    isInstance = isInstance && "pageSize" in value;
    return isInstance;
}
exports.instanceOfPagination = instanceOfPagination;
function PaginationFromJSON(json) {
    return PaginationFromJSONTyped(json, false);
}
exports.PaginationFromJSON = PaginationFromJSON;
function PaginationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pageNumber: json["pageNumber"],
        pageSize: json["pageSize"],
    };
}
exports.PaginationFromJSONTyped = PaginationFromJSONTyped;
function PaginationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pageNumber: value.pageNumber,
        pageSize: value.pageSize,
    };
}
exports.PaginationToJSON = PaginationToJSON;