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
import type { AccountRestrictionsInfoDTO } from "./AccountRestrictionsInfoDTO";
import type { Pagination } from "./Pagination";
/**
 *
 * @export
 * @interface AccountRestrictionsPage
 */
export interface AccountRestrictionsPage {
    /**
     * Array of account restrictions.
     * @type {Array<AccountRestrictionsInfoDTO>}
     * @memberof AccountRestrictionsPage
     */
    data: Array<AccountRestrictionsInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof AccountRestrictionsPage
     */
    pagination: Pagination;
}
/**
 * Check if a given object implements the AccountRestrictionsPage interface.
 */
export declare function instanceOfAccountRestrictionsPage(value: object): boolean;
export declare function AccountRestrictionsPageFromJSON(json: any): AccountRestrictionsPage;
export declare function AccountRestrictionsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsPage;
export declare function AccountRestrictionsPageToJSON(value?: AccountRestrictionsPage | null): any;
