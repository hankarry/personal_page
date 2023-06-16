const url = require("url");
const mime = require("mime");
const fs = require("fs");
const path = require("path");
const log_write = require("./log");

function render(response, path, state = 200, type = "text/html") {
    response.writeHead(state, {
        "content-Type": type + ";charset=utf-8",
    })
    var data = fs.readFileSync(path);
    response.write(data);
    response.end();
}

const route = {
    "/favicon.ico": (request, response) => {
        render(response, "./static/favicon.ico", 200, "images/x-icon");
    },
    "/": (request, response) => {
        render(response, "./static/index.html");
    },
    "/index": (request, response) => {
        render(response, "./index.html");
    },
    "/login": (request, response) =>  {
        render(response, "./static/login.html");
    },
    // "/css/ttf/Alimama_ShuHeiTi_Bold.ttf": (request, response) => {
    //     var url_ = path.join(__dirname, "../static/css/ttf/Alimama_ShuHeiTi_Bold.ttf");
    //     response.writeHead(200, {
    //         "content-Type": "font/ttf;",
    //     })
    //     // var data = ;
    //     // response.write(data);
    //     response.end(fs.readFileSync(url_));
    //     log_write.log_write("字体文件发送:" + url_ + " 类型:" + "font/ttf");
    // },
    "/404": (request, response) => {
        var url_ = path.join(__dirname, "../static", request.url);
        if (fs.existsSync(url_) == true) {
            var type = mime.getType(url_);
            render(response, url_, 200, type);
            log_write.log_write("文件发送:" + url_ + " 类型:" + type);
        } else {
            render(response, "./static/404.html", 404);
            log_write.log_write("定向到404");
        }
    },
}

module.exports = route;
 