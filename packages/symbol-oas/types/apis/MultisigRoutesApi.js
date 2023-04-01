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
exports.MultisigRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class MultisigRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the multisig account information.
     * Get multisig account information
     */
    getAccountMultisigRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.address === null ||
                requestParameters.address === undefined) {
                throw new runtime.RequiredError("address", "Required parameter requestParameters.address was null or undefined when calling getAccountMultisig.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/account/{address}/multisig`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MultisigAccountInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the multisig account information.
     * Get multisig account information
     */
    getAccountMultisig(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountMultisigRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the multisig account graph.
     * Get multisig account graph information
     */
    getAccountMultisigGraphRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.address === null ||
                requestParameters.address === undefined) {
                throw new runtime.RequiredError("address", "Required parameter requestParameters.address was null or undefined when calling getAccountMultisigGraph.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/account/{address}/multisig/graph`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.MultisigAccountGraphInfoDTOFromJSON));
        });
    }
    /**
     * Returns the multisig account graph.
     * Get multisig account graph information
     */
    getAccountMultisigGraph(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountMultisigGraphRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the multisig account merkle information.
     * Get multisig account merkle information
     */
    getAccountMultisigMerkleRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.address === null ||
                requestParameters.address === undefined) {
                throw new runtime.RequiredError("address", "Required parameter requestParameters.address was null or undefined when calling getAccountMultisigMerkle.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/account/{address}/multisig/merkle`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleStateInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the multisig account merkle information.
     * Get multisig account merkle information
     */
    getAccountMultisigMerkle(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountMultisigMerkleRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.MultisigRoutesApi = MultisigRoutesApi;
