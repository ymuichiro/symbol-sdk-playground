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
import type { NetworkTypeEnum } from './NetworkTypeEnum';
/**
 *
 * @export
 * @interface EmbeddedTransactionDTO
 */
export interface EmbeddedTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedTransactionDTO
     */
    type: number;
}
/**
 * Check if a given object implements the EmbeddedTransactionDTO interface.
 */
export declare function instanceOfEmbeddedTransactionDTO(value: object): boolean;
export declare function EmbeddedTransactionDTOFromJSON(json: any): EmbeddedTransactionDTO;
export declare function EmbeddedTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionDTO;
export declare function EmbeddedTransactionDTOToJSON(value?: EmbeddedTransactionDTO | null): any;
