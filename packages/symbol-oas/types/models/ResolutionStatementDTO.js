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
exports.ResolutionStatementDTOToJSON = exports.ResolutionStatementDTOFromJSONTyped = exports.ResolutionStatementDTOFromJSON = exports.instanceOfResolutionStatementDTO = void 0;
const ResolutionEntryDTO_1 = require("./ResolutionEntryDTO");
const ResolutionStatementDTOUnresolved_1 = require("./ResolutionStatementDTOUnresolved");
/**
 * Check if a given object implements the ResolutionStatementDTO interface.
 */
function instanceOfResolutionStatementDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "unresolved" in value;
    isInstance = isInstance && "resolutionEntries" in value;
    return isInstance;
}
exports.instanceOfResolutionStatementDTO = instanceOfResolutionStatementDTO;
function ResolutionStatementDTOFromJSON(json) {
    return ResolutionStatementDTOFromJSONTyped(json, false);
}
exports.ResolutionStatementDTOFromJSON = ResolutionStatementDTOFromJSON;
function ResolutionStatementDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        height: json["height"],
        unresolved: (0, ResolutionStatementDTOUnresolved_1.ResolutionStatementDTOUnresolvedFromJSON)(json["unresolved"]),
        resolutionEntries: json["resolutionEntries"].map(ResolutionEntryDTO_1.ResolutionEntryDTOFromJSON),
    };
}
exports.ResolutionStatementDTOFromJSONTyped = ResolutionStatementDTOFromJSONTyped;
function ResolutionStatementDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        height: value.height,
        unresolved: (0, ResolutionStatementDTOUnresolved_1.ResolutionStatementDTOUnresolvedToJSON)(value.unresolved),
        resolutionEntries: value.resolutionEntries.map(ResolutionEntryDTO_1.ResolutionEntryDTOToJSON),
    };
}
exports.ResolutionStatementDTOToJSON = ResolutionStatementDTOToJSON;
