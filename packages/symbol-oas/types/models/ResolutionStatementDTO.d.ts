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
import type { ResolutionEntryDTO } from "./ResolutionEntryDTO";
import type { ResolutionStatementDTOUnresolved } from "./ResolutionStatementDTOUnresolved";
/**
 *
 * @export
 * @interface ResolutionStatementDTO
 */
export interface ResolutionStatementDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof ResolutionStatementDTO
     */
    height: string;
    /**
     *
     * @type {ResolutionStatementDTOUnresolved}
     * @memberof ResolutionStatementDTO
     */
    unresolved: ResolutionStatementDTOUnresolved;
    /**
     * Array of resolution entries linked to the unresolved namespaceId.
     * It is an array instead of a single resolution entry since
     * within one block the resolution might change for different sources due to alias related transactions.
     * @type {Array<ResolutionEntryDTO>}
     * @memberof ResolutionStatementDTO
     */
    resolutionEntries: Array<ResolutionEntryDTO>;
}
/**
 * Check if a given object implements the ResolutionStatementDTO interface.
 */
export declare function instanceOfResolutionStatementDTO(value: object): boolean;
export declare function ResolutionStatementDTOFromJSON(json: any): ResolutionStatementDTO;
export declare function ResolutionStatementDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementDTO;
export declare function ResolutionStatementDTOToJSON(value?: ResolutionStatementDTO | null): any;
