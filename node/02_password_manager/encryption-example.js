var crypto = require('crypto-js')

var secret_message = {
	  name: "Bond"
	, secretName: "007"
}
var secret_key = "Servian123"

var secret_str = JSON.stringify(secret_message)

var encrypted_msg = crypto.AES.encrypt(secret_str, secret_key)

console.log("Encrypted Message: " + encrypted_msg)

var bytes = crypto.AES.decrypt(encrypted_msg, secret_key)
var decrypted_msg = bytes.toString(crypto.enc.Utf8)

var secret_obj = JSON.parse(decrypted_msg)

console.log(bytes)
console.log(secret_obj.secretName)

