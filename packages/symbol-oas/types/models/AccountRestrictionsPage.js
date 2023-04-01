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
exports.AccountRestrictionsPageToJSON = exports.AccountRestrictionsPageFromJSONTyped = exports.AccountRestrictionsPageFromJSON = exports.instanceOfAccountRestrictionsPage = void 0;
const AccountRestrictionsInfoDTO_1 = require("./AccountRestrictionsInfoDTO");
const Pagination_1 = require("./Pagination");
/**
 * Check if a given object implements the AccountRestrictionsPage interface.
 */
function instanceOfAccountRestrictionsPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
exports.instanceOfAccountRestrictionsPage = instanceOfAccountRestrictionsPage;
function AccountRestrictionsPageFromJSON(json) {
    return AccountRestrictionsPageFromJSONTyped(json, false);
}
exports.AccountRestrictionsPageFromJSON = AccountRestrictionsPageFromJSON;
function AccountRestrictionsPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AccountRestrictionsInfoDTO_1.AccountRestrictionsInfoDTOFromJSON),
        pagination: (0, Pagination_1.PaginationFromJSON)(json["pagination"]),
    };
}
exports.AccountRestrictionsPageFromJSONTyped = AccountRestrictionsPageFromJSONTyped;
function AccountRestrictionsPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AccountRestrictionsInfoDTO_1.AccountRestrictionsInfoDTOToJSON),
        pagination: (0, Pagination_1.PaginationToJSON)(value.pagination),
    };
}
exports.AccountRestrictionsPageToJSON = AccountRestrictionsPageToJSON;
