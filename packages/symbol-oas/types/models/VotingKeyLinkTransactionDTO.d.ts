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
 * Transaction to associate a BLS public key with an account.
 * Required for node operators willing to vote finalized blocks.
 * @export
 * @interface VotingKeyLinkTransactionDTO
 */
export interface VotingKeyLinkTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof VotingKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    deadline: string;
    /**
     * 32 bytes voting public key.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    startEpoch: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    endEpoch: number;
    /**
     *
     * @type {LinkActionEnum}
     * @memberof VotingKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}
/**
 * Check if a given object implements the VotingKeyLinkTransactionDTO interface.
 */
export declare function instanceOfVotingKeyLinkTransactionDTO(value: object): boolean;
export declare function VotingKeyLinkTransactionDTOFromJSON(json: any): VotingKeyLinkTransactionDTO;
export declare function VotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VotingKeyLinkTransactionDTO;
export declare function VotingKeyLinkTransactionDTOToJSON(value?: VotingKeyLinkTransactionDTO | null): any;
