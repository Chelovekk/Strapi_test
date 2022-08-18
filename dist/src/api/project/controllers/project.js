"use strict";
/**
 *  project controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
function populateAttribute({ components }) {
    if (components) {
        const populate = components.reduce((currentValue, current) => {
            return { ...currentValue, [current.split(".").pop()]: { populate: "*" } };
        }, {});
        return { populate };
    }
    return { populate: "*" };
}
exports.default = strapi_1.factories.createCoreController('api::project.project', ({ strapi }) => ({
    async find(ctx) {
        console.log(ctx.params);
        const { id } = ctx.params;
        const { query } = ctx;
        console.log(id, query);
        const projects = await strapi.db.query('api::project.project').findMany({
            populate: ['components::industries']
        });
        // const a = await strapi.query('api::project.project').find(ctx.params, {
        //   populate: ['components::industries']
        // })
        console.log(projects);
        console.log(super.find.toString());
        return await super.find(ctx);
    }
}));
