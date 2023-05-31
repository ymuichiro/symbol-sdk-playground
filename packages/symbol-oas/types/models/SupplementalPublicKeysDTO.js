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
exports.SupplementalPublicKeysDTOToJSON = exports.SupplementalPublicKeysDTOFromJSONTyped = exports.SupplementalPublicKeysDTOFromJSON = exports.instanceOfSupplementalPublicKeysDTO = void 0;
const runtime_1 = require("../runtime");
const AccountLinkPublicKeyDTO_1 = require("./AccountLinkPublicKeyDTO");
const AccountLinkVotingKeysDTO_1 = require("./AccountLinkVotingKeysDTO");
/**
 * Check if a given object implements the SupplementalPublicKeysDTO interface.
 */
function instanceOfSupplementalPublicKeysDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSupplementalPublicKeysDTO = instanceOfSupplementalPublicKeysDTO;
function SupplementalPublicKeysDTOFromJSON(json) {
    return SupplementalPublicKeysDTOFromJSONTyped(json, false);
}
exports.SupplementalPublicKeysDTOFromJSON = SupplementalPublicKeysDTOFromJSON;
function SupplementalPublicKeysDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linked': !(0, runtime_1.exists)(json, 'linked') ? undefined : (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOFromJSON)(json['linked']),
        'node': !(0, runtime_1.exists)(json, 'node') ? undefined : (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOFromJSON)(json['node']),
        'vrf': !(0, runtime_1.exists)(json, 'vrf') ? undefined : (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOFromJSON)(json['vrf']),
        'voting': !(0, runtime_1.exists)(json, 'voting') ? undefined : (0, AccountLinkVotingKeysDTO_1.AccountLinkVotingKeysDTOFromJSON)(json['voting']),
    };
}
exports.SupplementalPublicKeysDTOFromJSONTyped = SupplementalPublicKeysDTOFromJSONTyped;
function SupplementalPublicKeysDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linked': (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOToJSON)(value.linked),
        'node': (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOToJSON)(value.node),
        'vrf': (0, AccountLinkPublicKeyDTO_1.AccountLinkPublicKeyDTOToJSON)(value.vrf),
        'voting': (0, AccountLinkVotingKeysDTO_1.AccountLinkVotingKeysDTOToJSON)(value.voting),
    };
}
exports.SupplementalPublicKeysDTOToJSON = SupplementalPublicKeysDTOToJSON;
