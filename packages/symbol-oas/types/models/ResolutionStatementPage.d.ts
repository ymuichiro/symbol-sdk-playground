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
import type { Pagination } from "./Pagination";
import type { ResolutionStatementInfoDTO } from "./ResolutionStatementInfoDTO";
/**
 *
 * @export
 * @interface ResolutionStatementPage
 */
export interface ResolutionStatementPage {
    /**
     * Array of transaction address resolution statements.
     * @type {Array<ResolutionStatementInfoDTO>}
     * @memberof ResolutionStatementPage
     */
    data: Array<ResolutionStatementInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof ResolutionStatementPage
     */
    pagination: Pagination;
}
/**
 * Check if a given object implements the ResolutionStatementPage interface.
 */
export declare function instanceOfResolutionStatementPage(value: object): boolean;
export declare function ResolutionStatementPageFromJSON(json: any): ResolutionStatementPage;
export declare function ResolutionStatementPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementPage;
export declare function ResolutionStatementPageToJSON(value?: ResolutionStatementPage | null): any;
