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
import type { EmbeddedTransactionInfoDTOTransaction } from "./EmbeddedTransactionInfoDTOTransaction";
import type { EmbeddedTransactionMetaDTO } from "./EmbeddedTransactionMetaDTO";
/**
 *
 * @export
 * @interface EmbeddedTransactionInfoDTO
 */
export interface EmbeddedTransactionInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTO
     */
    id: string;
    /**
     *
     * @type {EmbeddedTransactionMetaDTO}
     * @memberof EmbeddedTransactionInfoDTO
     */
    meta: EmbeddedTransactionMetaDTO;
    /**
     *
     * @type {EmbeddedTransactionInfoDTOTransaction}
     * @memberof EmbeddedTransactionInfoDTO
     */
    transaction: EmbeddedTransactionInfoDTOTransaction;
}
/**
 * Check if a given object implements the EmbeddedTransactionInfoDTO interface.
 */
export declare function instanceOfEmbeddedTransactionInfoDTO(value: object): boolean;
export declare function EmbeddedTransactionInfoDTOFromJSON(json: any): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOToJSON(value?: EmbeddedTransactionInfoDTO | null): any;
