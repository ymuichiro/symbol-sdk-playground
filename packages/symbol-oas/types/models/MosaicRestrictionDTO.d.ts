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
 * Generic Mosaic Restriction
 * @export
 * @interface MosaicRestrictionDTO
 */
export interface MosaicRestrictionDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof MosaicRestrictionDTO
     */
    id: string;
    /**
     *
     * @type {MosaicGlobalRestrictionEntryWrapperDTO}
     * @memberof MosaicRestrictionDTO
     */
    mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTO;
}
/**
 * Check if a given object implements the MosaicRestrictionDTO interface.
 */
export declare function instanceOfMosaicRestrictionDTO(value: object): boolean;
export declare function MosaicRestrictionDTOFromJSON(json: any): MosaicRestrictionDTO;
export declare function MosaicRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionDTO;
export declare function MosaicRestrictionDTOToJSON(value?: MosaicRestrictionDTO | null): any;
