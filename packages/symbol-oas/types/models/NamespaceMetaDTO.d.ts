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
/**
 *
 * @export
 * @interface NamespaceMetaDTO
 */
export interface NamespaceMetaDTO {
    /**
     * If true, the namespace is active.
     * @type {boolean}
     * @memberof NamespaceMetaDTO
     */
    active: boolean;
    /**
     *
     * @type {number}
     * @memberof NamespaceMetaDTO
     */
    index: number;
}
/**
 * Check if a given object implements the NamespaceMetaDTO interface.
 */
export declare function instanceOfNamespaceMetaDTO(value: object): boolean;
export declare function NamespaceMetaDTOFromJSON(json: any): NamespaceMetaDTO;
export declare function NamespaceMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetaDTO;
export declare function NamespaceMetaDTOToJSON(value?: NamespaceMetaDTO | null): any;
