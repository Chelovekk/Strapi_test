"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = __importDefault(require("@strapi/strapi"));
(async () => {
    const app = await (0, strapi_1.default)({ distDir: './dist' });
    console.log(app);
    await app.start();
})();
