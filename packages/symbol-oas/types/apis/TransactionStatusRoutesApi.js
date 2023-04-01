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
exports.TransactionStatusRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class TransactionStatusRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the transaction status for a given hash.
     * Get transaction status
     */
    getTransactionStatusRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hash === null ||
                requestParameters.hash === undefined) {
                throw new runtime.RequiredError("hash", "Required parameter requestParameters.hash was null or undefined when calling getTransactionStatus.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/transactionStatus/{hash}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionStatusDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the transaction status for a given hash.
     * Get transaction status
     */
    getTransactionStatus(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransactionStatusRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * Get transaction statuses
     */
    getTransactionStatusesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionHashes === null ||
                requestParameters.transactionHashes === undefined) {
                throw new runtime.RequiredError("transactionHashes", "Required parameter requestParameters.transactionHashes was null or undefined when calling getTransactionStatuses.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/transactionStatus`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TransactionHashesToJSON)(requestParameters.transactionHashes),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TransactionStatusDTOFromJSON));
        });
    }
    /**
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * Get transaction statuses
     */
    getTransactionStatuses(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransactionStatusesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TransactionStatusRoutesApi = TransactionStatusRoutesApi;
