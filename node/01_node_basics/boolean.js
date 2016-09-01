var isValid = false

function toggleBool(bool) {
	if (typeof bool === "boolean") {
		return !bool
	else {
		return "Error: bool is not a boolean"
	}
}

console.log( toggleBool("isValid") )