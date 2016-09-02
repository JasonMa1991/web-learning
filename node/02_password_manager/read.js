console.log("reading from node-persist")

var storage = require("node-persist")
storage.initSync()

var accounts = storage.getItemSync("accounts")
console.log(accounts)
