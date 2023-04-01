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
 */
export declare const AccountOrderByEnum: {
    readonly Id: "id";
    readonly Balance: "balance";
};
export type AccountOrderByEnum = (typeof AccountOrderByEnum)[keyof typeof AccountOrderByEnum];
export declare function AccountOrderByEnumFromJSON(json: any): AccountOrderByEnum;
export declare function AccountOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOrderByEnum;
export declare function AccountOrderByEnumToJSON(value?: AccountOrderByEnum | null): any;
