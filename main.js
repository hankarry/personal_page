const url = require("url");
const fs = require("fs");
const http = require("http");
const ws = require("websocket");

const router = require("./module/router");
const apiroute = require("./api/api")
const server = require("./module/server");

const address = "127.0.0.1"
const port = 90;
server.serverStart(port, address);
server.useRoute(router);
server.useRoute(apiroute);
