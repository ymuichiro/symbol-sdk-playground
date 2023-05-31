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
exports.MosaicRestrictionDTOToJSON = exports.MosaicRestrictionDTOFromJSONTyped = exports.MosaicRestrictionDTOFromJSON = exports.instanceOfMosaicRestrictionDTO = void 0;
const MosaicGlobalRestrictionEntryWrapperDTO_1 = require("./MosaicGlobalRestrictionEntryWrapperDTO");
/**
 * Check if a given object implements the MosaicRestrictionDTO interface.
 */
function instanceOfMosaicRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
exports.instanceOfMosaicRestrictionDTO = instanceOfMosaicRestrictionDTO;
function MosaicRestrictionDTOFromJSON(json) {
    return MosaicRestrictionDTOFromJSONTyped(json, false);
}
exports.MosaicRestrictionDTOFromJSON = MosaicRestrictionDTOFromJSON;
function MosaicRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': (0, MosaicGlobalRestrictionEntryWrapperDTO_1.MosaicGlobalRestrictionEntryWrapperDTOFromJSON)(json['mosaicRestrictionEntry']),
    };
}
exports.MosaicRestrictionDTOFromJSONTyped = MosaicRestrictionDTOFromJSONTyped;
function MosaicRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'mosaicRestrictionEntry': (0, MosaicGlobalRestrictionEntryWrapperDTO_1.MosaicGlobalRestrictionEntryWrapperDTOToJSON)(value.mosaicRestrictionEntry),
    };
}
exports.MosaicRestrictionDTOToJSON = MosaicRestrictionDTOToJSON;
