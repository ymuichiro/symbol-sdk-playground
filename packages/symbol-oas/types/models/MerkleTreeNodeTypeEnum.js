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
exports.MerkleTreeNodeTypeEnumToJSON = exports.MerkleTreeNodeTypeEnumFromJSONTyped = exports.MerkleTreeNodeTypeEnumFromJSON = exports.MerkleTreeNodeTypeEnum = void 0;
/**
 * Type of Merkle tree node:
 * * 0 - Branch node.
 * * 255 - Leaf node.
 * @export
 */
exports.MerkleTreeNodeTypeEnum = {
    NUMBER_0: 0,
    NUMBER_255: 255,
};
function MerkleTreeNodeTypeEnumFromJSON(json) {
    return MerkleTreeNodeTypeEnumFromJSONTyped(json, false);
}
exports.MerkleTreeNodeTypeEnumFromJSON = MerkleTreeNodeTypeEnumFromJSON;
function MerkleTreeNodeTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MerkleTreeNodeTypeEnumFromJSONTyped = MerkleTreeNodeTypeEnumFromJSONTyped;
function MerkleTreeNodeTypeEnumToJSON(value) {
    return value;
}
exports.MerkleTreeNodeTypeEnumToJSON = MerkleTreeNodeTypeEnumToJSON;
