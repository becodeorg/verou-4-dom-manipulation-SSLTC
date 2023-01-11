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
