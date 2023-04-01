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
import type { StatementMetaDTO } from "./StatementMetaDTO";
import type { TransactionStatementDTO } from "./TransactionStatementDTO";
/**
 * Collection of receipts related to a transaction.
 * @export
 * @interface TransactionStatementInfoDTO
 */
export interface TransactionStatementInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof TransactionStatementInfoDTO
     */
    id: string;
    /**
     *
     * @type {StatementMetaDTO}
     * @memberof TransactionStatementInfoDTO
     */
    meta: StatementMetaDTO;
    /**
     *
     * @type {TransactionStatementDTO}
     * @memberof TransactionStatementInfoDTO
     */
    statement: TransactionStatementDTO;
}
/**
 * Check if a given object implements the TransactionStatementInfoDTO interface.
 */
export declare function instanceOfTransactionStatementInfoDTO(value: object): boolean;
export declare function TransactionStatementInfoDTOFromJSON(json: any): TransactionStatementInfoDTO;
export declare function TransactionStatementInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementInfoDTO;
export declare function TransactionStatementInfoDTOToJSON(value?: TransactionStatementInfoDTO | null): any;
