var person = {
	  name: "Jason"
	, age: 25
}

var personJSON = JSON.stringify(person)

console.log(personJSON)
console.log(typeof personJSON)

var personObject = JSON.parse(personJSON)

console.log(personObject.name)
console.log(personObject)


console.log("Challenge Area")

var animal = '{"name": "Halley"}'
var animalObj = JSON.parse(animal)
animalObj.age = 8
animal = JSON.stringify(animalObj)
console.log(animal)