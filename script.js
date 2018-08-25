/*function sing(song) {
	console.log(song);
}

sing("Laaa Lee daa!!");
sing("Hello!!");
sing("Is it me you are looking for!!!");*/

var a = prompt("first Number?");
var b = prompt("second Number?");

//always return something from a function
//return is the final way to end a function
function multiply(a, b) {
	if (a > 10 || b>10) {
		return "that\'s too hard"
	} else {
		return a * b;
	}
	return a * b;
}

result = multiply(a, b);
console.log(result);
alert(result);