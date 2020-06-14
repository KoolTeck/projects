let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

// function matchColor(){
//     color1.value = `linear-gradient(to right, red , yellow)`;
//     color2.value = `linear-gradient(to right, red , yellow)`;
// }
css.innerText = `linear-gradient(to right, red , yellow)`; 
function bodyGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.innerText = body.style.background;
}

color1.addEventListener("input",bodyGradient);

color2.addEventListener("input",bodyGradient);