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
exports.ChainPropertiesDTOToJSON = exports.ChainPropertiesDTOFromJSONTyped = exports.ChainPropertiesDTOFromJSON = exports.instanceOfChainPropertiesDTO = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChainPropertiesDTO interface.
 */
function instanceOfChainPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChainPropertiesDTO = instanceOfChainPropertiesDTO;
function ChainPropertiesDTOFromJSON(json) {
    return ChainPropertiesDTOFromJSONTyped(json, false);
}
exports.ChainPropertiesDTOFromJSON = ChainPropertiesDTOFromJSON;
function ChainPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        enableVerifiableState: !(0, runtime_1.exists)(json, "enableVerifiableState")
            ? undefined
            : json["enableVerifiableState"],
        enableVerifiableReceipts: !(0, runtime_1.exists)(json, "enableVerifiableReceipts")
            ? undefined
            : json["enableVerifiableReceipts"],
        currencyMosaicId: !(0, runtime_1.exists)(json, "currencyMosaicId")
            ? undefined
            : json["currencyMosaicId"],
        harvestingMosaicId: !(0, runtime_1.exists)(json, "harvestingMosaicId")
            ? undefined
            : json["harvestingMosaicId"],
        blockGenerationTargetTime: !(0, runtime_1.exists)(json, "blockGenerationTargetTime")
            ? undefined
            : json["blockGenerationTargetTime"],
        blockTimeSmoothingFactor: !(0, runtime_1.exists)(json, "blockTimeSmoothingFactor")
            ? undefined
            : json["blockTimeSmoothingFactor"],
        blockFinalizationInterval: !(0, runtime_1.exists)(json, "blockFinalizationInterval")
            ? undefined
            : json["blockFinalizationInterval"],
        importanceGrouping: !(0, runtime_1.exists)(json, "importanceGrouping")
            ? undefined
            : json["importanceGrouping"],
        importanceActivityPercentage: !(0, runtime_1.exists)(json, "importanceActivityPercentage")
            ? undefined
            : json["importanceActivityPercentage"],
        maxRollbackBlocks: !(0, runtime_1.exists)(json, "maxRollbackBlocks")
            ? undefined
            : json["maxRollbackBlocks"],
        maxDifficultyBlocks: !(0, runtime_1.exists)(json, "maxDifficultyBlocks")
            ? undefined
            : json["maxDifficultyBlocks"],
        defaultDynamicFeeMultiplier: !(0, runtime_1.exists)(json, "defaultDynamicFeeMultiplier")
            ? undefined
            : json["defaultDynamicFeeMultiplier"],
        maxTransactionLifetime: !(0, runtime_1.exists)(json, "maxTransactionLifetime")
            ? undefined
            : json["maxTransactionLifetime"],
        maxBlockFutureTime: !(0, runtime_1.exists)(json, "maxBlockFutureTime")
            ? undefined
            : json["maxBlockFutureTime"],
        initialCurrencyAtomicUnits: !(0, runtime_1.exists)(json, "initialCurrencyAtomicUnits")
            ? undefined
            : json["initialCurrencyAtomicUnits"],
        maxMosaicAtomicUnits: !(0, runtime_1.exists)(json, "maxMosaicAtomicUnits")
            ? undefined
            : json["maxMosaicAtomicUnits"],
        totalChainImportance: !(0, runtime_1.exists)(json, "totalChainImportance")
            ? undefined
            : json["totalChainImportance"],
        minHarvesterBalance: !(0, runtime_1.exists)(json, "minHarvesterBalance")
            ? undefined
            : json["minHarvesterBalance"],
        maxHarvesterBalance: !(0, runtime_1.exists)(json, "maxHarvesterBalance")
            ? undefined
            : json["maxHarvesterBalance"],
        minVoterBalance: !(0, runtime_1.exists)(json, "minVoterBalance")
            ? undefined
            : json["minVoterBalance"],
        maxVotingKeysPerAccount: !(0, runtime_1.exists)(json, "maxVotingKeysPerAccount")
            ? undefined
            : json["maxVotingKeysPerAccount"],
        minVotingKeyLifetime: !(0, runtime_1.exists)(json, "minVotingKeyLifetime")
            ? undefined
            : json["minVotingKeyLifetime"],
        maxVotingKeyLifetime: !(0, runtime_1.exists)(json, "maxVotingKeyLifetime")
            ? undefined
            : json["maxVotingKeyLifetime"],
        harvestBeneficiaryPercentage: !(0, runtime_1.exists)(json, "harvestBeneficiaryPercentage")
            ? undefined
            : json["harvestBeneficiaryPercentage"],
        harvestNetworkPercentage: !(0, runtime_1.exists)(json, "harvestNetworkPercentage")
            ? undefined
            : json["harvestNetworkPercentage"],
        harvestNetworkFeeSinkAddress: !(0, runtime_1.exists)(json, "harvestNetworkFeeSinkAddress")
            ? undefined
            : json["harvestNetworkFeeSinkAddress"],
        blockPruneInterval: !(0, runtime_1.exists)(json, "blockPruneInterval")
            ? undefined
            : json["blockPruneInterval"],
        maxTransactionsPerBlock: !(0, runtime_1.exists)(json, "maxTransactionsPerBlock")
            ? undefined
            : json["maxTransactionsPerBlock"],
    };
}
exports.ChainPropertiesDTOFromJSONTyped = ChainPropertiesDTOFromJSONTyped;
function ChainPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        enableVerifiableState: value.enableVerifiableState,
        enableVerifiableReceipts: value.enableVerifiableReceipts,
        currencyMosaicId: value.currencyMosaicId,
        harvestingMosaicId: value.harvestingMosaicId,
        blockGenerationTargetTime: value.blockGenerationTargetTime,
        blockTimeSmoothingFactor: value.blockTimeSmoothingFactor,
        blockFinalizationInterval: value.blockFinalizationInterval,
        importanceGrouping: value.importanceGrouping,
        importanceActivityPercentage: value.importanceActivityPercentage,
        maxRollbackBlocks: value.maxRollbackBlocks,
        maxDifficultyBlocks: value.maxDifficultyBlocks,
        defaultDynamicFeeMultiplier: value.defaultDynamicFeeMultiplier,
        maxTransactionLifetime: value.maxTransactionLifetime,
        maxBlockFutureTime: value.maxBlockFutureTime,
        initialCurrencyAtomicUnits: value.initialCurrencyAtomicUnits,
        maxMosaicAtomicUnits: value.maxMosaicAtomicUnits,
        totalChainImportance: value.totalChainImportance,
        minHarvesterBalance: value.minHarvesterBalance,
        maxHarvesterBalance: value.maxHarvesterBalance,
        minVoterBalance: value.minVoterBalance,
        maxVotingKeysPerAccount: value.maxVotingKeysPerAccount,
        minVotingKeyLifetime: value.minVotingKeyLifetime,
        maxVotingKeyLifetime: value.maxVotingKeyLifetime,
        harvestBeneficiaryPercentage: value.harvestBeneficiaryPercentage,
        harvestNetworkPercentage: value.harvestNetworkPercentage,
        harvestNetworkFeeSinkAddress: value.harvestNetworkFeeSinkAddress,
        blockPruneInterval: value.blockPruneInterval,
        maxTransactionsPerBlock: value.maxTransactionsPerBlock,
    };
}
exports.ChainPropertiesDTOToJSON = ChainPropertiesDTOToJSON;
