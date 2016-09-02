var i = 0;
var countLimit = 8;

while (i < countLimit){
	console.log( "While " + i)
	i++
}

for (i = 0; i < countLimit; i++){
	console.log( "For " + i)
}


function countDownFor(startingPt, stoppingPt) {
	if (typeof startingPt === "number" && typeof stoppingPt === "number" && startingPt > stoppingPt) {
		for (i = startingPt; i >= stoppingPt; i--) {
			console.log( "For down " + i)
		}
	}
	else {
		console.log( "Invalid inputs" )
	}
}

function countDownWhile(startingPt, stoppingPt) {
	if (typeof startingPt === "number" && typeof stoppingPt === "number" && startingPt > stoppingPt) {
		i = startingPt
		while (i >= stoppingPt) {
			console.log("While down " + i)
			i--
		}
	}
	else {
		console.log( "Invalid inputs" )
	}
}

countDownFor(4,2)
countDownWhile(5,1)