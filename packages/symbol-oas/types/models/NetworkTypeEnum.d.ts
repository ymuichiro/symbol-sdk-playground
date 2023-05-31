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
 * Network type:
 * * 0x68 (104 decimal) - Main network.
 * * 0x98 (152 decimal) - Test network.
 * @export
 */
export declare const NetworkTypeEnum: {
    readonly NUMBER_104: 104;
    readonly NUMBER_152: 152;
};
export type NetworkTypeEnum = typeof NetworkTypeEnum[keyof typeof NetworkTypeEnum];
export declare function NetworkTypeEnumFromJSON(json: any): NetworkTypeEnum;
export declare function NetworkTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkTypeEnum;
export declare function NetworkTypeEnumToJSON(value?: NetworkTypeEnum | null): any;
