var request = require("request")

var url = "http://api.openweathermap.org/data/2.5/weather?appid=b474c536d212283d111f85a47011acc4&q=Whakapapa&units=metric"


module.exports = function (callback){
	var weather

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