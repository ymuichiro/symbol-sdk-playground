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
exports.CosignatureDTOToJSON = exports.CosignatureDTOFromJSONTyped = exports.CosignatureDTOFromJSON = exports.instanceOfCosignatureDTO = void 0;
/**
 * Check if a given object implements the CosignatureDTO interface.
 */
function instanceOfCosignatureDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    return isInstance;
}
exports.instanceOfCosignatureDTO = instanceOfCosignatureDTO;
function CosignatureDTOFromJSON(json) {
    return CosignatureDTOFromJSONTyped(json, false);
}
exports.CosignatureDTOFromJSON = CosignatureDTOFromJSON;
function CosignatureDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signature': json['signature'],
        'version': json['version'],
        'signerPublicKey': json['signerPublicKey'],
    };
}
exports.CosignatureDTOFromJSONTyped = CosignatureDTOFromJSONTyped;
function CosignatureDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signature': value.signature,
        'version': value.version,
        'signerPublicKey': value.signerPublicKey,
    };
}
exports.CosignatureDTOToJSON = CosignatureDTOToJSON;
