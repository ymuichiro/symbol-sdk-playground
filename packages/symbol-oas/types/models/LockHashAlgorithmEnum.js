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
exports.LockHashAlgorithmEnumToJSON = exports.LockHashAlgorithmEnumFromJSONTyped = exports.LockHashAlgorithmEnumFromJSON = exports.LockHashAlgorithmEnum = void 0;
/**
 * Algorithm used to hash the proof:
 * * 0 (Op_Sha3_256) - Proof is hashed using SHA3-256.
 * * 1 (Op_Hash_160) - Proof is hashed twice: first with SHA-256 and then with RIPEMD-160 (bitcoin's OP_HASH160).
 * * 2 (Op_Hash_256) - Proof is hashed twice with SHA3-256 (bitcoin's OP_HASH256).
 * @export
 */
exports.LockHashAlgorithmEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
};
function LockHashAlgorithmEnumFromJSON(json) {
    return LockHashAlgorithmEnumFromJSONTyped(json, false);
}
exports.LockHashAlgorithmEnumFromJSON = LockHashAlgorithmEnumFromJSON;
function LockHashAlgorithmEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LockHashAlgorithmEnumFromJSONTyped = LockHashAlgorithmEnumFromJSONTyped;
function LockHashAlgorithmEnumToJSON(value) {
    return value;
}
exports.LockHashAlgorithmEnumToJSON = LockHashAlgorithmEnumToJSON;
