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
 * @interface AccountKeyLinkNetworkPropertiesDTO
 */
export interface AccountKeyLinkNetworkPropertiesDTO {
    /**
     * to trigger plugin load
     * @type {string}
     * @memberof AccountKeyLinkNetworkPropertiesDTO
     */
    dummy?: string;
}
/**
 * Check if a given object implements the AccountKeyLinkNetworkPropertiesDTO interface.
 */
export declare function instanceOfAccountKeyLinkNetworkPropertiesDTO(value: object): boolean;
export declare function AccountKeyLinkNetworkPropertiesDTOFromJSON(json: any): AccountKeyLinkNetworkPropertiesDTO;
export declare function AccountKeyLinkNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyLinkNetworkPropertiesDTO;
export declare function AccountKeyLinkNetworkPropertiesDTOToJSON(value?: AccountKeyLinkNetworkPropertiesDTO | null): any;