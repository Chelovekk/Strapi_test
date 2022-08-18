"use strict";
/**
 * project router.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::project.project', {
    prefix: '',
    only: ['find', 'findOne'],
    except: [],
    config: {
        find: {
            auth: false,
            policies: ['api::project.test-policy'],
            middlewares: [],
        },
        findOne: {},
        create: {},
        update: {},
        delete: {},
    },
});
