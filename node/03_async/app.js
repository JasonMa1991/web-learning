var weather = require("./weather.js")
var location = require("./location.js")
var argv = require('yargs')
	.options({
		  location: {
			  alias: 'l'
			, demand: false
			, description: "The location of where you want the weather"
			, type: "string"
		}
	})
	.help("help")
	.argv

// console.log(argv)

var location_obj = argv.location

if ( location_obj ) {
	console.log("Location was provided")

	weather.get(location_obj)
		.then(
			function (currentWeather) {
				console.log(currentWeather)
			}
		)
		.catch(
			function (error) {
				console.log(error)
			}
		)
}
else {
	console.log("Location was not provided")

	location.get()
		.then( weather.get )
		.then(
			function (currentWeather) {
				console.log(currentWeather)
			}
		)
		.catch(
			function (error) {
				console.log(error)
			}
		)
}