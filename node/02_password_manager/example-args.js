var argv = require('yargs').argv
console.log(argv)

var command = argv._[0]
var name = argv.name
var lastname = argv.lastname

names = ""
if (typeof name === "string") { 
	names += " " + name
}
if (typeof lastname === "string") { names += " " + lastname }
if (names === "") {names = " World"}

if (command === "hello") {
	console.log("Hello" + names)
}