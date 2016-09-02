var accounts = []

function deposit(account, amount) {
	if (typeof amount === "number"){
		account.balance += amount
	}
	else {
		return "Deposit not accepted- must be a number"
	}	
}

function withdraw(account, amount) {
	if (typeof amount === "number"){
		account.balance -= amount
	}
	else {
		return "Withdrawl not accepted- must be a number"
	}	
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
	if (typeof input_username === "string") {
		var num_accounts = accounts.length
		for (var i=0; i< num_accounts; i++){
			if (accounts[i].username === input_username){
				return accounts[i]
			}
		}
	}
	else {
		return "Error: did not input a string for a username"
	}
}

function createBalanceGetter(account) {
	return function() {
		return getBalance(account)
	}
}



// createAccount("a", 1)
// createAccount("b", 2)

// console.log(accounts)

// console.log( getAccount("a") )
// console.log( getAccount(1) )
// console.log( getAccount("c") )

var jason_balance = createBalanceGetter({username: "Jason", balance: 10})
console.log( jason_balance() )
console.log( jason_balance() )