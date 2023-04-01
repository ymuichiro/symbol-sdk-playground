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
exports.RestrictionMosaicRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class RestrictionMosaicRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the mosaic restrictions for a composite hash.
     * Get the mosaic restrictions
     */
    getMosaicRestrictionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.compositeHash === null ||
                requestParameters.compositeHash === undefined) {
                throw new runtime.RequiredError("compositeHash", "Required parameter requestParameters.compositeHash was null or undefined when calling getMosaicRestrictions.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/restrictions/mosaic/{compositeHash}`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MosaicRestrictionDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the mosaic restrictions for a composite hash.
     * Get the mosaic restrictions
     */
    getMosaicRestrictions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMosaicRestrictionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the mosaic restrictions merkle for a given composite hash.
     * Get the mosaic restrictions merkle
     */
    getMosaicRestrictionsMerkleRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.compositeHash === null ||
                requestParameters.compositeHash === undefined) {
                throw new runtime.RequiredError("compositeHash", "Required parameter requestParameters.compositeHash was null or undefined when calling getMosaicRestrictionsMerkle.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/restrictions/mosaic/{compositeHash}/merkle`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleStateInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the mosaic restrictions merkle for a given composite hash.
     * Get the mosaic restrictions merkle
     */
    getMosaicRestrictionsMerkle(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMosaicRestrictionsMerkleRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns an array of mosaic restrictions.
     * Search mosaic restrictions
     */
    searchMosaicRestrictionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.mosaicId !== undefined) {
                queryParameters["mosaicId"] = requestParameters.mosaicId;
            }
            if (requestParameters.entryType !== undefined) {
                queryParameters["entryType"] = requestParameters.entryType;
            }
            if (requestParameters.targetAddress !== undefined) {
                queryParameters["targetAddress"] = requestParameters.targetAddress;
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
                path: `/restrictions/mosaic`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MosaicRestrictionsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Returns an array of mosaic restrictions.
     * Search mosaic restrictions
     */
    searchMosaicRestrictions(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchMosaicRestrictionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.RestrictionMosaicRoutesApi = RestrictionMosaicRoutesApi;