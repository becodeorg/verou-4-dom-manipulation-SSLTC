import { getRndRgb } from "../modules/getRndColor.js";

function getRndInteger(min, max) {
    let rndInt = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rndInt;
}

const studentsVerou4 = ["Sven", "Juraj", "Beatrice", "James", "Vincent", "Seppe", "Niels", "Toon", "Ward", "Jean M.", "Ada", "Rachid", "Sofie", "Marieke", "Tesse", "David", "Sander", "Raoul", "Xander", "Lisa", "Thomas", "Jitske", "Freke", "Sarah", "Celine", "Nick", "Claire", "Pious", "Yousra"];
//studentsVerou4.sort();

// Change order of the elements on every page load
studentsVerou4.sort(() => Math.random() - 0.5);

const articleNode = document.querySelector("article");

// Adding a section with random backcolor to the article for each student with their name in a paragraph
for(let student of studentsVerou4) {
    const sectionNode = document.createElement("section");
    
    let rgbColor = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")";
    sectionNode.style.backgroundColor = rgbColor;
    //sectionNode.style.backgroundColor = getRndRgb;

    const txtNode = document.createTextNode(student);
    const paragraphNode = document.createElement("p");
    
    // Change the textcolor to white/black when the backgroundcolor is dark/light ***
    let redgreenblue = rgbColor.substring(4,rgbColor.lastIndexOf(")")).split(",");
    //let redgreenblue = rgbColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/); 1-3
    let red = parseInt(redgreenblue[0]);
    let green = parseInt(redgreenblue[1]);
    let blue = parseInt(redgreenblue[2]);

    let hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

    if (hsp > 127.5) {
        paragraphNode.style.color = "black";
    } 
    else {
        paragraphNode.style.color = "white";
    }
    // ***
    
    paragraphNode.appendChild(txtNode);
    
    sectionNode.appendChild(paragraphNode);
    articleNode.appendChild(sectionNode);
}
