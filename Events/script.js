const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //console.log(e.target.classList[1])
  //console.log(getElapsedTime())

  const bgColor = e.target.classList[1];

  const elDiv = document.createElement("div");
  elDiv.className = "displayedsquare";
  elDiv.style.backgroundColor = bgColor;
  // Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  document.querySelector(".displayedsquare-wrapper").appendChild(elDiv);

  const elLi = document.createElement("li");
  elLi.innerText = `[ ${getElapsedTime()} ] Created a new ${bgColor} square`;
  // Create a new <li> in the log below to state when the action was done
  const ulNode = document.querySelector("ul");
  ulNode.appendChild(elLi);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const randomColor = () => {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);

    const rndColor = `rgb(${Red}, ${Green}, ${Blue})`;
    return rndColor;
}

const changeBgColor = (e) => {
    let ulNode = document.querySelector("ul");
    switch(e.code) {            
        case "Space":
            // When the spacebar is hit randomly change the background color of the whole page
            const bgColor = randomColor();
            document.body.style.backgroundColor = bgColor;

            const elLi = document.createElement("li");
            elLi.innerText = `[ ${getElapsedTime()} ] Changed the backgroundcolor to ${bgColor}`;
            // Create a new <li> in the log below to state when the action was done
            ulNode.appendChild(elLi);
            break;
        case "KeyI":
            // When the l key is pressed the log gets deleted (erases the generated <li>s)
            ulNode.innerHTML = "";
            break;
        case "KeyS":
            //  When the s key is pressed the squares get deleted (erases the generated squares)
            document.querySelector(".displayedsquare-wrapper").innerHTML = "";
            break;
    }
}

document.body.addEventListener('keydown', changeBgColor);

const showAlert = (e) => {
    // When a user clicks on a generated square an alert pops-up with the color of that square
    const bgColor = e.target.style.backgroundColor;
    alert(`The square has a ${bgColor} color`);
}

document.querySelector(".displayedsquare-wrapper").addEventListener('click', showAlert);
