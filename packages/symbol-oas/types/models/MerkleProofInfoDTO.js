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
exports.MerkleProofInfoDTOToJSON = exports.MerkleProofInfoDTOFromJSONTyped = exports.MerkleProofInfoDTOFromJSON = exports.instanceOfMerkleProofInfoDTO = void 0;
const runtime_1 = require("../runtime");
const MerklePathItemDTO_1 = require("./MerklePathItemDTO");
/**
 * Check if a given object implements the MerkleProofInfoDTO interface.
 */
function instanceOfMerkleProofInfoDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMerkleProofInfoDTO = instanceOfMerkleProofInfoDTO;
function MerkleProofInfoDTOFromJSON(json) {
    return MerkleProofInfoDTOFromJSONTyped(json, false);
}
exports.MerkleProofInfoDTOFromJSON = MerkleProofInfoDTOFromJSON;
function MerkleProofInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        merklePath: !(0, runtime_1.exists)(json, "merklePath")
            ? undefined
            : json["merklePath"].map(MerklePathItemDTO_1.MerklePathItemDTOFromJSON),
    };
}
exports.MerkleProofInfoDTOFromJSONTyped = MerkleProofInfoDTOFromJSONTyped;
function MerkleProofInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        merklePath: value.merklePath === undefined
            ? undefined
            : value.merklePath.map(MerklePathItemDTO_1.MerklePathItemDTOToJSON),
    };
}
exports.MerkleProofInfoDTOToJSON = MerkleProofInfoDTOToJSON;
