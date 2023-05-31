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
exports.MosaicAddressRestrictionDTOToJSON = exports.MosaicAddressRestrictionDTOFromJSONTyped = exports.MosaicAddressRestrictionDTOFromJSON = exports.instanceOfMosaicAddressRestrictionDTO = void 0;
const MosaicAddressRestrictionEntryWrapperDTO_1 = require("./MosaicAddressRestrictionEntryWrapperDTO");
/**
 * Check if a given object implements the MosaicAddressRestrictionDTO interface.
 */
function instanceOfMosaicAddressRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
exports.instanceOfMosaicAddressRestrictionDTO = instanceOfMosaicAddressRestrictionDTO;
function MosaicAddressRestrictionDTOFromJSON(json) {
    return MosaicAddressRestrictionDTOFromJSONTyped(json, false);
}
exports.MosaicAddressRestrictionDTOFromJSON = MosaicAddressRestrictionDTOFromJSON;
function MosaicAddressRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': (0, MosaicAddressRestrictionEntryWrapperDTO_1.MosaicAddressRestrictionEntryWrapperDTOFromJSON)(json['mosaicRestrictionEntry']),
    };
}
exports.MosaicAddressRestrictionDTOFromJSONTyped = MosaicAddressRestrictionDTOFromJSONTyped;
function MosaicAddressRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'mosaicRestrictionEntry': (0, MosaicAddressRestrictionEntryWrapperDTO_1.MosaicAddressRestrictionEntryWrapperDTOToJSON)(value.mosaicRestrictionEntry),
    };
}
exports.MosaicAddressRestrictionDTOToJSON = MosaicAddressRestrictionDTOToJSON;
