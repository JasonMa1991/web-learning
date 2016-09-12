var request = require("request")

module.exports.get = getWeather

function getWeather (location, callback){
	if (!location){
		callback("No location provided")
	}
	else {
		var encoded_location = encodeURIComponent(location)
		var url = "http://api.openweathermap.org/data/2.5/weather?appid=b474c536d212283d111f85a47011acc4&q=" + encoded_location + "&units=metric"

		request({
			  "url": url
			, "json": true
		}, function (error, response, body) {
			if (error){
				callback("Unable to fetch weather.")
			}
			else {
				var city = body.name
				var temp = body.main.temp

				var weather = "It's " + temp + " in " + city
				callback(weather)
			}
		})
	}
}