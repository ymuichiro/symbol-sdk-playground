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
exports.ResolutionEntryDTOToJSON = exports.ResolutionEntryDTOFromJSONTyped = exports.ResolutionEntryDTOFromJSON = exports.instanceOfResolutionEntryDTO = void 0;
const ResolutionEntryDTOResolved_1 = require("./ResolutionEntryDTOResolved");
const SourceDTO_1 = require("./SourceDTO");
/**
 * Check if a given object implements the ResolutionEntryDTO interface.
 */
function instanceOfResolutionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "resolved" in value;
    return isInstance;
}
exports.instanceOfResolutionEntryDTO = instanceOfResolutionEntryDTO;
function ResolutionEntryDTOFromJSON(json) {
    return ResolutionEntryDTOFromJSONTyped(json, false);
}
exports.ResolutionEntryDTOFromJSON = ResolutionEntryDTOFromJSON;
function ResolutionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'source': (0, SourceDTO_1.SourceDTOFromJSON)(json['source']),
        'resolved': (0, ResolutionEntryDTOResolved_1.ResolutionEntryDTOResolvedFromJSON)(json['resolved']),
    };
}
exports.ResolutionEntryDTOFromJSONTyped = ResolutionEntryDTOFromJSONTyped;
function ResolutionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'source': (0, SourceDTO_1.SourceDTOToJSON)(value.source),
        'resolved': (0, ResolutionEntryDTOResolved_1.ResolutionEntryDTOResolvedToJSON)(value.resolved),
    };
}
exports.ResolutionEntryDTOToJSON = ResolutionEntryDTOToJSON;
