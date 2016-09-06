var request = require('request')

module.exports = function (callback){
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
