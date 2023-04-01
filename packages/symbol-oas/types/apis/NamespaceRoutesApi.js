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
exports.NamespaceRoutesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class NamespaceRoutesApi extends runtime.BaseAPI {
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNamesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.addresses === null ||
                requestParameters.addresses === undefined) {
                throw new runtime.RequiredError("addresses", "Required parameter requestParameters.addresses was null or undefined when calling getAccountsNames.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/namespaces/account/names`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AddressesToJSON)(requestParameters.addresses),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountsNamesDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNames(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountsNamesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNamesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.mosaicIds === null ||
                requestParameters.mosaicIds === undefined) {
                throw new runtime.RequiredError("mosaicIds", "Required parameter requestParameters.mosaicIds was null or undefined when calling getMosaicsNames.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/namespaces/mosaic/names`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.MosaicIdsToJSON)(requestParameters.mosaicIds),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MosaicsNamesDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNames(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMosaicsNamesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespaceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceId === null ||
                requestParameters.namespaceId === undefined) {
                throw new runtime.RequiredError("namespaceId", "Required parameter requestParameters.namespaceId was null or undefined when calling getNamespace.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/namespaces/{namespaceId}`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NamespaceInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespace(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespaceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkleRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceId === null ||
                requestParameters.namespaceId === undefined) {
                throw new runtime.RequiredError("namespaceId", "Required parameter requestParameters.namespaceId was null or undefined when calling getNamespaceMerkle.");
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/namespaces/{namespaceId}/merkle`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MerkleStateInfoDTOFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkle(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespaceMerkleRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNamesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespaceIds === null ||
                requestParameters.namespaceIds === undefined) {
                throw new runtime.RequiredError("namespaceIds", "Required parameter requestParameters.namespaceIds was null or undefined when calling getNamespacesNames.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            const response = yield this.request({
                path: `/namespaces/names`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.NamespaceIdsToJSON)(requestParameters.namespaceIds),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.NamespaceNameDTOFromJSON));
        });
    }
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNames(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNamespacesNamesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespacesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.ownerAddress !== undefined) {
                queryParameters["ownerAddress"] = requestParameters.ownerAddress;
            }
            if (requestParameters.registrationType !== undefined) {
                queryParameters["registrationType"] = requestParameters.registrationType;
            }
            if (requestParameters.level0 !== undefined) {
                queryParameters["level0"] = requestParameters.level0;
            }
            if (requestParameters.aliasType !== undefined) {
                queryParameters["aliasType"] = requestParameters.aliasType;
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
                path: `/namespaces`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NamespacePageFromJSON)(jsonValue));
        });
    }
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespaces(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchNamespacesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.NamespaceRoutesApi = NamespaceRoutesApi;