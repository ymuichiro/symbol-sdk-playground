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
import type { MosaicSupplyChangeActionEnum } from "./MosaicSupplyChangeActionEnum";
/**
 *
 * @export
 * @interface MosaicSupplyChangeTransactionBodyDTO
 */
export interface MosaicSupplyChangeTransactionBodyDTO {
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionBodyDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicSupplyChangeTransactionBodyDTO
     */
    delta: string;
    /**
     *
     * @type {MosaicSupplyChangeActionEnum}
     * @memberof MosaicSupplyChangeTransactionBodyDTO
     */
    action: MosaicSupplyChangeActionEnum;
}
/**
 * Check if a given object implements the MosaicSupplyChangeTransactionBodyDTO interface.
 */
export declare function instanceOfMosaicSupplyChangeTransactionBodyDTO(value: object): boolean;
export declare function MosaicSupplyChangeTransactionBodyDTOFromJSON(json: any): MosaicSupplyChangeTransactionBodyDTO;
export declare function MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeTransactionBodyDTO;
export declare function MosaicSupplyChangeTransactionBodyDTOToJSON(value?: MosaicSupplyChangeTransactionBodyDTO | null): any;