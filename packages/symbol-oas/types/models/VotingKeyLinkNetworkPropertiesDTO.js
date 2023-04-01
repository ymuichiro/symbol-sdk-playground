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
exports.VotingKeyLinkNetworkPropertiesDTOToJSON = exports.VotingKeyLinkNetworkPropertiesDTOFromJSONTyped = exports.VotingKeyLinkNetworkPropertiesDTOFromJSON = exports.instanceOfVotingKeyLinkNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the VotingKeyLinkNetworkPropertiesDTO interface.
 */
function instanceOfVotingKeyLinkNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfVotingKeyLinkNetworkPropertiesDTO = instanceOfVotingKeyLinkNetworkPropertiesDTO;
function VotingKeyLinkNetworkPropertiesDTOFromJSON(json) {
    return VotingKeyLinkNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.VotingKeyLinkNetworkPropertiesDTOFromJSON = VotingKeyLinkNetworkPropertiesDTOFromJSON;
function VotingKeyLinkNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dummy: !(0, runtime_1.exists)(json, "dummy") ? undefined : json["dummy"],
    };
}
exports.VotingKeyLinkNetworkPropertiesDTOFromJSONTyped = VotingKeyLinkNetworkPropertiesDTOFromJSONTyped;
function VotingKeyLinkNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dummy: value.dummy,
    };
}
exports.VotingKeyLinkNetworkPropertiesDTOToJSON = VotingKeyLinkNetworkPropertiesDTOToJSON;