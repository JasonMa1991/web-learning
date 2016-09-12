// function doWork (data, callback){
// 	callback("done")
// }

// function doWorkPromise (data){
// 	return new Promise(function (resolve, reject) {
// 		reject({
// 			  "error": "Something is broken!"
// 			, "attribute": "blah"
// 		})
// 		setTimeout(function () {
// 			resolve("Everything worked!")
// 		}, 1000)
// 	})
// }

// doWorkPromise("Some data").then( 
// 	function (resolution){
// 		console.log(resolution)
// 	}
// 	, function (rejection) {
// 		console.log(rejection)
// 	}
// )


function getWeather(location) {
	var request = require("request")

	return new Promise(function (resolve, reject) {

		if (!location) {
			reject("No location provided")
		}

		else {
			var encoded_location = encodeURIComponent(location)
			var url = "http://api.openweathermap.org/data/2.5/weather?appid=b474c536d212283d111f85a47011acc4&q=" + encoded_location + "&units=metric"

			request({
				  "url": url
				, "json": true
			}, function getJSON(error, response, body) {
				if (error){
					reject("Unable to fetch weather.")
				}
				else if (body.cod !== 200){
					reject(body.message)
				}
				else {
					var city = body.name
					var temp = body.main.temp

					var weather = "It's " + temp + " in " + city
					resolve(weather)
				}
			})
		}
	})
}

// getWeather("").then(
// getWeather("waaaaaaaytoooo").then(
getWeather("auckland")
	.then(
	  function (currentWeather) {
	  	console.log("resolved")
	  	console.log(currentWeather)
	  }
		, function (error) {
	  	console.log("rejected")
			console.log(error)
		}
	)