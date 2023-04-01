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
exports.ReceiptTypeEnumToJSON = exports.ReceiptTypeEnumFromJSONTyped = exports.ReceiptTypeEnumFromJSON = exports.ReceiptTypeEnum = void 0;
/**
 * Type of receipt:
 * * 0x124D (4685 decimal) - Mosaic_Rental_Fee.
 * * 0x134E (4942 decimal) - Namespace_Rental_Fee.
 * * 0x2143 (8515 decimal) - Harvest_Fee.
 * * 0x2248 (8776 decimal) - LockHash_Completed.
 * * 0x2348 (9032 decimal) - LockHash_Expired.
 * * 0x2252 (8786 decimal) - LockSecret_Completed.
 * * 0x2352 (9042 decimal) - LockSecret_Expired.
 * * 0x3148 (12616 decimal) - LockHash_Created.
 * * 0x3152 (12626 decimal) - LockSecret_Created.
 * * 0x414D (16717 decimal) - Mosaic_Expired.
 * * 0x414E (16718 decimal) - Namespace_Expired.
 * * 0x424E (16974 decimal) - Namespace_Deleted.
 * * 0x5143 (20803 decimal) - Inflation.
 * * 0xE143 (57667 decimal) - Transaction_Group.
 * * 0xF143 (61763 decimal) - Address_Alias_Resolution.
 * * 0xF243 (62019 decimal) - Mosaic_Alias_Resolution.
 * @export
 */
exports.ReceiptTypeEnum = {
    NUMBER_4685: 4685,
    NUMBER_4942: 4942,
    NUMBER_8515: 8515,
    NUMBER_8776: 8776,
    NUMBER_9032: 9032,
    NUMBER_8786: 8786,
    NUMBER_9042: 9042,
    NUMBER_12616: 12616,
    NUMBER_12626: 12626,
    NUMBER_16717: 16717,
    NUMBER_16718: 16718,
    NUMBER_16974: 16974,
    NUMBER_20803: 20803,
    NUMBER_57667: 57667,
    NUMBER_61763: 61763,
    NUMBER_62019: 62019,
};
function ReceiptTypeEnumFromJSON(json) {
    return ReceiptTypeEnumFromJSONTyped(json, false);
}
exports.ReceiptTypeEnumFromJSON = ReceiptTypeEnumFromJSON;
function ReceiptTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ReceiptTypeEnumFromJSONTyped = ReceiptTypeEnumFromJSONTyped;
function ReceiptTypeEnumToJSON(value) {
    return value;
}
exports.ReceiptTypeEnumToJSON = ReceiptTypeEnumToJSON;
