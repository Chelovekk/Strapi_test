"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx, next) => {
    console.log(ctx);
    console.log(typeof ctx, typeof next);
    // return next();
};
