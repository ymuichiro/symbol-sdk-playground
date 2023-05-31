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
import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
/**
 *
 * @export
 * @interface MosaicGlobalRestrictionEntryRestrictionDTO
 */
export interface MosaicGlobalRestrictionEntryRestrictionDTO {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionEntryRestrictionDTO
     */
    referenceMosaicId: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicGlobalRestrictionEntryRestrictionDTO
     */
    restrictionValue: string;
    /**
     *
     * @type {MosaicRestrictionTypeEnum}
     * @memberof MosaicGlobalRestrictionEntryRestrictionDTO
     */
    restrictionType: MosaicRestrictionTypeEnum;
}
/**
 * Check if a given object implements the MosaicGlobalRestrictionEntryRestrictionDTO interface.
 */
export declare function instanceOfMosaicGlobalRestrictionEntryRestrictionDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOFromJSON(json: any): MosaicGlobalRestrictionEntryRestrictionDTO;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryRestrictionDTO;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOToJSON(value?: MosaicGlobalRestrictionEntryRestrictionDTO | null): any;
