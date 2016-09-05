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

function getAccounts(master_password) {
	var json_accounts_with_master_key = storage.getItemSync("accounts_with_master_key")
	// console.log(json_accounts_with_master_key)

	var accounts = []
	var accounts_index
	if (typeof json_accounts_with_master_key === "undefined"){
		accounts = []
	}
	else {
		var accounts_with_master_key = JSON.parse( json_accounts_with_master_key )
		// console.log(accounts_with_master_key[0])

		var num_accounts = accounts_with_master_key.length
		for (var i = 0; i < num_accounts; i++){
			var encrypted_test = accounts_with_master_key[i].encrypted_test
			// console.log( encrypted_test )
			var decrypted_test = crypto.AES.decrypt( accounts_with_master_key[i].encrypted_test, master_password ).toString(crypto.enc.Utf8)
			// console.log( decrypted_test )

			if ( decrypted_test === "master_password_is_correct"){
				var bytes = crypto.AES.decrypt( accounts_with_master_key[i].accounts, master_password )
				accounts = JSON.parse( bytes.toString(crypto.enc.Utf8) )
				// console.log(accounts)
				accounts_index = i

				i = num_accounts
			}
		}
	}

	return [accounts, accounts_index]
}

function saveAccounts(accounts, accounts_index, master_password) {
	var encrypted_accounts_str = crypto.AES.encrypt( JSON.stringify(accounts), argv.master_password ).toString()
	// console.log(encrypted_accounts_str)
	var encrypted_test = crypto.AES.encrypt("master_password_is_correct", master_password).toString()
	// console.log(encrypted_test)

	var encrypted_accounts = {
		  "accounts": encrypted_accounts_str
		, "encrypted_test": encrypted_test
	}
	// console.log(encrypted_accounts)

	var json_accounts_with_master_key = storage.getItemSync("accounts_with_master_key")
	// console.log(json_accounts_with_master_key)

	var accounts_with_master_key

	if (typeof json_accounts_with_master_key === "undefined") {
		accounts_with_master_key = [ encrypted_accounts ]
	}
	else {
		accounts_with_master_key = JSON.parse( json_accounts_with_master_key )
		accounts_with_master_key[accounts_index] = encrypted_accounts
	}

	var json_accounts_with_master_key = JSON.stringify( accounts_with_master_key ).toString()
	// console.log(json_accounts_with_master_key)

	storage.setItemSync('accounts_with_master_key', json_accounts_with_master_key )
}

function createAccount(name, username, password, master_password) {
	var accounts_with_index = getAccounts(master_password)
	var accounts = accounts_with_index[0]
	var accounts_index = accounts_with_index[1]

	var new_account = {
		  "name": name
		, "username": username
		, "password": password
	}

	accounts.push(new_account)

	saveAccounts(accounts, accounts_index, master_password)

	return new_account
}

function getAccount(account_name, master_password) {
	var accounts = getAccounts(master_password)[0]

	var num_accounts = accounts.length
	if (num_accounts === 0) {
		return "Error: no such master password found"
	}
	else {
		for (var i = 0; i < num_accounts; i++){
			if (accounts[i].name === account_name) {
				return accounts[i]
			}
		}
	}
	return "Error: no such account name found"
}


var command = argv._[0]

if (command === "create") {
	createAccount(argv.name, argv.username, argv.password, argv.master_password)
}

if (command === "get") {
	console.log( getAccount(argv.name, argv.master_password) )
}