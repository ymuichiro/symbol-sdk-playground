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
import * as runtime from '../runtime';
import type { Order, ReceiptTypeEnum, ResolutionStatementPage, TransactionStatementPage } from '../models';
export interface SearchAddressResolutionStatementsRequest {
    height?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchMosaicResolutionStatementsRequest {
    height?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchReceiptsRequest {
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    receiptType?: Array<ReceiptTypeEnum>;
    recipientAddress?: string;
    senderAddress?: string;
    targetAddress?: string;
    artifactId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
/**
 *
 */
export declare class ReceiptRoutesApi extends runtime.BaseAPI {
    /**
     * Gets an array of address resolution statements.
     * Get receipts address resolution statements
     */
    searchAddressResolutionStatementsRaw(requestParameters: SearchAddressResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolutionStatementPage>>;
    /**
     * Gets an array of address resolution statements.
     * Get receipts address resolution statements
     */
    searchAddressResolutionStatements(requestParameters?: SearchAddressResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolutionStatementPage>;
    /**
     * Gets an array of mosaic resolution statements.
     * Get receipts mosaic resolution statements
     */
    searchMosaicResolutionStatementsRaw(requestParameters: SearchMosaicResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolutionStatementPage>>;
    /**
     * Gets an array of mosaic resolution statements.
     * Get receipts mosaic resolution statements
     */
    searchMosaicResolutionStatements(requestParameters?: SearchMosaicResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolutionStatementPage>;
    /**
     * Gets an array of transaction statements.
     * Search transaction statements
     */
    searchReceiptsRaw(requestParameters: SearchReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionStatementPage>>;
    /**
     * Gets an array of transaction statements.
     * Search transaction statements
     */
    searchReceipts(requestParameters?: SearchReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionStatementPage>;
}
