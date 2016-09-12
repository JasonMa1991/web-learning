var request = require('request')

module.exports.get = getLocation

function getLocation(callback){
	request({
		  "url": 'http://ipinfo.io'
		, "json": true
	}, function (error, response, body) {
		if (error){
			callback()
		}
		else {
			callback(body)
		}
	})
}
