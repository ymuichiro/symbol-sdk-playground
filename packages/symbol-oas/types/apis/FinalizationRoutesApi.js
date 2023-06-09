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
exports.FinalizationRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class FinalizationRoutesApi extends runtime.BaseAPI {
    /**
     * Gets finalization proof for the greatest height associated with the given epoch.
     * Get finalization proof
     */
    getFinalizationProofAtEpochRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.epoch === null || requestParameters.epoch === undefined) {
                throw new runtime.RequiredError('epoch', 'Required parameter requestParameters.epoch was null or undefined when calling getFinalizationProofAtEpoch.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/finalization/proof/epoch/{epoch}`.replace(`{${"epoch"}}`, encodeURIComponent(String(requestParameters.epoch))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FinalizationProofDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets finalization proof for the greatest height associated with the given epoch.
     * Get finalization proof
     */
    getFinalizationProofAtEpoch(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFinalizationProofAtEpochRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets finalization proof at the given height.
     * Get finalization proof
     */
    getFinalizationProofAtHeightRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.height === null || requestParameters.height === undefined) {
                throw new runtime.RequiredError('height', 'Required parameter requestParameters.height was null or undefined when calling getFinalizationProofAtHeight.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/finalization/proof/height/{height}`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FinalizationProofDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets finalization proof at the given height.
     * Get finalization proof
     */
    getFinalizationProofAtHeight(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFinalizationProofAtHeightRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.FinalizationRoutesApi = FinalizationRoutesApi;
