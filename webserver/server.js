var express = require("express");
var app = express();
var path = require("path");

var port = process.env.port | 8000;

app.use(express.static(path.join(__dirname + "/../app")));

app.listen(port, function() {
	console.log("launching stephenwan.net on port " + port);
});
