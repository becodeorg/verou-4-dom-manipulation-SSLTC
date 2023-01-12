import { collectionBooks } from "./collection.js";

const elHead = document.querySelector("head");
const elHeading1 = document.createElement("h1");
elHeading1.textContent = "Heading";
elHead.appendChild(elHeading1);

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
    elImageBookstore.addEventListener('click', () => { window.location = item.Link});

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

