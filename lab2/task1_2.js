/*
* Implementation where both p and N (number of nested loops can be changed)
*/

const factorial = (n) => { // implementation of the factorial
	if (n == 1) return 1;
	return n * factorial(n-1);
}

const N = 7 // number of nested loops
const p = 7;

const loop = (N, p) => {
	var c = 0;
	for (var i = 1; i <= p; i ++) {
		if (N > 1) {
			c += loop(N - 1, i);
		} else {
			c++;
		}
	}
	return c;
}

var c = loop(N, p);
var formula = factorial(N + p - 1) / (factorial(N) * factorial(p-1))
console.log(formula, c, formula == c)