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
exports.NodeKeyLinkTransactionBodyDTOToJSON = exports.NodeKeyLinkTransactionBodyDTOFromJSONTyped = exports.NodeKeyLinkTransactionBodyDTOFromJSON = exports.instanceOfNodeKeyLinkTransactionBodyDTO = void 0;
const LinkActionEnum_1 = require("./LinkActionEnum");
/**
 * Check if a given object implements the NodeKeyLinkTransactionBodyDTO interface.
 */
function instanceOfNodeKeyLinkTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
exports.instanceOfNodeKeyLinkTransactionBodyDTO = instanceOfNodeKeyLinkTransactionBodyDTO;
function NodeKeyLinkTransactionBodyDTOFromJSON(json) {
    return NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}
exports.NodeKeyLinkTransactionBodyDTOFromJSON = NodeKeyLinkTransactionBodyDTOFromJSON;
function NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumFromJSON)(json['linkAction']),
    };
}
exports.NodeKeyLinkTransactionBodyDTOFromJSONTyped = NodeKeyLinkTransactionBodyDTOFromJSONTyped;
function NodeKeyLinkTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumToJSON)(value.linkAction),
    };
}
exports.NodeKeyLinkTransactionBodyDTOToJSON = NodeKeyLinkTransactionBodyDTOToJSON;
