/*
* This function returns all the possible combinations for N coins
* For example, for N = 8 it will return all the possible 256 combinations
* 
* The function calls itself with N-1 parameter and adds 0 and 1 to the end.
*/
const coin_combinations = (N) => { 
	if (N == 1) return [[0], [1]];

	const r = [];
	coin_combinations(N-1).forEach((el) => {
		var a = JSON.parse(JSON.stringify(el));
		var b = JSON.parse(JSON.stringify(el));
		a.push(0);
		b.push(1);
		r.push(a);
		r.push(b);
	})
	return r;
}

/*
* Returns the maximumum number of 1-os in a row.
*
* comments:
* sc => current score (heads in the row)
* scMax => current maximum score
* when a tail comes (0) than we save the current score to the scMax 
* and reset the score
*/
const score = (c) => {
	var scMax = 0;
	var sc = 0;
	c.forEach(el => {
		if (el == 1) sc ++;
		if (el == 0) {
			if (sc > scMax) scMax = sc;
			sc = 0;
		}
	});
	if (sc > scMax) scMax = sc;
	return scMax;
}

/*
* The code above 
*  - gets all the possible combinations for N coins
*  - gets a score for every possible combinations
*  - counts how many time each score was returned (map P)
*  - divide the count numbers by the number of all possible combinations (last loop)
*/
N = 8;
P = {};
combinations = coin_combinations(N);

combinations.forEach(comb => {
	var sc = score(comb);
	if (!P[sc]) P[sc] = 0;
	P[sc] = P[sc] + 1;
});

// for (k in P) {
// 	P[k] = P[k] / combinations.length;
// }

console.log(P);