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
 * @interface MetadataNetworkPropertiesDTO
 */
export interface MetadataNetworkPropertiesDTO {
    /**
     * Maximum metadata value size.
     * @type {string}
     * @memberof MetadataNetworkPropertiesDTO
     */
    maxValueSize?: string;
}
/**
 * Check if a given object implements the MetadataNetworkPropertiesDTO interface.
 */
export declare function instanceOfMetadataNetworkPropertiesDTO(value: object): boolean;
export declare function MetadataNetworkPropertiesDTOFromJSON(json: any): MetadataNetworkPropertiesDTO;
export declare function MetadataNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataNetworkPropertiesDTO;
export declare function MetadataNetworkPropertiesDTOToJSON(value?: MetadataNetworkPropertiesDTO | null): any;