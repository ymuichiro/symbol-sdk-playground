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
exports.TransactionStatusDTOToJSON = exports.TransactionStatusDTOFromJSONTyped = exports.TransactionStatusDTOFromJSON = exports.instanceOfTransactionStatusDTO = void 0;
const runtime_1 = require("../runtime");
const TransactionGroupEnum_1 = require("./TransactionGroupEnum");
const TransactionStatusEnum_1 = require("./TransactionStatusEnum");
/**
 * Check if a given object implements the TransactionStatusDTO interface.
 */
function instanceOfTransactionStatusDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "deadline" in value;
    return isInstance;
}
exports.instanceOfTransactionStatusDTO = instanceOfTransactionStatusDTO;
function TransactionStatusDTOFromJSON(json) {
    return TransactionStatusDTOFromJSONTyped(json, false);
}
exports.TransactionStatusDTOFromJSON = TransactionStatusDTOFromJSON;
function TransactionStatusDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        group: (0, TransactionGroupEnum_1.TransactionGroupEnumFromJSON)(json["group"]),
        code: !(0, runtime_1.exists)(json, "code")
            ? undefined
            : (0, TransactionStatusEnum_1.TransactionStatusEnumFromJSON)(json["code"]),
        hash: json["hash"],
        deadline: json["deadline"],
        height: !(0, runtime_1.exists)(json, "height") ? undefined : json["height"],
    };
}
exports.TransactionStatusDTOFromJSONTyped = TransactionStatusDTOFromJSONTyped;
function TransactionStatusDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        group: (0, TransactionGroupEnum_1.TransactionGroupEnumToJSON)(value.group),
        code: (0, TransactionStatusEnum_1.TransactionStatusEnumToJSON)(value.code),
        hash: value.hash,
        deadline: value.deadline,
        height: value.height,
    };
}
exports.TransactionStatusDTOToJSON = TransactionStatusDTOToJSON;
