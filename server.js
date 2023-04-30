"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var connect_1 = require("./src/database/connect");
var port = 3001;
var app = app_1.default;
(0, connect_1.default)();
app.listen(port, function () { return console.log("running at port: ", port); });
