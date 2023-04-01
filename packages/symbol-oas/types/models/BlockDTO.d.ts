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
 * @interface BlockDTO
 */
export interface BlockDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof BlockDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof BlockDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof BlockDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof BlockDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof BlockDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof BlockDTO
     */
    type: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof BlockDTO
     */
    height: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof BlockDTO
     */
    timestamp: string;
    /**
     * Determines how hard is to harvest a new block, based on previous blocks.
     * @type {string}
     * @memberof BlockDTO
     */
    difficulty: string;
    /**
     * 32-bytes VRF proof gamma.
     * @type {string}
     * @memberof BlockDTO
     */
    proofGamma: string;
    /**
     * 16-bytes VRF proof verification hash.
     * @type {string}
     * @memberof BlockDTO
     */
    proofVerificationHash: string;
    /**
     * 32-bytes VRF proof scalar.
     * @type {string}
     * @memberof BlockDTO
     */
    proofScalar: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTO
     */
    previousBlockHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTO
     */
    transactionsHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTO
     */
    receiptsHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTO
     */
    stateHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BlockDTO
     */
    beneficiaryAddress: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof BlockDTO
     */
    feeMultiplier: number;
}
/**
 * Check if a given object implements the BlockDTO interface.
 */
export declare function instanceOfBlockDTO(value: object): boolean;
export declare function BlockDTOFromJSON(json: any): BlockDTO;
export declare function BlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDTO;
export declare function BlockDTOToJSON(value?: BlockDTO | null): any;