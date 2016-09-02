var argv = require('yargs')
	.command(
		"hello",
		"Greets the user",
		function(yargs) {
			yargs.options({
				  name: {
					  demand: true
					, alias: 'n'
					, description: "Your first name goes here"
				}
				, lastname: {
					  demand: true
					, alias: 'l'
					, description: "Your last name goes here"
				}
			}).help("help");
		}
	)
	.help("help")
	.argv
console.log(argv)

var command = argv._[0]
var name = argv.name
var lastname = argv.lastname

names = ""
if (typeof name === "string") { names += " " + name }
if (typeof lastname === "string") { names += " " + lastname }
if (names === "") {names = " World"}

if (command === "hello") {
	console.log("Hello" + names)
}