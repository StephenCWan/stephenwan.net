module.exports.setup = function(app) {
	app.post('/api/contact', function(req, res) {
		if (!req.body.message || !req.body.email || !req.body.name) {
			res.send({ 'message' : 'invalid parameters' }, 400);
		} else {
			// req.body.email,
			// req.body.name,
			// req.body.message
		}
	});
};