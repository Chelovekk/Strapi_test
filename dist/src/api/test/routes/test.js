"use strict";
/**
 * test router.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::test.test', {
    only: ['find', 'findOne'],
    config: {
        find: {
            auth: false,
            middlewares: ['api::test.change-smth'],
            policies: ['is-user'],
        }
    }
});
