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
import type { ReceiptTypeEnum } from "./ReceiptTypeEnum";
/**
 *
 * @export
 * @interface ReceiptDTO
 */
export interface ReceiptDTO {
    /**
     * Version of the receipt.
     * @type {number}
     * @memberof ReceiptDTO
     */
    version: number;
    /**
     *
     * @type {ReceiptTypeEnum}
     * @memberof ReceiptDTO
     */
    type: ReceiptTypeEnum;
}
/**
 * Check if a given object implements the ReceiptDTO interface.
 */
export declare function instanceOfReceiptDTO(value: object): boolean;
export declare function ReceiptDTOFromJSON(json: any): ReceiptDTO;
export declare function ReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiptDTO;
export declare function ReceiptDTOToJSON(value?: ReceiptDTO | null): any;