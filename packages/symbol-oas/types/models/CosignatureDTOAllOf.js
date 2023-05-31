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
exports.CosignatureDTOAllOfToJSON = exports.CosignatureDTOAllOfFromJSONTyped = exports.CosignatureDTOAllOfFromJSON = exports.instanceOfCosignatureDTOAllOf = void 0;
/**
 * Check if a given object implements the CosignatureDTOAllOf interface.
 */
function instanceOfCosignatureDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    return isInstance;
}
exports.instanceOfCosignatureDTOAllOf = instanceOfCosignatureDTOAllOf;
function CosignatureDTOAllOfFromJSON(json) {
    return CosignatureDTOAllOfFromJSONTyped(json, false);
}
exports.CosignatureDTOAllOfFromJSON = CosignatureDTOAllOfFromJSON;
function CosignatureDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'signerPublicKey': json['signerPublicKey'],
    };
}
exports.CosignatureDTOAllOfFromJSONTyped = CosignatureDTOAllOfFromJSONTyped;
function CosignatureDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'signerPublicKey': value.signerPublicKey,
    };
}
exports.CosignatureDTOAllOfToJSON = CosignatureDTOAllOfToJSON;
