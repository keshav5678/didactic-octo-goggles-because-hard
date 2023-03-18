x = 0;
y = 1;
z = 150;
function Function1() {
	x += y;
	document.getElementById("score").innerHTML = "🍪 " + x;
}

function Shop() {
	if (x > z) {
	    x -= z;
	    y *= 2;
		z *= 2
		document.getElementById("score").innerHTML = "🍪 " + x;
		document.getElementById("boost").innerHTML = z + " cookies";
	} else {
		alert('not enough cookies');
    }
}
	