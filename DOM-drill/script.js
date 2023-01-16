const elList = document.querySelector("ul");
const listItems = elList.childNodes;

listItems.forEach(li => {
    //console.log(li.nodeName);
    if(li.nodeType ===1) {
        if(li.textContent === "Fast and Furious") {
            if(Array.prototype.indexOf.call(elList, li) !== 0) {
                // move first
            }
        }
    }
});
