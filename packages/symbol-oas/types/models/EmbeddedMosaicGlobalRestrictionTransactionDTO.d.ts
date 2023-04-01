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
import type { MosaicRestrictionTypeEnum } from "./MosaicRestrictionTypeEnum";
import type { NetworkTypeEnum } from "./NetworkTypeEnum";
/**
 *
 * @export
 * @interface EmbeddedMosaicGlobalRestrictionTransactionDTO
 */
export interface EmbeddedMosaicGlobalRestrictionTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    type: number;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    mosaicId: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    referenceMosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    newRestrictionValue: string;
    /**
     *
     * @type {MosaicRestrictionTypeEnum}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    previousRestrictionType: MosaicRestrictionTypeEnum;
    /**
     *
     * @type {MosaicRestrictionTypeEnum}
     * @memberof EmbeddedMosaicGlobalRestrictionTransactionDTO
     */
    newRestrictionType: MosaicRestrictionTypeEnum;
}
/**
 * Check if a given object implements the EmbeddedMosaicGlobalRestrictionTransactionDTO interface.
 */
export declare function instanceOfEmbeddedMosaicGlobalRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSON(json: any): EmbeddedMosaicGlobalRestrictionTransactionDTO;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicGlobalRestrictionTransactionDTO;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOToJSON(value?: EmbeddedMosaicGlobalRestrictionTransactionDTO | null): any;
