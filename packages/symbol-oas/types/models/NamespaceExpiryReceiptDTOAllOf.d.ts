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
 * @interface NamespaceExpiryReceiptDTOAllOf
 */
export interface NamespaceExpiryReceiptDTOAllOf {
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceExpiryReceiptDTOAllOf
     */
    artifactId: string;
}
/**
 * Check if a given object implements the NamespaceExpiryReceiptDTOAllOf interface.
 */
export declare function instanceOfNamespaceExpiryReceiptDTOAllOf(value: object): boolean;
export declare function NamespaceExpiryReceiptDTOAllOfFromJSON(json: any): NamespaceExpiryReceiptDTOAllOf;
export declare function NamespaceExpiryReceiptDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceExpiryReceiptDTOAllOf;
export declare function NamespaceExpiryReceiptDTOAllOfToJSON(value?: NamespaceExpiryReceiptDTOAllOf | null): any;