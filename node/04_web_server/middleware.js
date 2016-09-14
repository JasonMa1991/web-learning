var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log("private route hit!")
		next()
	} ,
	logger: function (req, res, next) {
		var current_time = new Date()
		console.log("Request at " + current_time + ": " + req.method + " " + req.originalUrl)
		next()
	}
}

module.exports = middleware