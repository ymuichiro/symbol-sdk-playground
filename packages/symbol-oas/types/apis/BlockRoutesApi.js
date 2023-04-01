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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class BlockRoutesApi extends runtime.BaseAPI {
    /**
     * Gets a block from the chain that has the given height.
     * Get block information
     */
    getBlockByHeightRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.height === null ||
                requestParameters.height === undefined) {
                throw new runtime.RequiredError("height", "Required parameter requestParameters.height was null or undefined when calling getBlockByHeight.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/blocks/{height}`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BlockInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets a block from the chain that has the given height.
     * Get block information
     */
    getBlockByHeight(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockByHeightRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the merkle path for a receipt statement or resolution linked to a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.receiptsHash) to verify if the statement was linked with the block.
     * Get the merkle path for a given a receipt statement hash and block
     */
    getMerkleReceiptsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.height === null ||
                requestParameters.height === undefined) {
                throw new runtime.RequiredError("height", "Required parameter requestParameters.height was null or undefined when calling getMerkleReceipts.");
            }
            if (requestParameters.hash === null ||
                requestParameters.hash === undefined) {
                throw new runtime.RequiredError("hash", "Required parameter requestParameters.hash was null or undefined when calling getMerkleReceipts.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/blocks/{height}/statements/{hash}/merkle`
                    .replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height)))
                    .replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleProofInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the merkle path for a receipt statement or resolution linked to a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.receiptsHash) to verify if the statement was linked with the block.
     * Get the merkle path for a given a receipt statement hash and block
     */
    getMerkleReceipts(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMerkleReceiptsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the merkle path for a transaction included in a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.transactionsHash) to verify if the transaction was included in the block.
     * Get the merkle path for a given a transaction and block
     */
    getMerkleTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.height === null ||
                requestParameters.height === undefined) {
                throw new runtime.RequiredError("height", "Required parameter requestParameters.height was null or undefined when calling getMerkleTransaction.");
            }
            if (requestParameters.hash === null ||
                requestParameters.hash === undefined) {
                throw new runtime.RequiredError("hash", "Required parameter requestParameters.hash was null or undefined when calling getMerkleTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/blocks/{height}/transactions/{hash}/merkle`
                    .replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height)))
                    .replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleProofInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the merkle path for a transaction included in a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.transactionsHash) to verify if the transaction was included in the block.
     * Get the merkle path for a given a transaction and block
     */
    getMerkleTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMerkleTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets an array of bocks.
     * Search blocks
     */
    searchBlocksRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.signerPublicKey !== undefined) {
                queryParameters["signerPublicKey"] = requestParameters.signerPublicKey;
            }
            if (requestParameters.beneficiaryAddress !== undefined) {
                queryParameters["beneficiaryAddress"] =
                    requestParameters.beneficiaryAddress;
            }
            if (requestParameters.pageSize !== undefined) {
                queryParameters["pageSize"] = requestParameters.pageSize;
            }
            if (requestParameters.pageNumber !== undefined) {
                queryParameters["pageNumber"] = requestParameters.pageNumber;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters["offset"] = requestParameters.offset;
            }
            if (requestParameters.order !== undefined) {
                queryParameters["order"] = requestParameters.order;
            }
            if (requestParameters.orderBy !== undefined) {
                queryParameters["orderBy"] = requestParameters.orderBy;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/blocks`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BlockPageFromJSON)(jsonValue));
        });
    }
    /**
     * Gets an array of bocks.
     * Search blocks
     */
    searchBlocks(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchBlocksRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.BlockRoutesApi = BlockRoutesApi;