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
exports.MerklePathItemDTOToJSON = exports.MerklePathItemDTOFromJSONTyped = exports.MerklePathItemDTOFromJSON = exports.instanceOfMerklePathItemDTO = void 0;
const runtime_1 = require("../runtime");
const PositionEnum_1 = require("./PositionEnum");
/**
 * Check if a given object implements the MerklePathItemDTO interface.
 */
function instanceOfMerklePathItemDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMerklePathItemDTO = instanceOfMerklePathItemDTO;
function MerklePathItemDTOFromJSON(json) {
    return MerklePathItemDTOFromJSONTyped(json, false);
}
exports.MerklePathItemDTOFromJSON = MerklePathItemDTOFromJSON;
function MerklePathItemDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        position: !(0, runtime_1.exists)(json, "position")
            ? undefined
            : (0, PositionEnum_1.PositionEnumFromJSON)(json["position"]),
        hash: !(0, runtime_1.exists)(json, "hash") ? undefined : json["hash"],
    };
}
exports.MerklePathItemDTOFromJSONTyped = MerklePathItemDTOFromJSONTyped;
function MerklePathItemDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        position: (0, PositionEnum_1.PositionEnumToJSON)(value.position),
        hash: value.hash,
    };
}
exports.MerklePathItemDTOToJSON = MerklePathItemDTOToJSON;
