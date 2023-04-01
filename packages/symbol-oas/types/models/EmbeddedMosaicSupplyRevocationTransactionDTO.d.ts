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
 * @interface EmbeddedMosaicSupplyRevocationTransactionDTO
 */
export interface EmbeddedMosaicSupplyRevocationTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    sourceAddress: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedMosaicSupplyRevocationTransactionDTO
     */
    amount: string;
}
/**
 * Check if a given object implements the EmbeddedMosaicSupplyRevocationTransactionDTO interface.
 */
export declare function instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyRevocationTransactionDTO;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyRevocationTransactionDTO;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOToJSON(value?: EmbeddedMosaicSupplyRevocationTransactionDTO | null): any;
