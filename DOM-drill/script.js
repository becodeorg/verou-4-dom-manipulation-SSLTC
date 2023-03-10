const elList = document.querySelector("ul");
const listItems = elList.childNodes;

listItems.forEach((li, index) => {

    if(li.nodeType === 1) {
        for(let i = (index +1); i < listItems.length; i++) {

            if(li.isEqualNode(listItems[i]) & li.textContent === listItems[i].textContent) {
                li.remove();
            }
        }

        if(li.textContent === "Fast and Furious") {

            li.classList.add("important");

            li.addEventListener("click", () => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            });

            if(Array.prototype.indexOf.call(elList, li) !== 0) {
                elList.insertBefore(li, elList.firstChild);
            }
        }
        else {
            li.addEventListener("click", () => {
                alert(li.nodeName);
            });
        }
    }
});

const elDiv = document.createElement("div");
document.body.insertBefore(elDiv, elList);

const elSelect = document.createElement("select");

const selOptions = ['--- Select a franchise ---', 'important franchises', 'normal franchises'];

selOptions.forEach(option => {
    let newOption = new Option(option , option);
    elSelect.add(newOption, undefined);
});

elSelect.addEventListener("change", (e) => {
    
    const { options, selectedIndex } = e.target;
    const txtSelOption = options[selectedIndex].text;

    listItems.forEach(li => {
        if(li.classList !== undefined) {
            if(li.classList.contains("important") === true & txtSelOption === "important franchises") {
                li.style.visibility = "visible";
            } else if(li.classList.contains("important") !== true & txtSelOption === "normal franchises") {
                li.style.visibility = "visible";
            } else {
                li.style.visibility = "hidden";
            }
        }
    });
});

elDiv.appendChild(elSelect);

// When pressing the (R) key of the keyboard the list get sorted in a random order, however 
// Fast and Furious remain the first element (most important franchise ever, remember?)

document.body.addEventListener("keyup", (e) => {
    switch(e.code) {
        case "KeyR":
            
            //const elNormalFranchises = Array.from(document.querySelectorAll('li')).find(el => el.classList.contains("important") !== true);

            listItems.forEach(li => {
                let rnd = Math.floor(Math.random() * elList.childElementCount);

                elList.appendChild(li, listItems[rnd]);

                if(li.classList !== undefined) {
                    if(li.classList.contains("important") === true) {
                        elList.insertBefore(li, elList.firstChild); 
                    }
                }
            });

            break;
        case "KeyD":
            // div[contains(., 'Hello')]
            const elFastFurious = document.evaluate("//li[text() = 'Fast and Furious']", document, null, XPathResult.ANY_TYPE, null).iterateNext();

            const clonedNode = elFastFurious.cloneNode(true);
            elList.insertBefore(clonedNode, elList.firstChild);

            break;
    }
});
