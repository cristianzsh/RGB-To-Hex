function convert() {
    r = parseInt(document.getElementById('r').value);
    g = parseInt(document.getElementById('g').value);
    b = parseInt(document.getElementById('b').value);

    res = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    document.getElementById('result').innerHTML = res.toUpperCase();
    document.body.style.backgroundColor = res;

    chooseBodyColor(r, g, b);

    return false;
}

function chooseBodyColor(r, g, b) {
    if ((r < 140 || g < 140 || b < 140) && (r + g + b < 510)) {
        document.body.style.color = 'white';
    } else {
        document.body.style.color = 'black';
    }
}
