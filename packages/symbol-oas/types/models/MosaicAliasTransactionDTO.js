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
exports.MosaicAliasTransactionDTOToJSON = exports.MosaicAliasTransactionDTOFromJSONTyped = exports.MosaicAliasTransactionDTOFromJSON = exports.instanceOfMosaicAliasTransactionDTO = void 0;
const AliasActionEnum_1 = require("./AliasActionEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the MosaicAliasTransactionDTO interface.
 */
function instanceOfMosaicAliasTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
exports.instanceOfMosaicAliasTransactionDTO = instanceOfMosaicAliasTransactionDTO;
function MosaicAliasTransactionDTOFromJSON(json) {
    return MosaicAliasTransactionDTOFromJSONTyped(json, false);
}
exports.MosaicAliasTransactionDTOFromJSON = MosaicAliasTransactionDTOFromJSON;
function MosaicAliasTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': (0, AliasActionEnum_1.AliasActionEnumFromJSON)(json['aliasAction']),
    };
}
exports.MosaicAliasTransactionDTOFromJSONTyped = MosaicAliasTransactionDTOFromJSONTyped;
function MosaicAliasTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': (0, AliasActionEnum_1.AliasActionEnumToJSON)(value.aliasAction),
    };
}
exports.MosaicAliasTransactionDTOToJSON = MosaicAliasTransactionDTOToJSON;
