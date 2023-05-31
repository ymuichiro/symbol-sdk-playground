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
exports.EmbeddedTransactionInfoDTOTransactionToJSON = exports.EmbeddedTransactionInfoDTOTransactionFromJSONTyped = exports.EmbeddedTransactionInfoDTOTransactionFromJSON = exports.instanceOfEmbeddedTransactionInfoDTOTransaction = void 0;
const runtime_1 = require("../runtime");
const AccountRestrictionFlagsEnum_1 = require("./AccountRestrictionFlagsEnum");
const AliasActionEnum_1 = require("./AliasActionEnum");
const LinkActionEnum_1 = require("./LinkActionEnum");
const LockHashAlgorithmEnum_1 = require("./LockHashAlgorithmEnum");
const MosaicRestrictionTypeEnum_1 = require("./MosaicRestrictionTypeEnum");
const MosaicSupplyChangeActionEnum_1 = require("./MosaicSupplyChangeActionEnum");
const NamespaceRegistrationTypeEnum_1 = require("./NamespaceRegistrationTypeEnum");
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
const TransactionTypeEnum_1 = require("./TransactionTypeEnum");
const UnresolvedMosaic_1 = require("./UnresolvedMosaic");
/**
 * Check if a given object implements the EmbeddedTransactionInfoDTOTransaction interface.
 */
function instanceOfEmbeddedTransactionInfoDTOTransaction(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "targetMosaicId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "aliasAction" in value;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "referenceMosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "previousRestrictionType" in value;
    isInstance = isInstance && "newRestrictionType" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
exports.instanceOfEmbeddedTransactionInfoDTOTransaction = instanceOfEmbeddedTransactionInfoDTOTransaction;
function EmbeddedTransactionInfoDTOTransactionFromJSON(json) {
    return EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json, false);
}
exports.EmbeddedTransactionInfoDTOTransactionFromJSON = EmbeddedTransactionInfoDTOTransactionFromJSON;
function EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumFromJSON)(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumFromJSON)(json['linkAction']),
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hash': json['hash'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumFromJSON)(json['hashAlgorithm']),
        'proof': json['proof'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
        'targetMosaicId': json['targetMosaicId'],
        'targetNamespaceId': !(0, runtime_1.exists)(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'id': json['id'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
        'delta': json['delta'],
        'action': (0, MosaicSupplyChangeActionEnum_1.MosaicSupplyChangeActionEnumFromJSON)(json['action']),
        'sourceAddress': json['sourceAddress'],
        'parentId': !(0, runtime_1.exists)(json, 'parentId') ? undefined : json['parentId'],
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumFromJSON)(json['registrationType']),
        'name': json['name'],
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': (0, AliasActionEnum_1.AliasActionEnumFromJSON)(json['aliasAction']),
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
        'restrictionFlags': (0, AccountRestrictionFlagsEnum_1.AccountRestrictionFlagsEnumFromJSON)(json['restrictionFlags']),
        'restrictionAdditions': !(0, runtime_1.exists)(json, 'restrictionAdditions') ? undefined : (json['restrictionAdditions'].map(TransactionTypeEnum_1.TransactionTypeEnumFromJSON)),
        'restrictionDeletions': !(0, runtime_1.exists)(json, 'restrictionDeletions') ? undefined : (json['restrictionDeletions'].map(TransactionTypeEnum_1.TransactionTypeEnumFromJSON)),
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'previousRestrictionType': (0, MosaicRestrictionTypeEnum_1.MosaicRestrictionTypeEnumFromJSON)(json['previousRestrictionType']),
        'newRestrictionType': (0, MosaicRestrictionTypeEnum_1.MosaicRestrictionTypeEnumFromJSON)(json['newRestrictionType']),
        'mosaics': (json['mosaics'].map(UnresolvedMosaic_1.UnresolvedMosaicFromJSON)),
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.EmbeddedTransactionInfoDTOTransactionFromJSONTyped = EmbeddedTransactionInfoDTOTransactionFromJSONTyped;
function EmbeddedTransactionInfoDTOTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': (0, NetworkTypeEnum_1.NetworkTypeEnumToJSON)(value.network),
        'type': value.type,
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': (0, LinkActionEnum_1.LinkActionEnumToJSON)(value.linkAction),
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hash': value.hash,
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': (0, LockHashAlgorithmEnum_1.LockHashAlgorithmEnumToJSON)(value.hashAlgorithm),
        'proof': value.proof,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
        'targetMosaicId': value.targetMosaicId,
        'targetNamespaceId': value.targetNamespaceId,
        'id': value.id,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
        'delta': value.delta,
        'action': (0, MosaicSupplyChangeActionEnum_1.MosaicSupplyChangeActionEnumToJSON)(value.action),
        'sourceAddress': value.sourceAddress,
        'parentId': value.parentId,
        'registrationType': (0, NamespaceRegistrationTypeEnum_1.NamespaceRegistrationTypeEnumToJSON)(value.registrationType),
        'name': value.name,
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': (0, AliasActionEnum_1.AliasActionEnumToJSON)(value.aliasAction),
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
        'restrictionFlags': (0, AccountRestrictionFlagsEnum_1.AccountRestrictionFlagsEnumToJSON)(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions === undefined ? undefined : (value.restrictionAdditions.map(TransactionTypeEnum_1.TransactionTypeEnumToJSON)),
        'restrictionDeletions': value.restrictionDeletions === undefined ? undefined : (value.restrictionDeletions.map(TransactionTypeEnum_1.TransactionTypeEnumToJSON)),
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'previousRestrictionType': (0, MosaicRestrictionTypeEnum_1.MosaicRestrictionTypeEnumToJSON)(value.previousRestrictionType),
        'newRestrictionType': (0, MosaicRestrictionTypeEnum_1.MosaicRestrictionTypeEnumToJSON)(value.newRestrictionType),
        'mosaics': (value.mosaics.map(UnresolvedMosaic_1.UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
exports.EmbeddedTransactionInfoDTOTransactionToJSON = EmbeddedTransactionInfoDTOTransactionToJSON;
