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
 * @interface CosignatureDTO
 */
export interface CosignatureDTO {
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof CosignatureDTO
     */
    signature: string;
    /**
     * Cosignature version.
     * @type {string}
     * @memberof CosignatureDTO
     */
    version: string;
    /**
     * Public key.
     * @type {string}
     * @memberof CosignatureDTO
     */
    signerPublicKey: string;
}
/**
 * Check if a given object implements the CosignatureDTO interface.
 */
export declare function instanceOfCosignatureDTO(value: object): boolean;
export declare function CosignatureDTOFromJSON(json: any): CosignatureDTO;
export declare function CosignatureDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosignatureDTO;
export declare function CosignatureDTOToJSON(value?: CosignatureDTO | null): any;
