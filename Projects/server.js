// server
var express = require('express');
var app = express();
var sever = app.listen(8080);
app.use(express.static('website'));
var require = require("request");
