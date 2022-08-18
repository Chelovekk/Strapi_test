"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (policyContext, config, { strapi }) => {
    console.log('policy state', policyContext.state);
    console.log('policy state', config);
    if (policyContext.state.user) { // if a session is open
    }
    return true;
};
