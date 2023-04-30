"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./src/routes");
var cors = require("cors");
var app = express();
var allowedOrigins = [
    '*',
    'http://localhost:9001',
    'http://localhost:8080',
    'http://127.0.0.1:9001',
    'http://127.0.0.1:8080',
];
var options = {
    origin: allowedOrigins,
};
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes_1.default);
app.use(cors(options));
exports.default = app;
