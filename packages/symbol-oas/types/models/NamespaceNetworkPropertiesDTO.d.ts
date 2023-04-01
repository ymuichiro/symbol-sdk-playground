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
 * @interface NamespaceNetworkPropertiesDTO
 */
export interface NamespaceNetworkPropertiesDTO {
    /**
     * Maximum namespace name size.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    maxNameSize?: string;
    /**
     * Maximum number of children for a root namespace.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    maxChildNamespaces?: string;
    /**
     * Maximum namespace depth.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    maxNamespaceDepth?: string;
    /**
     * Minimum namespace duration.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    minNamespaceDuration?: string;
    /**
     * Maximum namespace duration.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    maxNamespaceDuration?: string;
    /**
     * Grace period during which time only the previous owner can renew an expired namespace.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    namespaceGracePeriodDuration?: string;
    /**
     * Reserved root namespaces that cannot be claimed.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    reservedRootNamespaceNames?: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    namespaceRentalFeeSinkAddress?: string;
    /**
     * Root namespace rental fee per block.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    rootNamespaceRentalFeePerBlock?: string;
    /**
     * Child namespace rental fee.
     * @type {string}
     * @memberof NamespaceNetworkPropertiesDTO
     */
    childNamespaceRentalFee?: string;
}
/**
 * Check if a given object implements the NamespaceNetworkPropertiesDTO interface.
 */
export declare function instanceOfNamespaceNetworkPropertiesDTO(value: object): boolean;
export declare function NamespaceNetworkPropertiesDTOFromJSON(json: any): NamespaceNetworkPropertiesDTO;
export declare function NamespaceNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceNetworkPropertiesDTO;
export declare function NamespaceNetworkPropertiesDTOToJSON(value?: NamespaceNetworkPropertiesDTO | null): any;
