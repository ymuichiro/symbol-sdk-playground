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
exports.BlockInfoDTOBlockToJSON = exports.BlockInfoDTOBlockFromJSONTyped = exports.BlockInfoDTOBlockFromJSON = exports.instanceOfBlockInfoDTOBlock = void 0;
const NetworkTypeEnum_1 = require("./NetworkTypeEnum");
/**
 * Check if a given object implements the BlockInfoDTOBlock interface.
 */
function instanceOfBlockInfoDTOBlock(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "proofGamma" in value;
    isInstance = isInstance && "proofVerificationHash" in value;
    isInstance = isInstance && "proofScalar" in value;
    isInstance = isInstance && "previousBlockHash" in value;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "receiptsHash" in value;
    isInstance = isInstance && "stateHash" in value;
    isInstance = isInstance && "beneficiaryAddress" in value;
    isInstance = isInstance && "feeMultiplier" in value;
    isInstance = isInstance && "votingEligibleAccountsCount" in value;
    isInstance = isInstance && "harvestingEligibleAccountsCount" in value;
    isInstance = isInstance && "totalVotingBalance" in value;
    isInstance = isInstance && "previousImportanceBlockHash" in value;
    return isInstance;
}
exports.instanceOfBlockInfoDTOBlock = instanceOfBlockInfoDTOBlock;
function BlockInfoDTOBlockFromJSON(json) {
    return BlockInfoDTOBlockFromJSONTyped(json, false);
}
exports.BlockInfoDTOBlockFromJSON = BlockInfoDTOBlockFromJSON;
function BlockInfoDTOBlockFromJSONTyped(json, ignoreDiscriminator) {
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
        'height': json['height'],
        'timestamp': json['timestamp'],
        'difficulty': json['difficulty'],
        'proofGamma': json['proofGamma'],
        'proofVerificationHash': json['proofVerificationHash'],
        'proofScalar': json['proofScalar'],
        'previousBlockHash': json['previousBlockHash'],
        'transactionsHash': json['transactionsHash'],
        'receiptsHash': json['receiptsHash'],
        'stateHash': json['stateHash'],
        'beneficiaryAddress': json['beneficiaryAddress'],
        'feeMultiplier': json['feeMultiplier'],
        'votingEligibleAccountsCount': json['votingEligibleAccountsCount'],
        'harvestingEligibleAccountsCount': json['harvestingEligibleAccountsCount'],
        'totalVotingBalance': json['totalVotingBalance'],
        'previousImportanceBlockHash': json['previousImportanceBlockHash'],
    };
}
exports.BlockInfoDTOBlockFromJSONTyped = BlockInfoDTOBlockFromJSONTyped;
function BlockInfoDTOBlockToJSON(value) {
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
        'height': value.height,
        'timestamp': value.timestamp,
        'difficulty': value.difficulty,
        'proofGamma': value.proofGamma,
        'proofVerificationHash': value.proofVerificationHash,
        'proofScalar': value.proofScalar,
        'previousBlockHash': value.previousBlockHash,
        'transactionsHash': value.transactionsHash,
        'receiptsHash': value.receiptsHash,
        'stateHash': value.stateHash,
        'beneficiaryAddress': value.beneficiaryAddress,
        'feeMultiplier': value.feeMultiplier,
        'votingEligibleAccountsCount': value.votingEligibleAccountsCount,
        'harvestingEligibleAccountsCount': value.harvestingEligibleAccountsCount,
        'totalVotingBalance': value.totalVotingBalance,
        'previousImportanceBlockHash': value.previousImportanceBlockHash,
    };
}
exports.BlockInfoDTOBlockToJSON = BlockInfoDTOBlockToJSON;
