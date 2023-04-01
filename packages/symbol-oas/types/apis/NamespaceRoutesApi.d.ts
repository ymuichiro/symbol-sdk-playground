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
import * as runtime from "../runtime";
import type { AccountsNamesDTO, Addresses, AliasTypeEnum, MerkleStateInfoDTO, MosaicIds, MosaicsNamesDTO, NamespaceIds, NamespaceInfoDTO, NamespaceNameDTO, NamespacePage, NamespaceRegistrationTypeEnum, Order } from "../models";
export interface GetAccountsNamesRequest {
    addresses: Addresses;
}
export interface GetMosaicsNamesRequest {
    mosaicIds: MosaicIds;
}
export interface GetNamespaceRequest {
    namespaceId: string;
}
export interface GetNamespaceMerkleRequest {
    namespaceId: string;
}
export interface GetNamespacesNamesRequest {
    namespaceIds: NamespaceIds;
}
export interface SearchNamespacesRequest {
    ownerAddress?: string;
    registrationType?: NamespaceRegistrationTypeEnum;
    level0?: string;
    aliasType?: AliasTypeEnum;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
/**
 *
 */
export declare class NamespaceRoutesApi extends runtime.BaseAPI {
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNamesRaw(requestParameters: GetAccountsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountsNamesDTO>>;
    /**
     * Returns friendly names for accounts.
     * Get readable names for a set of accountIds
     */
    getAccountsNames(requestParameters: GetAccountsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountsNamesDTO>;
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNamesRaw(requestParameters: GetMosaicsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicsNamesDTO>>;
    /**
     * Returns friendly names for mosaics.
     * Get readable names for a set of mosaics
     */
    getMosaicsNames(requestParameters: GetMosaicsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicsNamesDTO>;
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespaceRaw(requestParameters: GetNamespaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NamespaceInfoDTO>>;
    /**
     * Gets the namespace for a given namespace identifier.
     * Get namespace information
     */
    getNamespace(requestParameters: GetNamespaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NamespaceInfoDTO>;
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkleRaw(requestParameters: GetNamespaceMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    /**
     * Gets the namespace merkle for a given namespace identifier.
     * Get namespace merkle information
     */
    getNamespaceMerkle(requestParameters: GetNamespaceMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNamesRaw(requestParameters: GetNamespacesNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NamespaceNameDTO>>>;
    /**
     * Returns friendly names for namespaces.
     * Get readable names for a set of namespaces
     */
    getNamespacesNames(requestParameters: GetNamespacesNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NamespaceNameDTO>>;
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespacesRaw(requestParameters: SearchNamespacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NamespacePage>>;
    /**
     * Gets an array of namespaces.
     * Search namespaces
     */
    searchNamespaces(requestParameters?: SearchNamespacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NamespacePage>;
}
