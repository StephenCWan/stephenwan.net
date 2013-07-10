var express = require("express");
var request = require("request");
var app = express();
var path = require("path");

var port = process.env.PORT || 8000;

app.use(express.bodyParser());

app.use("/js", express.static(__dirname + "/../app/js"));
app.use("/img", express.static(__dirname + "/../app/img"));
app.use("/css", express.static(__dirname + "/../app/css"));
app.use("/partials", express.static(__dirname + "/../app/partials"));

var contactModule = require('./endpoints/contact.js');
contactModule.setup(app);

app.all("/*", function(req, res, next) {
	res.sendfile("index.html", { root: __dirname + "/../app" });
});

app.listen(port, "0.0.0.0", function() {
	console.log("Launching stephenwan.net on port " + port);
});

var startSelfPing = function(url) {
    setInterval(function() {
		request(url, function(error, response, body) {
			if (error || response.statusCode != 200) {
				console.error("failed to ping server");
			}
		});
	}, 3540000);
};

startSelfPing("http://beta.stephenwan.net");