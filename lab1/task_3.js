const fib_iter_list = (n) => {
	var x = [0n, 1n]
	while (x.length <= n) {
		x.push(x[x.length -1] + x[x.length -2])
	}
	return x;
}

/*
* Gets a list of elements, and returns a list of indices from where the list repeats itself
* If no repeats in the lists, returns an empty list
*/
const ifPer = (l) => {

	var indexList = []; // the list of indices to return
	var pat = [];

	for (var i = 0; i < l.length; i ++) { // a loop which goes through the list
		pat.push(l[i]); // putting the current element into the current 'pattern candidate'

		var goodPattern = true; // if it is a 'good pattern, it repeats itself in the list;
		pc = 0; // a counter for the pattern candidate
		for (var c = 0; c < l.length; c ++) { // an inner loop which figures out of there is a repition
			if (pc >= pat.length) pc = 0;

			if (pat[pc] != l[c]) { // if there is no match between the pattern and the element of the list, it is not a matching pattern
				goodPattern = false;
				break;
			}
			pc ++;
		}
		if (goodPattern && pat.length <= l.length / 2) { // if it is a mathcing pattern, we record the index
			indexList.push(pat.length);
		}

	}
	return indexList;
}

// const l = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

// console.log('Test for a trivial list: ')
// console.log('Repeats:');
// console.log(ifPer(l));


last1 = fib_iter_list(1000).map( el => el % 10n);
last2 = fib_iter_list(3000).map( el => el % 100n);
last3 = fib_iter_list(10000).map( el => el % 1000n);


console.log('Last 1 digit repeats every N times:');
console.log(ifPer(last1));
console.log('Last 2 digit repeats every N times:');
console.log(ifPer(last2));
console.log('Last 3 digit repeats every N times:');
console.log(ifPer(last3));

