const olNode = document.querySelector("ol");
const lastLi = olNode.lastElementChild;
const firstLi = olNode.firstElementChild;
// Select the last child of the <ol> tag and put it at the beginning of the list
olNode.insertBefore(lastLi, firstLi);
olNode.appendChild(firstLi);

const sectionNodes = document.querySelectorAll("section");
const firstSectionH2 = sectionNodes[0].querySelector("h2");
const secondSectionH2 = sectionNodes[1].querySelector("h2");
// Move the <h2> of the third section in the second one and vice-versa
sectionNodes[0].insertBefore(secondSectionH2, firstSectionH2);
sectionNodes[1].insertBefore(firstSectionH2, sectionNodes[1].firstChild);
// Delete the last section from the DOM, we don't need it anyways
sectionNodes[2].remove();