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
 * @interface TransactionIds
 */
export interface TransactionIds {
    /**
     * Array of transaction identifiers.
     * @type {Array<string>}
     * @memberof TransactionIds
     */
    transactionIds?: Array<string>;
}
/**
 * Check if a given object implements the TransactionIds interface.
 */
export declare function instanceOfTransactionIds(value: object): boolean;
export declare function TransactionIdsFromJSON(json: any): TransactionIds;
export declare function TransactionIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIds;
export declare function TransactionIdsToJSON(value?: TransactionIds | null): any;