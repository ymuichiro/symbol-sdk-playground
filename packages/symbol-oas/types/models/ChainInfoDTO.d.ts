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
import type { FinalizedBlockDTO } from "./FinalizedBlockDTO";
/**
 *
 * @export
 * @interface ChainInfoDTO
 */
export interface ChainInfoDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof ChainInfoDTO
     */
    height: string;
    /**
     * Score of the blockchain. During synchronization, nodes try to get the
     * blockchain with highest score in the network.
     * @type {string}
     * @memberof ChainInfoDTO
     */
    scoreHigh: string;
    /**
     * Score of the blockchain. During synchronization, nodes try to get the
     * blockchain with highest score in the network.
     * @type {string}
     * @memberof ChainInfoDTO
     */
    scoreLow: string;
    /**
     *
     * @type {FinalizedBlockDTO}
     * @memberof ChainInfoDTO
     */
    latestFinalizedBlock: FinalizedBlockDTO;
}
/**
 * Check if a given object implements the ChainInfoDTO interface.
 */
export declare function instanceOfChainInfoDTO(value: object): boolean;
export declare function ChainInfoDTOFromJSON(json: any): ChainInfoDTO;
export declare function ChainInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainInfoDTO;
export declare function ChainInfoDTOToJSON(value?: ChainInfoDTO | null): any;