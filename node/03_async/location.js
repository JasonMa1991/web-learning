var request = require('request')

module.exports.get = getLocation

function getLocation(){
	return new Promise(function (resolve, reject) {

		request({
			  "url": 'http://ipinfo.io'
			, "json": true
		}, function (error, response, body) {
			if (error){
				reject("Unable to find current location")
			}
			else {
				resolve(body.city)
			}
		})
	})
}
