/*
*/

// Adding a title attribute to all nodes with class 'important'
let importantNodes = document.querySelectorAll(".important");
for(let importantNode of importantNodes){
    importantNode.setAttribute("title", "This is an important item");
}

// Change the display of all none important images to 'none'
let noneImportantImageNodes = document.querySelectorAll("img:not(.important)");
for(let noneImportantImageNode of noneImportantImageNodes){
    noneImportantImageNode.style.display = "none";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Display paragraphs content and classnames
let paragraphNodes = document.querySelectorAll("p");
for(let pNode of paragraphNodes){
    if(pNode.className.length != 0){
        console.log("Class: " + pNode.className);
    }
    else {
        pNode.style.color = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")"; 
    }
    console.log(pNode.innerHTML);
}

// ^^^
// Give each paragraph without a class a random textcolor
