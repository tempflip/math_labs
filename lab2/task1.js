/*
* Hard-coded implementation for the nested loops
*/

const factorial = (n) => { // implementation of the factorial
	if (n == 1) return 1;
	return n * factorial(n-1);
}

const p = 5;
var c = 0; // the counter
for (var i = 1; i <= p; i++) {
	for (var j = 1; j <= i; j++) {
		for (var k = 1; k <= j; k++) {
			c++;
		}
	}
}

var N = 3 // number of nested loops
var formula = factorial(N + p - 1) / (factorial(N) * factorial(p-1))

console.log(formula, c, formula == c)