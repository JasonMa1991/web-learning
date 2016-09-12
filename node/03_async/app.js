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
	weather.get(location_obj, function (currentWeather){
		console.log(currentWeather)
	})
}
else {
	console.log("Location was not provided")

	location.get
		.then(
			function (location) {
				weather.get(location.city, function (currentWeather){
					console.log(currentWeather)
				})
			}
			, function (error) {
				console.log(error)
			}
		)
}