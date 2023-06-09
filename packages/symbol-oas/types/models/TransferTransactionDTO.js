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
exports.TransferTransactionDTOToJSON = exports.TransferTransactionDTOFromJSONTyped = exports.TransferTransactionDTOFromJSON = exports.instanceOfTransferTransactionDTO = void 0;
const runtime_1 = require("../runtime");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
const UnresolvedMosaic_1 = require("./UnresolvedMosaic");
/**
 * Check if a given object implements the TransferTransactionDTO interface.
 */
function instanceOfTransferTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
exports.instanceOfTransferTransactionDTO = instanceOfTransferTransactionDTO;
function TransferTransactionDTOFromJSON(json) {
    return TransferTransactionDTOFromJSONTyped(json, false);
}
exports.TransferTransactionDTOFromJSON = TransferTransactionDTOFromJSON;
function TransferTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        'recipientAddress': json['recipientAddress'],
        'mosaics': (json['mosaics'].map(UnresolvedMosaic_1.UnresolvedMosaicFromJSON)),
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.TransferTransactionDTOFromJSONTyped = TransferTransactionDTOFromJSONTyped;
function TransferTransactionDTOToJSON(value) {
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
        'recipientAddress': value.recipientAddress,
        'mosaics': (value.mosaics.map(UnresolvedMosaic_1.UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
exports.TransferTransactionDTOToJSON = TransferTransactionDTOToJSON;
