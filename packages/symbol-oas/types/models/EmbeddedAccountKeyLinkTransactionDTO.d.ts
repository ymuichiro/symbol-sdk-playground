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
import type { LinkActionEnum } from "./LinkActionEnum";
import type { NetworkTypeEnum } from "./NetworkTypeEnum";
/**
 *
 * @export
 * @interface EmbeddedAccountKeyLinkTransactionDTO
 */
export interface EmbeddedAccountKeyLinkTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    type: number;
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     *
     * @type {LinkActionEnum}
     * @memberof EmbeddedAccountKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}
/**
 * Check if a given object implements the EmbeddedAccountKeyLinkTransactionDTO interface.
 */
export declare function instanceOfEmbeddedAccountKeyLinkTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSON(json: any): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOToJSON(value?: EmbeddedAccountKeyLinkTransactionDTO | null): any;
