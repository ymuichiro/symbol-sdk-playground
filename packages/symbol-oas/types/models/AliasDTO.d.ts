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
import type { AliasTypeEnum } from "./AliasTypeEnum";
/**
 *
 * @export
 * @interface AliasDTO
 */
export interface AliasDTO {
    /**
     *
     * @type {AliasTypeEnum}
     * @memberof AliasDTO
     */
    type: AliasTypeEnum;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof AliasDTO
     */
    mosaicId?: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AliasDTO
     */
    address?: string;
}
/**
 * Check if a given object implements the AliasDTO interface.
 */
export declare function instanceOfAliasDTO(value: object): boolean;
export declare function AliasDTOFromJSON(json: any): AliasDTO;
export declare function AliasDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasDTO;
export declare function AliasDTOToJSON(value?: AliasDTO | null): any;
