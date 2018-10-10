// Function to take array of numbers and find the average 
function average(scores){

	// add all the numbers
	var addition = 0;
	scores.forEach(function(score){
		addition += score;
	});

	// find the average 
	var avg = addition / scores.length;

	// return the rounded value
	return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average is " + average(scores));


