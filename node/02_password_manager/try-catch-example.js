function doWork () {
	throw new Error("Unable to do work")
}



try {
	doWork()
}
catch (e) {
	console.log(e)
	console.log("Catch block only gets executed if try throws error")
}
finally {
	console.log("Finally this block always gets executed!")
}

console.log("try-catch ended")