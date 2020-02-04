// Iterative versions
/////////////////////////
const fib_alter1_iter = (n) => {
	var x = [1, 1]
	while (x.length <= n) {
		x.push( 2 * x[x.length -1] + x[x.length -2])
	}
	return x[n];
}

const fib_alter2_iter = (n) => {
	var x = [1, 1]
	while (x.length <= n) {
		x.push( x[x.length -1] + 2 * x[x.length -2])
	}
	return x[n];
}

// Recursive versions
///////////////////////
const fib_alter1_req = (n) => {
	if (n == 0) return 1;
	if (n == 1) return 1;
	return 2 * fib_alter1_req(n-1) + fib_alter1_req(n-2);
}

const fib_alter2_req = (n) => {
	if (n == 0) return 1;
	if (n == 1) return 1;
	return fib_alter2_req(n-1) + 2 * fib_alter2_req(n-2);
}

for (var i = 0; i < 20; i++ ) {
	console.log(fib_alter1_iter(i));
}


