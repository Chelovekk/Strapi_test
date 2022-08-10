"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    seo: {
        enabled: true,
    },
    upload: {
        config: {
            providerOptions: {
                sizeLimit: 1024 * 1024 // 256mb in bytes
            }
        }
    },
});
