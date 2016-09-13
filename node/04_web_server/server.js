var express = require("express")
var app = express()

app.get("/", displayResult)

function displayResult(req, res) {
	res.send("Hello Express!")
}

app.listen(3000)
app.get("/about")