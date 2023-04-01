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
exports.MosaicGlobalRestrictionEntryDTOToJSON = exports.MosaicGlobalRestrictionEntryDTOFromJSONTyped = exports.MosaicGlobalRestrictionEntryDTOFromJSON = exports.instanceOfMosaicGlobalRestrictionEntryDTO = void 0;
const MosaicGlobalRestrictionEntryRestrictionDTO_1 = require("./MosaicGlobalRestrictionEntryRestrictionDTO");
/**
 * Check if a given object implements the MosaicGlobalRestrictionEntryDTO interface.
 */
function instanceOfMosaicGlobalRestrictionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "restriction" in value;
    return isInstance;
}
exports.instanceOfMosaicGlobalRestrictionEntryDTO = instanceOfMosaicGlobalRestrictionEntryDTO;
function MosaicGlobalRestrictionEntryDTOFromJSON(json) {
    return MosaicGlobalRestrictionEntryDTOFromJSONTyped(json, false);
}
exports.MosaicGlobalRestrictionEntryDTOFromJSON = MosaicGlobalRestrictionEntryDTOFromJSON;
function MosaicGlobalRestrictionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        key: json["key"],
        restriction: (0, MosaicGlobalRestrictionEntryRestrictionDTO_1.MosaicGlobalRestrictionEntryRestrictionDTOFromJSON)(json["restriction"]),
    };
}
exports.MosaicGlobalRestrictionEntryDTOFromJSONTyped = MosaicGlobalRestrictionEntryDTOFromJSONTyped;
function MosaicGlobalRestrictionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        key: value.key,
        restriction: (0, MosaicGlobalRestrictionEntryRestrictionDTO_1.MosaicGlobalRestrictionEntryRestrictionDTOToJSON)(value.restriction),
    };
}
exports.MosaicGlobalRestrictionEntryDTOToJSON = MosaicGlobalRestrictionEntryDTOToJSON;
