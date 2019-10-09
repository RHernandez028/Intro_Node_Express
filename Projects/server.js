// server
var express = require('express');
var app = express();
var sever = app.listen(8080);
//var fetch = require('node-fetch');
app.use(express.static('website'));

