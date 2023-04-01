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
exports.TransactionRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class TransactionRoutesApi extends runtime.BaseAPI {
    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    announceCosignatureTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cosignature === null ||
                requestParameters.cosignature === undefined) {
                throw new runtime.RequiredError("cosignature", "Required parameter requestParameters.cosignature was null or undefined when calling announceCosignatureTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions/cosignature`,
                method: "PUT",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.CosignatureToJSON)(requestParameters.cosignature),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnnounceTransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    announceCosignatureTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.announceCosignatureTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    announcePartialTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionPayload === null ||
                requestParameters.transactionPayload === undefined) {
                throw new runtime.RequiredError("transactionPayload", "Required parameter requestParameters.transactionPayload was null or undefined when calling announcePartialTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions/partial`,
                method: "PUT",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionPayloadToJSON)(requestParameters.transactionPayload),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnnounceTransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    announcePartialTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.announcePartialTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions.
     * Announce a new transaction
     */
    announceTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionPayload === null ||
                requestParameters.transactionPayload === undefined) {
                throw new runtime.RequiredError("transactionPayload", "Required parameter requestParameters.transactionPayload was null or undefined when calling announceTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions`,
                method: "PUT",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionPayloadToJSON)(requestParameters.transactionPayload),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnnounceTransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions.
     * Announce a new transaction
     */
    announceTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.announceTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    getConfirmedTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionId === null ||
                requestParameters.transactionId === undefined) {
                throw new runtime.RequiredError("transactionId", "Required parameter requestParameters.transactionId was null or undefined when calling getConfirmedTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/confirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    getConfirmedTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getConfirmedTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    getConfirmedTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionIds === null ||
                requestParameters.transactionIds === undefined) {
                throw new runtime.RequiredError("transactionIds", "Required parameter requestParameters.transactionIds was null or undefined when calling getConfirmedTransactions.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions/confirmed`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionIdsToJSON)(requestParameters.transactionIds),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TransactionInfoDTOFromJSON));
        });
    }
    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    getConfirmedTransactions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getConfirmedTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    getPartialTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionId === null ||
                requestParameters.transactionId === undefined) {
                throw new runtime.RequiredError("transactionId", "Required parameter requestParameters.transactionId was null or undefined when calling getPartialTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/partial/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    getPartialTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPartialTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    getPartialTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionIds === null ||
                requestParameters.transactionIds === undefined) {
                throw new runtime.RequiredError("transactionIds", "Required parameter requestParameters.transactionIds was null or undefined when calling getPartialTransactions.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions/partial`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionIdsToJSON)(requestParameters.transactionIds),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TransactionInfoDTOFromJSON));
        });
    }
    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    getPartialTransactions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPartialTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    getUnconfirmedTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionId === null ||
                requestParameters.transactionId === undefined) {
                throw new runtime.RequiredError("transactionId", "Required parameter requestParameters.transactionId was null or undefined when calling getUnconfirmedTransaction.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/unconfirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    getUnconfirmedTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUnconfirmedTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    getUnconfirmedTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionIds === null ||
                requestParameters.transactionIds === undefined) {
                throw new runtime.RequiredError("transactionIds", "Required parameter requestParameters.transactionIds was null or undefined when calling getUnconfirmedTransactions.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactions/unconfirmed`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionIdsToJSON)(requestParameters.transactionIds),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TransactionInfoDTOFromJSON));
        });
    }
    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    getUnconfirmedTransactions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUnconfirmedTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time.
     * Search confirmed transactions
     */
    searchConfirmedTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.address !== undefined) {
                queryParameters["address"] = requestParameters.address;
            }
            if (requestParameters.recipientAddress !== undefined) {
                queryParameters["recipientAddress"] = requestParameters.recipientAddress;
            }
            if (requestParameters.signerPublicKey !== undefined) {
                queryParameters["signerPublicKey"] = requestParameters.signerPublicKey;
            }
            if (requestParameters.height !== undefined) {
                queryParameters["height"] = requestParameters.height;
            }
            if (requestParameters.fromHeight !== undefined) {
                queryParameters["fromHeight"] = requestParameters.fromHeight;
            }
            if (requestParameters.toHeight !== undefined) {
                queryParameters["toHeight"] = requestParameters.toHeight;
            }
            if (requestParameters.fromTransferAmount !== undefined) {
                queryParameters["fromTransferAmount"] =
                    requestParameters.fromTransferAmount;
            }
            if (requestParameters.toTransferAmount !== undefined) {
                queryParameters["toTransferAmount"] = requestParameters.toTransferAmount;
            }
            if (requestParameters.type) {
                queryParameters["type"] = requestParameters.type;
            }
            if (requestParameters.embedded !== undefined) {
                queryParameters["embedded"] = requestParameters.embedded;
            }
            if (requestParameters.transferMosaicId !== undefined) {
                queryParameters["transferMosaicId"] = requestParameters.transferMosaicId;
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/confirmed`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionPageFromJSON)(jsonValue));
        });
    }
    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time.
     * Search confirmed transactions
     */
    searchConfirmedTransactions(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchConfirmedTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    searchPartialTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.address !== undefined) {
                queryParameters["address"] = requestParameters.address;
            }
            if (requestParameters.recipientAddress !== undefined) {
                queryParameters["recipientAddress"] = requestParameters.recipientAddress;
            }
            if (requestParameters.signerPublicKey !== undefined) {
                queryParameters["signerPublicKey"] = requestParameters.signerPublicKey;
            }
            if (requestParameters.height !== undefined) {
                queryParameters["height"] = requestParameters.height;
            }
            if (requestParameters.fromHeight !== undefined) {
                queryParameters["fromHeight"] = requestParameters.fromHeight;
            }
            if (requestParameters.toHeight !== undefined) {
                queryParameters["toHeight"] = requestParameters.toHeight;
            }
            if (requestParameters.fromTransferAmount !== undefined) {
                queryParameters["fromTransferAmount"] =
                    requestParameters.fromTransferAmount;
            }
            if (requestParameters.toTransferAmount !== undefined) {
                queryParameters["toTransferAmount"] = requestParameters.toTransferAmount;
            }
            if (requestParameters.type) {
                queryParameters["type"] = requestParameters.type;
            }
            if (requestParameters.embedded !== undefined) {
                queryParameters["embedded"] = requestParameters.embedded;
            }
            if (requestParameters.transferMosaicId !== undefined) {
                queryParameters["transferMosaicId"] = requestParameters.transferMosaicId;
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/partial`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionPageFromJSON)(jsonValue));
        });
    }
    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    searchPartialTransactions(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchPartialTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    searchUnconfirmedTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.address !== undefined) {
                queryParameters["address"] = requestParameters.address;
            }
            if (requestParameters.recipientAddress !== undefined) {
                queryParameters["recipientAddress"] = requestParameters.recipientAddress;
            }
            if (requestParameters.signerPublicKey !== undefined) {
                queryParameters["signerPublicKey"] = requestParameters.signerPublicKey;
            }
            if (requestParameters.height !== undefined) {
                queryParameters["height"] = requestParameters.height;
            }
            if (requestParameters.fromHeight !== undefined) {
                queryParameters["fromHeight"] = requestParameters.fromHeight;
            }
            if (requestParameters.toHeight !== undefined) {
                queryParameters["toHeight"] = requestParameters.toHeight;
            }
            if (requestParameters.fromTransferAmount !== undefined) {
                queryParameters["fromTransferAmount"] =
                    requestParameters.fromTransferAmount;
            }
            if (requestParameters.toTransferAmount !== undefined) {
                queryParameters["toTransferAmount"] = requestParameters.toTransferAmount;
            }
            if (requestParameters.type) {
                queryParameters["type"] = requestParameters.type;
            }
            if (requestParameters.embedded !== undefined) {
                queryParameters["embedded"] = requestParameters.embedded;
            }
            if (requestParameters.transferMosaicId !== undefined) {
                queryParameters["transferMosaicId"] = requestParameters.transferMosaicId;
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactions/unconfirmed`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionPageFromJSON)(jsonValue));
        });
    }
    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    searchUnconfirmedTransactions(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchUnconfirmedTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TransactionRoutesApi = TransactionRoutesApi;
