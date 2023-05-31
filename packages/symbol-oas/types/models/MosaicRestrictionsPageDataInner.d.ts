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
import type { MosaicGlobalRestrictionEntryWrapperDTO } from './MosaicGlobalRestrictionEntryWrapperDTO';
/**
 *
 * @export
 * @interface MosaicRestrictionsPageDataInner
 */
export interface MosaicRestrictionsPageDataInner {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof MosaicRestrictionsPageDataInner
     */
    id: string;
    /**
     *
     * @type {MosaicGlobalRestrictionEntryWrapperDTO}
     * @memberof MosaicRestrictionsPageDataInner
     */
    mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTO;
}
/**
 * Check if a given object implements the MosaicRestrictionsPageDataInner interface.
 */
export declare function instanceOfMosaicRestrictionsPageDataInner(value: object): boolean;
export declare function MosaicRestrictionsPageDataInnerFromJSON(json: any): MosaicRestrictionsPageDataInner;
export declare function MosaicRestrictionsPageDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionsPageDataInner;
export declare function MosaicRestrictionsPageDataInnerToJSON(value?: MosaicRestrictionsPageDataInner | null): any;
