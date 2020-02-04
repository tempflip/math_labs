const gold_iter = (n) => {
	var x = [0, 1]
	while (x.length <= n) {
		x.push(x[x.length -1] + x[x.length -2])
	}
	return x[n];
}

const silver_iter = (n) => {
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


const GOLD = (1 + Math.sqrt(5)) / 2;
const SILVER = (1 + Math.sqrt(2));


for (var i = 2; i < 25; i ++) {
	var fun = silver_iter;
	var goal = SILVER;

	var n = fun(i);
	var n_prev = fun(i-1);
	var rat = n/n_prev;

	console.log(n, '\t\t', n_prev, '\t\t', rat, '\t\t\t', rat - goal);
}