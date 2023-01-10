//import { getRndInteger } from "../modules/getRndInteger.js";
import { getRndRgb } from "../modules/getRndColor.js";

function getRndInteger(min, max) {
    let rndInt = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rndInt;
}

const studentsVerou4 = ["Sven", "Juraj", "Beatrice", "James", "vincent", "Seppe", "Niels", "Toon", "Ward", "Jean M.", "Ada", "Rachid", "Sofie", "Marieke", "Tesse", "David", "Sander", "Raoul", "Xander", "Lisa", "Thomas", "Jitske", "Freke", "Sarah", "Celine", "Nick", "Claire", "Pious", "Yousra"];
studentsVerou4.sort;

const articleNode = document.querySelector("article");

for(let student of studentsVerou4) {
    const sectionNode = document.createElement("section");
    sectionNode.style.backgroundColor = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")";

    sectionNode.style.backgroundColor = getRndRgb;
console.log(getRndRgb);
    const txtNode = document.createTextNode(student);
    const paragraphNode = document.createElement("p");
    
    paragraphNode.style.color = "white";
    paragraphNode.appendChild(txtNode);
    
    sectionNode.appendChild(paragraphNode);
    articleNode.appendChild(sectionNode);
}
