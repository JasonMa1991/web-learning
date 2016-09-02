function greetMaker(name) {
	function greet(){
		console.log("Hello " + name)
	}

	return greet
}

var greetJason = greetMaker("Jason")
greetJason()



function createAdder(num_to_add) {
	return function (num_base) {
		return num_base + num_to_add
	}
}

var add_10 = createAdder(10)

console.log(add_10(2))
console.log(add_10(add_10(2)))