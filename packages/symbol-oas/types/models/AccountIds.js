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
exports.AccountIdsToJSON = exports.AccountIdsFromJSONTyped = exports.AccountIdsFromJSON = exports.instanceOfAccountIds = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AccountIds interface.
 */
function instanceOfAccountIds(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAccountIds = instanceOfAccountIds;
function AccountIdsFromJSON(json) {
    return AccountIdsFromJSONTyped(json, false);
}
exports.AccountIdsFromJSON = AccountIdsFromJSON;
function AccountIdsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        publicKeys: !(0, runtime_1.exists)(json, "publicKeys") ? undefined : json["publicKeys"],
        addresses: !(0, runtime_1.exists)(json, "addresses") ? undefined : json["addresses"],
    };
}
exports.AccountIdsFromJSONTyped = AccountIdsFromJSONTyped;
function AccountIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        publicKeys: value.publicKeys,
        addresses: value.addresses,
    };
}
exports.AccountIdsToJSON = AccountIdsToJSON;