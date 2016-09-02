console.log("starting password manager")

var storage = require("node-persist")
storage.initSync()

// string: account.name
// string: account.username
// string: account.password
function createAccount(name, username, password) {
	if (typeof name === "string" && typeof username === "string" && typeof password === "string") {
		var new_account = {
			  "name": name
			, "username": username
			, "password": password
		}

		var accounts = storage.getItemSync("accounts")
		if (typeof accounts === "undefined") {
			accounts = []
		}

		accounts.push(new_account)

		return new_account
	}
	else {
		return "Error: inputs are not strings"
	}
}

function getAccount(account_name) {
	if (typeof account_name === "string") {
		var accounts = storage.getItemSync("accounts")

		var num_accounts = accounts.length
		for (var i = 0; i < num_accounts; i++){
			if (accounts[i].name === account_name) {
				return accounts[i]
			}
		}
	}
	else {
		return "Error: account_name not a string"
	}
}

createAccount("facebook", "Jason", "Pass-you-shall-not")

console.log( getAccount("facebook") )