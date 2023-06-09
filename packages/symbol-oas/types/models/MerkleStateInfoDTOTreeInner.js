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
exports.MerkleStateInfoDTOTreeInnerToJSON = exports.MerkleStateInfoDTOTreeInnerFromJSONTyped = exports.MerkleStateInfoDTOTreeInnerFromJSON = exports.instanceOfMerkleStateInfoDTOTreeInner = void 0;
const MerkleTreeBranchLinkDTO_1 = require("./MerkleTreeBranchLinkDTO");
const MerkleTreeNodeTypeEnum_1 = require("./MerkleTreeNodeTypeEnum");
/**
 * Check if a given object implements the MerkleStateInfoDTOTreeInner interface.
 */
function instanceOfMerkleStateInfoDTOTreeInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "path" in value;
    isInstance = isInstance && "encodedPath" in value;
    isInstance = isInstance && "nibbleCount" in value;
    isInstance = isInstance && "linkMask" in value;
    isInstance = isInstance && "links" in value;
    isInstance = isInstance && "branchHash" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "leafHash" in value;
    return isInstance;
}
exports.instanceOfMerkleStateInfoDTOTreeInner = instanceOfMerkleStateInfoDTOTreeInner;
function MerkleStateInfoDTOTreeInnerFromJSON(json) {
    return MerkleStateInfoDTOTreeInnerFromJSONTyped(json, false);
}
exports.MerkleStateInfoDTOTreeInnerFromJSON = MerkleStateInfoDTOTreeInnerFromJSON;
function MerkleStateInfoDTOTreeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': (0, MerkleTreeNodeTypeEnum_1.MerkleTreeNodeTypeEnumFromJSON)(json['type']),
        'path': json['path'],
        'encodedPath': json['encodedPath'],
        'nibbleCount': json['nibbleCount'],
        'linkMask': json['linkMask'],
        'links': (json['links'].map(MerkleTreeBranchLinkDTO_1.MerkleTreeBranchLinkDTOFromJSON)),
        'branchHash': json['branchHash'],
        'value': json['value'],
        'leafHash': json['leafHash'],
    };
}
exports.MerkleStateInfoDTOTreeInnerFromJSONTyped = MerkleStateInfoDTOTreeInnerFromJSONTyped;
function MerkleStateInfoDTOTreeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': (0, MerkleTreeNodeTypeEnum_1.MerkleTreeNodeTypeEnumToJSON)(value.type),
        'path': value.path,
        'encodedPath': value.encodedPath,
        'nibbleCount': value.nibbleCount,
        'linkMask': value.linkMask,
        'links': (value.links.map(MerkleTreeBranchLinkDTO_1.MerkleTreeBranchLinkDTOToJSON)),
        'branchHash': value.branchHash,
        'value': value.value,
        'leafHash': value.leafHash,
    };
}
exports.MerkleStateInfoDTOTreeInnerToJSON = MerkleStateInfoDTOTreeInnerToJSON;
