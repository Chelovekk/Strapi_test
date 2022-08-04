"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (policyContext, config, { strapi }) => {
    // console.log(config, strapi);
    if (policyContext.state.user) {
        return true;
    }
    return true;
};
