function onlyNumbers(e) {
	var key = (window.event) ? event.keyCode : e.which;

	if ((key > 47 && key < 58)) return true;
	else {
		if (key == 8 || key == 0) return true;
		else return false;
	}
}

function convert() {
	r = parseInt(document.getElementById("r").value);
	g = parseInt(document.getElementById("g").value);
	b = parseInt(document.getElementById("b").value);

	if (r > 255 || g > 255 || b > 255) {
		document.getElementById("result").innerHTML = "Invalid numbers";
	} else {
		res = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		document.getElementById("result").innerHTML = res.toUpperCase();
		document.body.style.backgroundColor = res;
	}
	return false;
}
