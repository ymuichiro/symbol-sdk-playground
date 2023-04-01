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
exports.HashLockRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class HashLockRoutesApi extends runtime.BaseAPI {
    /**
     * Gets the hash lock for a given hash.
     * Get hash lock information
     */
    getHashLockRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hash === null ||
                requestParameters.hash === undefined) {
                throw new runtime.RequiredError("hash", "Required parameter requestParameters.hash was null or undefined when calling getHashLock.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/lock/hash/{hash}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.HashLockInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the hash lock for a given hash.
     * Get hash lock information
     */
    getHashLock(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHashLockRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the hash lock merkle for a given hash.
     * Get hash lock merkle information
     */
    getHashLockMerkleRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hash === null ||
                requestParameters.hash === undefined) {
                throw new runtime.RequiredError("hash", "Required parameter requestParameters.hash was null or undefined when calling getHashLockMerkle.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/lock/hash/{hash}/merkle`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleStateInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the hash lock merkle for a given hash.
     * Get hash lock merkle information
     */
    getHashLockMerkle(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHashLockMerkleRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of hash locks.
     * Search hash lock entries
     */
    searchHashLockRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.address !== undefined) {
                queryParameters["address"] = requestParameters.address;
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
                path: `/lock/hash`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.HashLockPageFromJSON)(jsonValue));
        });
    }
    /**
     * Returns an array of hash locks.
     * Search hash lock entries
     */
    searchHashLock(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchHashLockRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.HashLockRoutesApi = HashLockRoutesApi;
