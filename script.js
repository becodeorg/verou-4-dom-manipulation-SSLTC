/*
*/

//console.log(document.querySelector("h1"));

//Change headingtext
let heading = document.querySelector("h1");
let headingtext = heading.innerHTML.replace("BeCode DOM exploration", "Modifying the DOM");
heading.innerHTML = headingtext;

//Change backgroundcolor
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let body = document.querySelector("body");
//body.style.backgroundColor = "#FF69B4";
body.style.backgroundColor = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")";

//Display children body
const bodyChildren = document.body.children;
for(const child of bodyChildren){
    console.log(child.tagName)
}