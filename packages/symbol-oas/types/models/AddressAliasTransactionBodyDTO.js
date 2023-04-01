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
exports.AddressAliasTransactionBodyDTOToJSON = exports.AddressAliasTransactionBodyDTOFromJSONTyped = exports.AddressAliasTransactionBodyDTOFromJSON = exports.instanceOfAddressAliasTransactionBodyDTO = void 0;
const AliasActionEnum_1 = require("./AliasActionEnum");
/**
 * Check if a given object implements the AddressAliasTransactionBodyDTO interface.
 */
function instanceOfAddressAliasTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
exports.instanceOfAddressAliasTransactionBodyDTO = instanceOfAddressAliasTransactionBodyDTO;
function AddressAliasTransactionBodyDTOFromJSON(json) {
    return AddressAliasTransactionBodyDTOFromJSONTyped(json, false);
}
exports.AddressAliasTransactionBodyDTOFromJSON = AddressAliasTransactionBodyDTOFromJSON;
function AddressAliasTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        namespaceId: json["namespaceId"],
        address: json["address"],
        aliasAction: (0, AliasActionEnum_1.AliasActionEnumFromJSON)(json["aliasAction"]),
    };
}
exports.AddressAliasTransactionBodyDTOFromJSONTyped = AddressAliasTransactionBodyDTOFromJSONTyped;
function AddressAliasTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        namespaceId: value.namespaceId,
        address: value.address,
        aliasAction: (0, AliasActionEnum_1.AliasActionEnumToJSON)(value.aliasAction),
    };
}
exports.AddressAliasTransactionBodyDTOToJSON = AddressAliasTransactionBodyDTOToJSON;