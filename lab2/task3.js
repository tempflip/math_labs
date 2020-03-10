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

N = 2;

coin_combinations(N).forEach(comb => {
	var sc = score(comb);
	console.log(comb,sc);
})