var express = require("express");
var app = express();
var path = require("path");

var port = process.env.PORT | 8000;

app.use(express.static(path.join(__dirname + "/../app")));

app.listen(port, "0.0.0.0", function() {
	console.log("Launching stephenwan.net on port " + port);
});
