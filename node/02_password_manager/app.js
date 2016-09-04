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
			}).help("help");
		}
	).help("help")
	.argv


function createAccount(name, username, password) {
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

	storage.setItemSync('accounts',accounts);

	return new_account
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

var command = argv._[0]

if (command === "create") {
	if (typeof argv.name === "string" && typeof argv.username === "string" && typeof argv.password === "string") {
		createAccount(argv.name, argv.username, argv.password)
	}
	else {
		console.log( "Error: arguments must be strings!" )
	}
}

if (command === "get") {
	if (typeof argv.name === "string") {
		console.log( getAccount(argv.name) )
	}
	else {
		console.log( "Error: arguments must be strings!" )
	}
}