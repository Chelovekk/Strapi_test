"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  test controller
 */
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::test.test', ({ strapi }) => ({
    async find(ctx) {
        strapi.service('apu::test.test');
        return await super.find(ctx);
    },
}));
