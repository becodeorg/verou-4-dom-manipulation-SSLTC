import { collectionBooks } from "./collection.js";

const elHead = document.querySelector("header");
const elHeading1 = document.createElement("h1");
elHeading1.textContent = "My book collection";
elHead.appendChild(elHeading1);

const elNav = document.querySelector("nav");
const elInputSearchOnTitle = document.createElement("input");
elInputSearchOnTitle.setAttribute("id", "inputSearchOnTitle");

const elLabelSearchOnTitle = document.createElement("label");
elLabelSearchOnTitle.setAttribute("for", "inputSearchOnTitle");
elLabelSearchOnTitle.setAttribute("id", "lblSearchOnTitle");
elLabelSearchOnTitle.textContent = "Search on title";
elNav.append(elInputSearchOnTitle, elLabelSearchOnTitle);

const elGrid = document.querySelector("main");

collectionBooks.forEach(item => {
    const elGridItem = document.createElement("div");
    elGridItem.setAttribute("id", "card");

    // Bookcover img
    const elImgBookcover = document.createElement("img");
    elImgBookcover.setAttribute("id", "bookcover");
    elImgBookcover.setAttribute("src", `./book-covers/${item.EAN}.jpeg`);
    elImgBookcover.setAttribute("alt", "Book cover");

    // txtBody div
    const elItemBody = document.createElement("div");
    elItemBody.setAttribute("id", "itemBody");

    // Release Date span
    const elSpanReleaseDate = document.createElement("span");
    elSpanReleaseDate.setAttribute("id", "releaseDate");
    elSpanReleaseDate.innerText = item.ReleaseDate;

    // Genre paragraph
    const elParagraphGenre = document.createElement("span");
    elParagraphGenre.setAttribute("id", "genre");
    elParagraphGenre.innerText = item.Genre;

    // Title heading2
    const elHeading2 = document.createElement("h2");
    elHeading2.setAttribute("id", "title");
    elHeading2.innerText = item.Title;

    // Author paragraph
    const elParagraphAuthor = document.createElement("p");
    elParagraphAuthor.setAttribute("id", "author");
    elParagraphAuthor.innerText = item.Author;

    // Description paragraph
    const elParagraphDescription = document.createElement("p");
    elParagraphDescription.setAttribute("id", "description");
    elParagraphDescription.innerText = item.Description;

    // Horizontal Line
    const elHorizontalRule = document.createElement("hr");

    // Bookstore logo img
    const elImageBookstore = document.createElement("img");
    elImageBookstore.setAttribute("id", "iconBookstore");
    elImageBookstore.setAttribute("src", "./img/icon-standaardboekhandel.png");
    elImageBookstore.setAttribute("alt", "Standaard boekhandel icon, link to book");
    elImageBookstore.setAttribute("title", "Link to the bookstore");
    elImageBookstore.addEventListener('click', () => { window.location = item.Link});
    // Change cursor to pointer when hover over link
    elImageBookstore.addEventListener("mouseover", (e) => { elImageBookstore.style.cursor = "pointer" });

    elItemBody.append(
        elSpanReleaseDate,
        elParagraphGenre, 
        elHeading2, 
        elParagraphAuthor,
        elParagraphDescription,
        elHorizontalRule,
        elImageBookstore);

    elGridItem.append(elImgBookcover, elItemBody);

    elGrid.appendChild(elGridItem);
});