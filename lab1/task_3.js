const fib_iter_list = (n) => {
	var x = [0n, 1n]
	while (x.length <= n) {
		x.push(x[x.length -1] + x[x.length -2])
	}
	return x;
}

const ifPer = (l) => {

	var patList = [];
	
	var pat = [];

	for (var i = 0; i < l.length; i ++) {
		pat.push(l[i]);
		pc = 0;
		var goodPattern = true;
		for (var c = 0; c < l.length; c ++) {
			if (pc >= pat.length) pc = 0;

			if (pat[pc] != l[c]) {
				goodPattern = false;
				break;
			}
			pc ++;
		}
		if (goodPattern && pat.length <= l.length / 2) {
			patList.push(pat.length);
		}

	}
	return patList;
}

const l = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

console.log('Test for a trivial list: ')
console.log(l);
console.log('Repeats:');
console.log(ifPer(l));


last1 = fib_iter_list(1000).map( el => el % 10n);
last2 = fib_iter_list(3000).map( el => el % 100n);
last3 = fib_iter_list(10000).map( el => el % 1000n);


console.log('Last 1 digit repeats every N times:');
console.log(ifPer(last1));
console.log('Last 2 digit repeats every N times:');
console.log(ifPer(last2));
console.log('Last 3 digit repeats every N times:');
console.log(ifPer(last3));
// console.log(JSON.stringify(last2))
// console.log(fib_iter_list(1000).slice(900, 1000))

