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
exports.MosaicNetworkPropertiesDTOToJSON = exports.MosaicNetworkPropertiesDTOFromJSONTyped = exports.MosaicNetworkPropertiesDTOFromJSON = exports.instanceOfMosaicNetworkPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MosaicNetworkPropertiesDTO interface.
 */
function instanceOfMosaicNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMosaicNetworkPropertiesDTO = instanceOfMosaicNetworkPropertiesDTO;
function MosaicNetworkPropertiesDTOFromJSON(json) {
    return MosaicNetworkPropertiesDTOFromJSONTyped(json, false);
}
exports.MosaicNetworkPropertiesDTOFromJSON = MosaicNetworkPropertiesDTOFromJSON;
function MosaicNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMosaicsPerAccount': !(0, runtime_1.exists)(json, 'maxMosaicsPerAccount') ? undefined : json['maxMosaicsPerAccount'],
        'maxMosaicDuration': !(0, runtime_1.exists)(json, 'maxMosaicDuration') ? undefined : json['maxMosaicDuration'],
        'maxMosaicDivisibility': !(0, runtime_1.exists)(json, 'maxMosaicDivisibility') ? undefined : json['maxMosaicDivisibility'],
        'mosaicRentalFeeSinkAddress': !(0, runtime_1.exists)(json, 'mosaicRentalFeeSinkAddress') ? undefined : json['mosaicRentalFeeSinkAddress'],
        'mosaicRentalFee': !(0, runtime_1.exists)(json, 'mosaicRentalFee') ? undefined : json['mosaicRentalFee'],
    };
}
exports.MosaicNetworkPropertiesDTOFromJSONTyped = MosaicNetworkPropertiesDTOFromJSONTyped;
function MosaicNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMosaicsPerAccount': value.maxMosaicsPerAccount,
        'maxMosaicDuration': value.maxMosaicDuration,
        'maxMosaicDivisibility': value.maxMosaicDivisibility,
        'mosaicRentalFeeSinkAddress': value.mosaicRentalFeeSinkAddress,
        'mosaicRentalFee': value.mosaicRentalFee,
    };
}
exports.MosaicNetworkPropertiesDTOToJSON = MosaicNetworkPropertiesDTOToJSON;
