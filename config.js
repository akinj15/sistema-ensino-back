"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var config = {
    db: {
        dbUrl: process.env.DATABASE_URL,
        tokenSecret: process.env.TOKEN_SECRET,
        tokenExpiration: process.env.TOKEN_EXPIRATION,
    }
};
exports.default = config;
