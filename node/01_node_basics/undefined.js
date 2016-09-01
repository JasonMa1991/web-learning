// var name

// // console.log(name)

// function doesNothing(age) {
// 	console.log(age)
// }

// // console.log( doesNothing() )
// doesNothing()

// if (typeof x === "undefined") {
// 	console.log("x is undefined")
// }


function greetUser(name) {
	if (typeof name === "string") {
		console.log("Hello " + name + "!")
	}
	else {
		console.log("Hello world!")
	}
}

greetUser()
greetUser("Jason")
