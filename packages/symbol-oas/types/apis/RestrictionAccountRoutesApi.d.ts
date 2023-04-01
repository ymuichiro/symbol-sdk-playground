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
import type { AccountRestrictionsInfoDTO, AccountRestrictionsPage, MerkleStateInfoDTO, Order } from "../models";
export interface GetAccountRestrictionsRequest {
    address: string;
}
export interface GetAccountRestrictionsMerkleRequest {
    address: string;
}
export interface SearchAccountRestrictionsRequest {
    address?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
/**
 *
 */
export declare class RestrictionAccountRoutesApi extends runtime.BaseAPI {
    /**
     * Returns the account restrictions for a given address.
     * Get the account restrictions
     */
    getAccountRestrictionsRaw(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsInfoDTO>>;
    /**
     * Returns the account restrictions for a given address.
     * Get the account restrictions
     */
    getAccountRestrictions(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsInfoDTO>;
    /**
     * Returns the account restrictions merkle for a given address.
     * Get the account restrictions merkle
     */
    getAccountRestrictionsMerkleRaw(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    /**
     * Returns the account restrictions merkle for a given address.
     * Get the account restrictions merkle
     */
    getAccountRestrictionsMerkle(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    /**
     * Returns an array of account restrictions.
     * Search account restrictions
     */
    searchAccountRestrictionsRaw(requestParameters: SearchAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsPage>>;
    /**
     * Returns an array of account restrictions.
     * Search account restrictions
     */
    searchAccountRestrictions(requestParameters?: SearchAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsPage>;
}
