console.log("starting password manager")

var storage = require("node-persist")
storage.initSync()

// storage.setItemSync(
// 	"accounts",
// 	[{
// 		  username: "Jason"
// 		, balance: 10
// 	}]
// )

var accounts = storage.getItemSync("accounts")

var new_account = {"username": "Mark", balance = 20}
accounts.push(new_account)