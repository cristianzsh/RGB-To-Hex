function convert() {
	r = parseInt(document.getElementById("r").value);
	g = parseInt(document.getElementById("g").value);
	b = parseInt(document.getElementById("b").value);
	
	res = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	document.getElementById("result").innerHTML = res.toUpperCase();
	document.body.style.backgroundColor = res;
	return false;
}