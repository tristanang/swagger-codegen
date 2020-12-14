/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The Client model module.
 * @module model/Client
 * @version 1.0.0
 */
export class Client {
  /**
   * Constructs a new <code>Client</code>.
   * @alias module:model/Client
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Client} obj Optional instance to populate.
   * @return {module:model/Client} The populated <code>Client</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Client();
      if (data.hasOwnProperty('client'))
        obj.client = ApiClient.convertToType(data['client'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} client
 */
Client.prototype.client = undefined;


