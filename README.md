# verou-4-dom-manipulation-SSLTC

## DOM Exploration

### Basics

- Changed headingtext
- Changed backgroundcolor to pink and random color
- Console logged all the children of the body

<a href="./Basics">Basics link</a>

___

### Selectors

- Adding a title attribute to all nodes with class 'important'
- Change the display of all none important images to 'none'
- Display paragraphs content and classnames
- Give each paragraph without a class a random textcolor

<a href="./Selectors">Selectors link</a>

___

### Creating Nodes

- Adding a section with random backcolor to the article for each student with their name in a paragraph
- Change the textcolor to white/black when the backgroundcolor is dark/light
- Change order of the elements on every page load

<a href="./Create">Create link</a>

___

### Navigate

- Select the last child of the <ol> tag and put it at the beginning of the list
- Move the <h2> of the third section in the second one and vice-versa
- Delete the last section from the DOM, we don't need it anyways

<a href="./Navigate">Navigate link</a>

___

### Events

- Everytime the user clicks on one of the action squares
    - Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
    - Create a new <li> in the log below to state when the action was done

- Add an event listener on the document <body>, listening for the keypress event.
    - When the spacebar is hit randomly change the background color of the whole page
    - Log when the spacebar is used the same way you used for the generated squares.
    - When the l key is pressed the log gets deleted (erases the generated <li>s).
    - When the s key is pressed the squares get deleted (erases the generated squares)

- When a user clicks on a generated square an alert pops-up with the color of that square

<a href="./Events">Events link</a>

___

### Forms

- A keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">
- A keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact
- Turn the field red if the password is too short (less than 6 characters) or if the password and its confirmation do not match
- A change listener on the <select> field to toggle a dark mode on the whole page

<a href="./Forms">Forms link</a>

___

### Collections

- Created a book collection of 10 books
- Created a card for each object with javascript
- Moved the const collection from the script.js to a new file called collection.js and imported that collection into the script file
- When you hover over a card it scalles to 1.1 gets a box-shadow and white backgroundcolor while the grid and other cards get a grey backgroundcolor
- Input field in the header to search on title

<a href="./Collection-Project">Collection-Project link</a>

___

### DOM drill

- Listed all the children of the list
- A loop over element nodes, move "Fast and Furious" as first in the list and give it a class "important", added a click event on every item witch shows an alert with the name of the element and a personal text for "Fast and Furious", at last removing of duplicates
- Added a div element before the list element witch containing an select element with two options
- Showing only the important listitems when selected
- When pressing key (R) the list get random sorted while the important items stay on top, each (D) key press will duplicate the "Fast and Furious" item

<a href="./DOM-drill">Collection-Project link</a>

___

