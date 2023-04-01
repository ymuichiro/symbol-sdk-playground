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
import type { NodeHealthDTO } from "./NodeHealthDTO";
/**
 *
 * @export
 * @interface NodeHealthInfoDTO
 */
export interface NodeHealthInfoDTO {
    /**
     *
     * @type {NodeHealthDTO}
     * @memberof NodeHealthInfoDTO
     */
    status: NodeHealthDTO;
}
/**
 * Check if a given object implements the NodeHealthInfoDTO interface.
 */
export declare function instanceOfNodeHealthInfoDTO(value: object): boolean;
export declare function NodeHealthInfoDTOFromJSON(json: any): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOToJSON(value?: NodeHealthInfoDTO | null): any;
