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
import type { MetadataInfoDTO } from "./MetadataInfoDTO";
import type { Pagination } from "./Pagination";
/**
 *
 * @export
 * @interface MetadataPage
 */
export interface MetadataPage {
    /**
     * Array of metadata entries.
     * @type {Array<MetadataInfoDTO>}
     * @memberof MetadataPage
     */
    data: Array<MetadataInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof MetadataPage
     */
    pagination: Pagination;
}
/**
 * Check if a given object implements the MetadataPage interface.
 */
export declare function instanceOfMetadataPage(value: object): boolean;
export declare function MetadataPageFromJSON(json: any): MetadataPage;
export declare function MetadataPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataPage;
export declare function MetadataPageToJSON(value?: MetadataPage | null): any;
