let cssBgText = document.querySelector(".css-bg-text");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function bodyStyleOnInit () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    cssBgText.innerHTML = body.style.background + ";";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    cssBgText.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


