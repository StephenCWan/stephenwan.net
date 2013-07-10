var mandrill = require('node-mandrill')('SMrRQRGqRDIL9u8d9VINEg');

module.exports.setup = function(app) {
	app.post('/api/contact', function(req, res) {
		if (!req.body.message || !req.body.email || !req.body.name) {
			res.send({ 'message' : 'invalid parameters' }, 400);
		} else {

			mandrill('/messages/send', {
				message: {
					from_email: req.body.email,
					from_name: req.body.name,
					to_email: [{ email: 'stephen@stephenwan.net', name: 'Stephen Wan' }],
					subject: "Website Contact Form: " + req.body.name,
					text: req.body.message
				}
			}, function(error, response) {
				console.log(error);
				console.log(response);
				if (error) {
					res.send({ 
						'message' : 'mandrill failed to send email',
						'error' : error 
					}, 400);
				} else {
					res.send({ 'message' : 'success', 'response' : response }, 200);
				}
			});
		}
	});
};