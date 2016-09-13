var express = require("express")
var app = express()
var port = 3000

function displayAbout(req, res) {
	res.send("About Us")
}

function confirmStart(){
	console.log("Express server started on port " + port + "!")
}

app.get("/about", displayAbout)

app.use(express.static(__dirname + "/public"))

app.listen(port, confirmStart)
