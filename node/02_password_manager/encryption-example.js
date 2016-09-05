console.log("starting password manager")

var storage = require("node-persist")
storage.initSync()

var argv = require('yargs')
	.command(
		"create",
		"Creates an account and stores it",
		function(yargs) {
			yargs.options({
				  name: {
					  demand: true
					, alias: 'n'
					, description: "The name of the account (e.g. facebook)"
					, type: "string"
				}
				, username: {
					  demand: true
					, alias: 'u'
					, description: "The username for the account"
					, type: "string"
				}
				, password: {
					  demand: true
					, alias: 'p'
					, description: "The password for the account"
					, type: "string"
				}
				, master_password: {
					  demand: true
					, alias: 'm'
					, description: "The master password for this app"
					, type: "string"
				}
			}).help("help");
		}
	)
	.command(
		"get",
		"Greets the user",
		function(yargs) {
			yargs.options({
				  name: {
					  demand: true
					, alias: 'n'
					, description: "The name of the account (e.g. facebook)"
					, type: "string"
				}
				, master_password: {
					  demand: true
					, alias: 'm'
					, description: "The master password for this app"
					, type: "string"
				}
			}).help("help");
		}
	).help("help")
	.argv

var crypto = require('crypto-js')

function createAccount(name, username, password) {
	var accounts_with_master_key = storage.getItemSync("accounts_with_master_key")

	var encrypted_test = crypto.AES.encrypt("master_password_is_correct", argv.master_password)
	var accounts = []
	var accounts_index
	if (typeof accounts_with_master_key === "undefined"){
		accounts_with_master_key = []
	}
	else {
		var num_accounts = accounts.length
		for (var i = 0; i < num_accounts; i++){
			if (accounts_with_master_key[i].encrypted_test === encrypted_test){
				var bytes = crypto.AES.decrypt( accounts_with_master_key[i], argv.master_password )
				accounts = JSON.parse( bytes.toString(crypto.enc.Utf8) )
				accounts_index = i

				i = num_accounts
			}
		}
	}

	var new_account = {
		  "name": name
		, "username": username
		, "password": password
	}

	accounts.push(new_account)

	var encrypted_accounts_str = crypto.AES.encrypt( JSON.stringify(accounts), argv.master_password )
	// console.log(encrypted_accounts_str)
	var encrypted_accounts = {
		  "accounts": encrypted_accounts_str
		, "encrypted_test": encrypted_test
	}

	// var blah = crypto.AES.encrypt("master_password_is_correct", "test")

	// console.log(blah)

	// if (typeof accounts_index === "undefined") {
	// 	accounts_with_master_key.push( encrypted_accounts )
	// }
	// else {
	// 	accounts_with_master_key[accounts_index] = encrypted_accounts
	// }

	// console.log(accounts_with_master_key)

	// storage.setItemSync('accounts_with_master_key', accounts_with_master_key);

	// return new_account
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


var encrypted_msg = crypto.AES.encrypt("master_password_is_correct", "test")

console.log("Encrypted Message: " + encrypted_msg)

// var command = argv._[0]

// if (command === "create") {
// 	createAccount(argv.name, argv.username, argv.password)
// }

// if (command === "get") {
// 	console.log( getAccount(argv.name) )
// }