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
exports.VotingKeyLinkTransactionDTOToJSON = exports.VotingKeyLinkTransactionDTOFromJSONTyped = exports.VotingKeyLinkTransactionDTOFromJSON = exports.instanceOfVotingKeyLinkTransactionDTO = void 0;
const LinkActionEnum_1 = require("./LinkActionEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the VotingKeyLinkTransactionDTO interface.
 */
function instanceOfVotingKeyLinkTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
exports.instanceOfVotingKeyLinkTransactionDTO = instanceOfVotingKeyLinkTransactionDTO;
function VotingKeyLinkTransactionDTOFromJSON(json) {
    return VotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}
exports.VotingKeyLinkTransactionDTOFromJSON = VotingKeyLinkTransactionDTOFromJSON;
function VotingKeyLinkTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumFromJSON)(json['linkAction']),
    };
}
exports.VotingKeyLinkTransactionDTOFromJSONTyped = VotingKeyLinkTransactionDTOFromJSONTyped;
function VotingKeyLinkTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumToJSON)(value.linkAction),
    };
}
exports.VotingKeyLinkTransactionDTOToJSON = VotingKeyLinkTransactionDTOToJSON;
