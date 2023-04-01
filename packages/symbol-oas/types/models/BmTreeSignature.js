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
exports.BmTreeSignatureToJSON = exports.BmTreeSignatureFromJSONTyped = exports.BmTreeSignatureFromJSON = exports.instanceOfBmTreeSignature = void 0;
const ParentPublicKeySignaturePair_1 = require("./ParentPublicKeySignaturePair");
/**
 * Check if a given object implements the BmTreeSignature interface.
 */
function instanceOfBmTreeSignature(value) {
    let isInstance = true;
    isInstance = isInstance && "root" in value;
    isInstance = isInstance && "bottom" in value;
    return isInstance;
}
exports.instanceOfBmTreeSignature = instanceOfBmTreeSignature;
function BmTreeSignatureFromJSON(json) {
    return BmTreeSignatureFromJSONTyped(json, false);
}
exports.BmTreeSignatureFromJSON = BmTreeSignatureFromJSON;
function BmTreeSignatureFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        root: (0, ParentPublicKeySignaturePair_1.ParentPublicKeySignaturePairFromJSON)(json["root"]),
        bottom: (0, ParentPublicKeySignaturePair_1.ParentPublicKeySignaturePairFromJSON)(json["bottom"]),
    };
}
exports.BmTreeSignatureFromJSONTyped = BmTreeSignatureFromJSONTyped;
function BmTreeSignatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        root: (0, ParentPublicKeySignaturePair_1.ParentPublicKeySignaturePairToJSON)(value.root),
        bottom: (0, ParentPublicKeySignaturePair_1.ParentPublicKeySignaturePairToJSON)(value.bottom),
    };
}
exports.BmTreeSignatureToJSON = BmTreeSignatureToJSON;