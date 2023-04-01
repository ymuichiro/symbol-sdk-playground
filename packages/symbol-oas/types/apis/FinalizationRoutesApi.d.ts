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
import type { FinalizationProofDTO } from "../models";
export interface GetFinalizationProofAtEpochRequest {
    epoch: number;
}
export interface GetFinalizationProofAtHeightRequest {
    height: string;
}
/**
 *
 */
export declare class FinalizationRoutesApi extends runtime.BaseAPI {
    /**
     * Gets finalization proof for the greatest height associated with the given epoch.
     * Get finalization proof
     */
    getFinalizationProofAtEpochRaw(requestParameters: GetFinalizationProofAtEpochRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinalizationProofDTO>>;
    /**
     * Gets finalization proof for the greatest height associated with the given epoch.
     * Get finalization proof
     */
    getFinalizationProofAtEpoch(requestParameters: GetFinalizationProofAtEpochRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinalizationProofDTO>;
    /**
     * Gets finalization proof at the given height.
     * Get finalization proof
     */
    getFinalizationProofAtHeightRaw(requestParameters: GetFinalizationProofAtHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinalizationProofDTO>>;
    /**
     * Gets finalization proof at the given height.
     * Get finalization proof
     */
    getFinalizationProofAtHeight(requestParameters: GetFinalizationProofAtHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinalizationProofDTO>;
}
