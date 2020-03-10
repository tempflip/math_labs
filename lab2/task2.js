var c = 0;

for(var i = 0; i < 1000; i++) {
	var d1 = parseInt(i / 1000) % 10;
	var d2 = parseInt(i / 100) % 10;
	var d3 = parseInt(i / 10) % 10;
	var d4 = i % 10;
	if (d2 > d1 && d3 > d2 && d4 > d3) c++;
}

console.log(c);