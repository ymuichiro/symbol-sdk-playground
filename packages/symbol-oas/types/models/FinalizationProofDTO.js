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
exports.FinalizationProofDTOToJSON = exports.FinalizationProofDTOFromJSONTyped = exports.FinalizationProofDTOFromJSON = exports.instanceOfFinalizationProofDTO = void 0;
const MessageGroup_1 = require("./MessageGroup");
/**
 * Check if a given object implements the FinalizationProofDTO interface.
 */
function instanceOfFinalizationProofDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "finalizationEpoch" in value;
    isInstance = isInstance && "finalizationPoint" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "messageGroups" in value;
    return isInstance;
}
exports.instanceOfFinalizationProofDTO = instanceOfFinalizationProofDTO;
function FinalizationProofDTOFromJSON(json) {
    return FinalizationProofDTOFromJSONTyped(json, false);
}
exports.FinalizationProofDTOFromJSON = FinalizationProofDTOFromJSON;
function FinalizationProofDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'finalizationEpoch': json['finalizationEpoch'],
        'finalizationPoint': json['finalizationPoint'],
        'height': json['height'],
        'hash': json['hash'],
        'messageGroups': (json['messageGroups'].map(MessageGroup_1.MessageGroupFromJSON)),
    };
}
exports.FinalizationProofDTOFromJSONTyped = FinalizationProofDTOFromJSONTyped;
function FinalizationProofDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'finalizationEpoch': value.finalizationEpoch,
        'finalizationPoint': value.finalizationPoint,
        'height': value.height,
        'hash': value.hash,
        'messageGroups': (value.messageGroups.map(MessageGroup_1.MessageGroupToJSON)),
    };
}
exports.FinalizationProofDTOToJSON = FinalizationProofDTOToJSON;
