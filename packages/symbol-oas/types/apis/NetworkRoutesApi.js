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
exports.NetworkRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class NetworkRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the content from a catapult-server network configuration file (resources/config-network.properties). To enable this feature, the REST setting \"network.propertiesFilePath\" must define where the file is located. This is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
     * Get the network properties
     */
    getNetworkPropertiesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/network/properties`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NetworkConfigurationDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the content from a catapult-server network configuration file (resources/config-network.properties). To enable this feature, the REST setting \"network.propertiesFilePath\" must define where the file is located. This is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
     * Get the network properties
     */
    getNetworkProperties(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNetworkPropertiesRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the current network type.
     * Get the current network type of the chain
     */
    getNetworkTypeRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/network`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NetworkTypeDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the current network type.
     * Get the current network type of the chain
     */
    getNetworkType(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNetworkTypeRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the estimated effective rental fees for namespaces and mosaics. This endpoint is only available if the REST instance has access to catapult-server ``resources/config-network.properties`` file. To activate this feature, add the setting \"network.propertiesFilePath\" in the configuration file (rest/resources/rest.json).
     * Get rental fees information
     */
    getRentalFeesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/network/fees/rental`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.RentalFeesDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the estimated effective rental fees for namespaces and mosaics. This endpoint is only available if the REST instance has access to catapult-server ``resources/config-network.properties`` file. To activate this feature, add the setting \"network.propertiesFilePath\" in the configuration file (rest/resources/rest.json).
     * Get rental fees information
     */
    getRentalFees(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRentalFeesRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the average, median, highest and lower fee multiplier over the last \"numBlocksTransactionFeeStats\". The setting \"numBlocksTransactionFeeStats\" is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
     * Get transaction fees information
     */
    getTransactionFeesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/network/fees/transaction`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionFeesDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns the average, median, highest and lower fee multiplier over the last \"numBlocksTransactionFeeStats\". The setting \"numBlocksTransactionFeeStats\" is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
     * Get transaction fees information
     */
    getTransactionFees(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransactionFeesRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.NetworkRoutesApi = NetworkRoutesApi;
