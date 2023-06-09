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
exports.TransactionStatementPageToJSON = exports.TransactionStatementPageFromJSONTyped = exports.TransactionStatementPageFromJSON = exports.instanceOfTransactionStatementPage = void 0;
const Pagination_1 = require("./Pagination");
const TransactionStatementInfoDTO_1 = require("./TransactionStatementInfoDTO");
/**
 * Check if a given object implements the TransactionStatementPage interface.
 */
function instanceOfTransactionStatementPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
exports.instanceOfTransactionStatementPage = instanceOfTransactionStatementPage;
function TransactionStatementPageFromJSON(json) {
    return TransactionStatementPageFromJSONTyped(json, false);
}
exports.TransactionStatementPageFromJSON = TransactionStatementPageFromJSON;
function TransactionStatementPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(TransactionStatementInfoDTO_1.TransactionStatementInfoDTOFromJSON)),
        'pagination': (0, Pagination_1.PaginationFromJSON)(json['pagination']),
    };
}
exports.TransactionStatementPageFromJSONTyped = TransactionStatementPageFromJSONTyped;
function TransactionStatementPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(TransactionStatementInfoDTO_1.TransactionStatementInfoDTOToJSON)),
        'pagination': (0, Pagination_1.PaginationToJSON)(value.pagination),
    };
}
exports.TransactionStatementPageToJSON = TransactionStatementPageToJSON;
