var accounts = []

function deposit(account, amount) {
	account.balance += amount
}

function withdraw(account, amount) {
	account.balance -= amount
}

function getBalance(account) {
	return account.balance
}


function createAccount(username, balance) {
	if ( typeof username === "string" && typeof balance === "number"){
		var new_account = {
			  "username": username
			, "balance": balance
		}

		accounts.push(new_account)

		return new_account
	}
	else {
		return "Error: incorrect inputs"
	}
}

function getAccount(input_username) {
	var acc_2_get

	if (typeof input_username === "string") {
		accounts.forEach(
			function (account) {
				if (account.username === input_username) {
					acc_2_get = account
				}
			}
		)		
	}
	else {
		return "Error: did not input a string for a username"
	}

	return acc_2_get
}

createAccount("a", 1)
createAccount("b", 2)

console.log(accounts)

console.log( getAccount("a") )
console.log( getAccount(1) )
console.log( getAccount("c") )