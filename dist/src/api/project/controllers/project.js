"use strict";
/**
 *  project controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::project.project', ({ strapi }) => ({
    async find(ctx) {
        console.log(this.findOne);
        console.log(this.this);
        console.log(typeof this);
        return await super.find(ctx);
    }
}));
