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
exports.EmbeddedVotingKeyLinkTransactionDTOToJSON = exports.EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped = exports.EmbeddedVotingKeyLinkTransactionDTOFromJSON = exports.instanceOfEmbeddedVotingKeyLinkTransactionDTO = void 0;
const LinkActionEnum_1 = require("./LinkActionEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the EmbeddedVotingKeyLinkTransactionDTO interface.
 */
function instanceOfEmbeddedVotingKeyLinkTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
exports.instanceOfEmbeddedVotingKeyLinkTransactionDTO = instanceOfEmbeddedVotingKeyLinkTransactionDTO;
function EmbeddedVotingKeyLinkTransactionDTOFromJSON(json) {
    return EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}
exports.EmbeddedVotingKeyLinkTransactionDTOFromJSON = EmbeddedVotingKeyLinkTransactionDTOFromJSON;
function EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumFromJSON)(json['linkAction']),
    };
}
exports.EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped = EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped;
function EmbeddedVotingKeyLinkTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumToJSON)(value.linkAction),
    };
}
exports.EmbeddedVotingKeyLinkTransactionDTOToJSON = EmbeddedVotingKeyLinkTransactionDTOToJSON;
