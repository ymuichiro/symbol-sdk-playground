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
exports.AccountRestrictionNetworkPropertiesDTOToJSON = exports.AccountRestrictionNetworkPropertiesDTOFromJSONTyped = exports.AccountRestrictionNetworkPropertiesDTOFromJSON = exports.instanceOfAccountRestrictionNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AccountRestrictionNetworkPropertiesDTO interface.
 */
function instanceOfAccountRestrictionNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAccountRestrictionNetworkPropertiesDTO = instanceOfAccountRestrictionNetworkPropertiesDTO;
function AccountRestrictionNetworkPropertiesDTOFromJSON(json) {
    return AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.AccountRestrictionNetworkPropertiesDTOFromJSON = AccountRestrictionNetworkPropertiesDTOFromJSON;
function AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        maxAccountRestrictionValues: !(0, runtime_1.exists)(json, "maxAccountRestrictionValues")
            ? undefined
            : json["maxAccountRestrictionValues"],
    };
}
exports.AccountRestrictionNetworkPropertiesDTOFromJSONTyped = AccountRestrictionNetworkPropertiesDTOFromJSONTyped;
function AccountRestrictionNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        maxAccountRestrictionValues: value.maxAccountRestrictionValues,
    };
}
exports.AccountRestrictionNetworkPropertiesDTOToJSON = AccountRestrictionNetworkPropertiesDTOToJSON;
