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
import type { NetworkTypeEnum } from "./NetworkTypeEnum";
/**
 *
 * @export
 * @interface EmbeddedMosaicAddressRestrictionTransactionDTO
 */
export interface EmbeddedMosaicAddressRestrictionTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    type: number;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    mosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    newRestrictionValue: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedMosaicAddressRestrictionTransactionDTO
     */
    targetAddress: string;
}
/**
 * Check if a given object implements the EmbeddedMosaicAddressRestrictionTransactionDTO interface.
 */
export declare function instanceOfEmbeddedMosaicAddressRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSON(json: any): EmbeddedMosaicAddressRestrictionTransactionDTO;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicAddressRestrictionTransactionDTO;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOToJSON(value?: EmbeddedMosaicAddressRestrictionTransactionDTO | null): any;
