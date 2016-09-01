var jason = {
	  gender: "M"
	, 'eye_color': "brown"
}

jason["first_name"] = "Jason"
jason.last_name = "Ma"
jason.age = 25
delete jason.age

console.log(jason)


var pet = {
	  name: "Felix"
	, type: "dog"
}

function state_the_obvious(pet) {
	var out_str = "You own a " + pet.type + " named " + pet.name
	console.log(out_str)
}

state_the_obvious(pet)