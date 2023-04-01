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
exports.MosaicIdsToJSON = exports.MosaicIdsFromJSONTyped = exports.MosaicIdsFromJSON = exports.instanceOfMosaicIds = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MosaicIds interface.
 */
function instanceOfMosaicIds(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMosaicIds = instanceOfMosaicIds;
function MosaicIdsFromJSON(json) {
    return MosaicIdsFromJSONTyped(json, false);
}
exports.MosaicIdsFromJSON = MosaicIdsFromJSON;
function MosaicIdsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        mosaicIds: !(0, runtime_1.exists)(json, "mosaicIds") ? undefined : json["mosaicIds"],
    };
}
exports.MosaicIdsFromJSONTyped = MosaicIdsFromJSONTyped;
function MosaicIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        mosaicIds: value.mosaicIds,
    };
}
exports.MosaicIdsToJSON = MosaicIdsToJSON;
