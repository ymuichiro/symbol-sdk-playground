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
exports.AccountMosaicRestrictionTransactionBodyDTOToJSON = exports.AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped = exports.AccountMosaicRestrictionTransactionBodyDTOFromJSON = exports.instanceOfAccountMosaicRestrictionTransactionBodyDTO = void 0;
const AccountRestrictionFlagsEnum_1 = require("./AccountRestrictionFlagsEnum");
/**
 * Check if a given object implements the AccountMosaicRestrictionTransactionBodyDTO interface.
 */
function instanceOfAccountMosaicRestrictionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    return isInstance;
}
exports.instanceOfAccountMosaicRestrictionTransactionBodyDTO = instanceOfAccountMosaicRestrictionTransactionBodyDTO;
function AccountMosaicRestrictionTransactionBodyDTOFromJSON(json) {
    return AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
exports.AccountMosaicRestrictionTransactionBodyDTOFromJSON = AccountMosaicRestrictionTransactionBodyDTOFromJSON;
function AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        restrictionFlags: (0, AccountRestrictionFlagsEnum_1.AccountRestrictionFlagsEnumFromJSON)(json["restrictionFlags"]),
        restrictionAdditions: json["restrictionAdditions"],
        restrictionDeletions: json["restrictionDeletions"],
    };
}
exports.AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped = AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped;
function AccountMosaicRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        restrictionFlags: (0, AccountRestrictionFlagsEnum_1.AccountRestrictionFlagsEnumToJSON)(value.restrictionFlags),
        restrictionAdditions: value.restrictionAdditions,
        restrictionDeletions: value.restrictionDeletions,
    };
}
exports.AccountMosaicRestrictionTransactionBodyDTOToJSON = AccountMosaicRestrictionTransactionBodyDTOToJSON;