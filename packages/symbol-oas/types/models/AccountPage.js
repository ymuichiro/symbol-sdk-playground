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
exports.AccountPageToJSON = exports.AccountPageFromJSONTyped = exports.AccountPageFromJSON = exports.instanceOfAccountPage = void 0;
const AccountInfoDTO_1 = require("./AccountInfoDTO");
const Pagination_1 = require("./Pagination");
/**
 * Check if a given object implements the AccountPage interface.
 */
function instanceOfAccountPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
exports.instanceOfAccountPage = instanceOfAccountPage;
function AccountPageFromJSON(json) {
    return AccountPageFromJSONTyped(json, false);
}
exports.AccountPageFromJSON = AccountPageFromJSON;
function AccountPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AccountInfoDTO_1.AccountInfoDTOFromJSON)),
        'pagination': (0, Pagination_1.PaginationFromJSON)(json['pagination']),
    };
}
exports.AccountPageFromJSONTyped = AccountPageFromJSONTyped;
function AccountPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AccountInfoDTO_1.AccountInfoDTOToJSON)),
        'pagination': (0, Pagination_1.PaginationToJSON)(value.pagination),
    };
}
exports.AccountPageToJSON = AccountPageToJSON;
