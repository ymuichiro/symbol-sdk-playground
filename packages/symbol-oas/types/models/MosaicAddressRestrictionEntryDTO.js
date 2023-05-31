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
exports.MosaicAddressRestrictionEntryDTOToJSON = exports.MosaicAddressRestrictionEntryDTOFromJSONTyped = exports.MosaicAddressRestrictionEntryDTOFromJSON = exports.instanceOfMosaicAddressRestrictionEntryDTO = void 0;
/**
 * Check if a given object implements the MosaicAddressRestrictionEntryDTO interface.
 */
function instanceOfMosaicAddressRestrictionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfMosaicAddressRestrictionEntryDTO = instanceOfMosaicAddressRestrictionEntryDTO;
function MosaicAddressRestrictionEntryDTOFromJSON(json) {
    return MosaicAddressRestrictionEntryDTOFromJSONTyped(json, false);
}
exports.MosaicAddressRestrictionEntryDTOFromJSON = MosaicAddressRestrictionEntryDTOFromJSON;
function MosaicAddressRestrictionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'value': json['value'],
    };
}
exports.MosaicAddressRestrictionEntryDTOFromJSONTyped = MosaicAddressRestrictionEntryDTOFromJSONTyped;
function MosaicAddressRestrictionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'value': value.value,
    };
}
exports.MosaicAddressRestrictionEntryDTOToJSON = MosaicAddressRestrictionEntryDTOToJSON;
