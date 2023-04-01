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
/**
 *
 * @export
 * @interface MosaicAddressRestrictionEntryDTO
 */
export interface MosaicAddressRestrictionEntryDTO {
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicAddressRestrictionEntryDTO
     */
    key: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicAddressRestrictionEntryDTO
     */
    value: string;
}
/**
 * Check if a given object implements the MosaicAddressRestrictionEntryDTO interface.
 */
export declare function instanceOfMosaicAddressRestrictionEntryDTO(value: object): boolean;
export declare function MosaicAddressRestrictionEntryDTOFromJSON(json: any): MosaicAddressRestrictionEntryDTO;
export declare function MosaicAddressRestrictionEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionEntryDTO;
export declare function MosaicAddressRestrictionEntryDTOToJSON(value?: MosaicAddressRestrictionEntryDTO | null): any;
