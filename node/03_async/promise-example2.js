function getLocation () {
	return new Promise(function (resolve, reject) {
		resolve( "Auckland" )
	})
}

function getWeather(location) {
	return new Promise(function (resolve, reject) {
		console.log(location)
		resolve( "fake message in " + location )
	})
}

getLocation()
	.then( getWeather )
	.then(
		function (message) {
			console.log(message)
		}
	)