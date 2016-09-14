var express = require("express")
var app = express()
var PORT = 3000

function displayAbout(req, res) {
	res.send("About Us")
}

function confirmStart(){
	console.log("Express server started on port " + PORT + "!")
}

var middleware = require("./middleware.js")

app.use(middleware.logger)

app.get("/about", middleware.requireAuthentication, displayAbout)

app.use(express.static(__dirname + "/public"))

app.listen(PORT, confirmStart)
