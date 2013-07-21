var kaiseki = new (require('kaiseki'))(process.env.PARSE_APPKEY, process.env.PARSE_APIKEY);

module.exports.setup = function(app) {
	app.get('/api/blogposts/:id', function(req, res) {
		kaiseki.getObject('BlogPost', req.params.id, function(err, response, body, success) {
			res.send(body);
		});
	});
};