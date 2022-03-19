var express = require("express");
var globalConfig = require("./config")
// var cookie = require("cookie-parser");
// var bodyParser = require("body-parser");
var app = new express();
app.use(express.static("./page"));
// app.use(cookie());
// app.use(bodyParser.json());//数据JSON类型
// app.use(bodyParser.urlencoded({ extended: false }));
app.listen(globalConfig.port, function() {
    console.log('服务器启动了！！！');
})

module.exports = app;