function convert(e) {
    const elemID = e.id;
    let degrees = document.getElementById(elemID).value;
    console.log(`${degrees} input from ${elemID}`);
    elemID == 'fahrInput' ? getCelsius(degrees) : getFahr(degrees);
    // console.log(result);
}

function getCelsius(d) {
    let f = parseFloat(d);
    let result = (5/9) * (f - 32);
    document.getElementById('celsiusInput').textContent = result;
}

function getFahr(d) {
    let c = parseFloat(d);
    c = (5/9) * (f - 32);
}