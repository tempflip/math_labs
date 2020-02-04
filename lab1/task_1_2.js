const fib_iter = (n) => {
	var x = [0, 1]
	while (x.length <= n) {
		x.push(x[x.length -1] + x[x.length -2])
	}
	return x[n];
}

const fib_req = (n) => {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return fib_req(n-1) + fib_req(n-2);
}

const fib_iter_list = (n) => {
	var x = [0, 1]
	while (x.length <= n) {
		x.push(x[x.length -1] + x[x.length -2])
	}
	return x;
}

const investigate_last2 = (l) => {
	var myMap = {};
	for (i = 0; i <= l.length; i++) {
		
		if (!myMap[i] ) {
			myMap[i] = [];
		}
	}

	console.log(myMap);
}

const b = 40;


console.log('### Running the iteratvie Fibanocci algorithm for n = ' + b);
var t = Date.now();
console.log(fib_iter(b));
console.log('fib_iter time: ' , Date.now() - t);

console.log('\n\n### Running the recursive Fibanocci algorithm for n = ' + b);
var t = Date.now();
console.log(fib_req(b));
console.log('fib_req time: ' , Date.now() - t);

// var last2 = fib_iter_list(1000)
// 					.map( x => x % 100 );


// investigate_last2([1,2,3,4,1,2,3,4]);



