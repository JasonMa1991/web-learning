var grades = [70, 100, 50]

grades.push(80)

console.log(grades)

grades[0] = 75
console.log(grades[0])
console.log(grades)

console.log( grades.pop() )
console.log(grades)

console.log( grades.shift() )
console.log(grades)

grades.forEach(
	function (grade) {
		console.log(grade)
	}
)

console.log(grades.length)



var totalGrade = 0
grades.forEach(
	function (grade) {
		totalGrade += grade
	}
)

console.log("\n\n")

console.log(grades)
console.log(totalGrade)

var averageGrade = totalGrade / grades.length
console.log(averageGrade)