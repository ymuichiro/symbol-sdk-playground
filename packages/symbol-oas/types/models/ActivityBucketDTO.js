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
exports.ActivityBucketDTOToJSON = exports.ActivityBucketDTOFromJSONTyped = exports.ActivityBucketDTOFromJSON = exports.instanceOfActivityBucketDTO = void 0;
/**
 * Check if a given object implements the ActivityBucketDTO interface.
 */
function instanceOfActivityBucketDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "startHeight" in value;
    isInstance = isInstance && "totalFeesPaid" in value;
    isInstance = isInstance && "beneficiaryCount" in value;
    isInstance = isInstance && "rawScore" in value;
    return isInstance;
}
exports.instanceOfActivityBucketDTO = instanceOfActivityBucketDTO;
function ActivityBucketDTOFromJSON(json) {
    return ActivityBucketDTOFromJSONTyped(json, false);
}
exports.ActivityBucketDTOFromJSON = ActivityBucketDTOFromJSON;
function ActivityBucketDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'startHeight': json['startHeight'],
        'totalFeesPaid': json['totalFeesPaid'],
        'beneficiaryCount': json['beneficiaryCount'],
        'rawScore': json['rawScore'],
    };
}
exports.ActivityBucketDTOFromJSONTyped = ActivityBucketDTOFromJSONTyped;
function ActivityBucketDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'startHeight': value.startHeight,
        'totalFeesPaid': value.totalFeesPaid,
        'beneficiaryCount': value.beneficiaryCount,
        'rawScore': value.rawScore,
    };
}
exports.ActivityBucketDTOToJSON = ActivityBucketDTOToJSON;
