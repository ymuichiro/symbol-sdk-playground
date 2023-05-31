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
import type { MerkleTreeBranchLinkDTO } from './MerkleTreeBranchLinkDTO';
import type { MerkleTreeNodeTypeEnum } from './MerkleTreeNodeTypeEnum';
/**
 *
 * @export
 * @interface MerkleStateInfoDTOTreeInner
 */
export interface MerkleStateInfoDTOTreeInner {
    /**
     *
     * @type {MerkleTreeNodeTypeEnum}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    type: MerkleTreeNodeTypeEnum;
    /**
     * Leaf path.
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    path: string;
    /**
     * Encoded leaf path.
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    encodedPath: string;
    /**
     * Nibble count.
     * @type {number}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    nibbleCount: number;
    /**
     * Branch link bitmask.
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    linkMask: string;
    /**
     * Branch links (max 16).
     * @type {Array<MerkleTreeBranchLinkDTO>}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    links: Array<MerkleTreeBranchLinkDTO>;
    /**
     *
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    branchHash: string;
    /**
     * Leaf value (sha256 hash).
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof MerkleStateInfoDTOTreeInner
     */
    leafHash: string;
}
/**
 * Check if a given object implements the MerkleStateInfoDTOTreeInner interface.
 */
export declare function instanceOfMerkleStateInfoDTOTreeInner(value: object): boolean;
export declare function MerkleStateInfoDTOTreeInnerFromJSON(json: any): MerkleStateInfoDTOTreeInner;
export declare function MerkleStateInfoDTOTreeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleStateInfoDTOTreeInner;
export declare function MerkleStateInfoDTOTreeInnerToJSON(value?: MerkleStateInfoDTOTreeInner | null): any;
