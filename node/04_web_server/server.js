var express = require("express")
var app = express()


function displayResult(req, res) {
	res.send("Hello Express!")
}

function displayAbout(req, res) {
	res.send("About Us")
}


app.listen(3000)
app.get("/about", displayAbout)
app.get("/", displayResult)
