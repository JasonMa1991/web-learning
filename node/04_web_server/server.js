var express = require("express")
var app = express()
var PORT = 3000

function displayAbout(req, res) {
	res.send("About Us")
}

function confirmStart(){
	console.log("Express server started on port " + PORT + "!")
}


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

app.use(middleware.logger)

app.get("/about", middleware.requireAuthentication, displayAbout)

app.use(express.static(__dirname + "/public"))

app.listen(PORT, confirmStart)
