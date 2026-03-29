// DAY 12

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- JS DOM ----------------------------------------------
// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

// EXAMPLE 1: Log document (tree)
console.log(document);

// EXAMPLE 2: Change the document's struture/styles/content
document.title = "DAY 12";
// document.body.style.backgroundColor = "grey";

const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.style.color = "white";
welcomeMsg.textContent += "Omar";

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- JS ELEMENT SELECTORS ----------------------------------------------
// They are methods used to target and manipulate HTML elements.
// They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL if not found
// 2. document.getElementsClassName() // HTML COLLECTION (similar to an array but not technically the same)
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // FIRST MATCHING ELEMENT OR NULL if it does not find any

// 5. document.querySelectorAll() // NODELIST
// Similar to HTML COLLECTION but it has built-in methods like arrays do.
//  They are static (do not update automatically in the DOM), while HTML COLLECTION is live

// EXAMPLE 1: getElementById()
welcomeMsg.style.backgroundColor = "brown"; // when accesing css property through DOM, they have camelcase naming convention

// EXAMPLE 2: getElementsClassName()
const fruits = document.getElementsByClassName("fruits");

// We could typeCast our HTML collection to an array to use the array methods as we wish
Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
// To find the length of the HTML collection
console.log(fruits.length);

// EXAMPLE 3: getElementsByTagName()
const h4Elements = document.getElementsByTagName("h4"); // Retrieves all h4 elements
const liElements = document.getElementsByTagName("li"); // Retrieves all h4 elements

Array.from(h4Elements).forEach((h4Element) => {
  h4Element.style.backgroundColor = "HSL(116, 98%, 35%)";
});

Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = "lightgreen";
});

// EXAMPLE 4: querySelector()
const element = document.querySelector(".fruits"); // It will select all fisrt element with "fruits" class

element.style.backgroundColor = "red";

// EXAMPLE 5 : querySelectorAll()

const foods = document.querySelectorAll("li");

// // No need to typeCast our Query to an array, it already has the forEach method built-in
foods.forEach((food) => {
  food.style.backgroundColor = "greenyellow";
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- JS DOM Navigation ----------------------------------------------
// The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement or .parentNode
// .children

// EXAMPLE 1: .firstElementChild
const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  // Select the first child in each ul elemnet and then change its color
  const fisrtChild = ulElement.firstElementChild;
  fisrtChild.style.backgroundColor = "green";
});

// EXAMPLE 2: .lastElementChild
ulElements.forEach((ulElement) => {
  // Select the first child in each ul elemnet and then change its color
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "pink";
});

// EXAMPLE 3: .nextElementSibling
const apple = document.getElementById("apple");
apple.nextElementSibling.style.backgroundColor = "orange";

// EXAMPLE 4: .previousElementSibling
const onions = document.getElementById("onions");
onions.previousElementSibling.style.backgroundColor = "hsl(96, 61%, 87%)";

// EXAMPLE 5: .parentElement
const parent = apple.parentElement;
// parent.style.backgroundColor = "black"; //Body's background color

// EXAMPLE 6: .children
const veggies = document.getElementById("Root Veg");
const children = veggies.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "hsl(323, 74%, 70%)";
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- ADD/CHANGE HTML using JS ----------------------------------------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); // Last Child (at the end of the document)
// document.body.prepend(newH1); First Child (at the beginning of the document)
document.getElementById("box1").append(newH1); // Last Child (at the end of the box)
// document.getElementById("box1").prepend(newH1); // First Child (at the beginning of the box)

// insertBefore(newElement, currentElement)
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2)

// insertBefore(newElement, currentElement[index]) in a query
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2])

// REMOVE HTML ELEMENT: removeChild(theElementToBeRemoved)
// document.body.removeChild(newH1); // This is used to remove an element that is appended to the body of the document
document.getElementById("box1").removeChild(newH1); // This is used to remove an element that is appended to a specific child

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- ADD/CHANGE TEXT NODE using JS ----------------------------------------------

// 1. Create a paragraph
let a = document.createElement("p");

// 2. Create a Text Node
let b = document.createTextNode("my text node.");

// 3. Append the Text Node to the paragraph
a.appendChild(b);

// 4. Append the paragraph to the body el
document.body.appendChild();

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- JS MOUSE EVENTS ----------------------------------------------
// Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// Form: .addEventListener("eventType", callback);

const myBox = document.getElementById("myBox");

// Example 1: click
function changeColor(event) {
  // Event is an object that is provided to us automatically by the web browser when something happens
  // It conatins all the info about what exactly happened (event type, coordinates, time of the event)
  // Target is what we clicked on
  // Besides the target you could change the struture/styles/content of any other element in the HTML Document
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch! 🤕 ";
}

myBox.addEventListener("click", changeColor);

// Example 2: mouseover
myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't Do It! 🤐 ";
}); // Besides callbacks, we could also pass an arrow function

// Example 3: mouseout
myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me 😊";
}); // Besides callbacks, we could also pass an arrow function

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- JS Key Events ----------------------------------------------
// Listen for specific events to create interactive web pages
// events: keydown, keyup
// Form: document.addEventListener(event, callback);

const keyBox = document.getElementById("keyBox");

// EXAMPLE 1: keydown
document.addEventListener("keydown", (event) => {
  console.log(`Key Down : ${event.key}`); // Prints the key that was pressed

  keyBox.textContent = "😲";
  keyBox.style.backgroundColor = "tomato";
});

// EXAMPLE 2: keyup
document.addEventListener("keyup", (event) => {
  console.log(`Key Up : ${event.key}`); // Prints the key that was released

  keyBox.textContent = "😃";
  keyBox.style.backgroundColor = "lightblue";
});

// EXAMPLE 3: Small Game

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    // To prevent the default behavior of the key (scroll bar)
    event.preventDefault(); // Method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;

      case "ArrowDown":
        y += moveAmount;
        break;

      case "ArrowLeft":
        x -= moveAmount;
        break;

      case "ArrowRight":
        x += moveAmount;
        break;
    }

    // Adjust to the new position/movement
    keyBox.style.top = `${y}px`;
    keyBox.style.left = `${x}px`;
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- HIDE and SHOW HTML using JS ----------------------------------------------

const myButton = document.getElementById("myButton");
const htmlBox = document.getElementById("htmlBox");

myButton.addEventListener("click", (event) => {
  // EXAMPLE 1: Display
  // if (htmlBox.style.display === "none") {
  //   htmlBox.style.display = "block";
  //   myButton.textContent = "Hide";
  // } else {
  //   htmlBox.style.display = "none";
  //   myButton.textContent = "Show";
  // }

  // EXAMPLE 2: Visibility (To reserve somne space for the box even if it was hidden)
  if (htmlBox.style.visibility === "hidden") {
    htmlBox.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    htmlBox.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- NodeLists In JS ----------------------------------------------
// A Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce). Has a forEach Method.
// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// Example 1: Add HTML/CSS properties
// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😁";
// });

// Example 2: CLICK event listener
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

// Example 3: MOUSEOVER + MOUSEOUT event listener

// MOUSEOVER
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(207, 100%, 40%)";
    event.target.style.cursor = "pointer";
  });
});

// MOUSEOUT
buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(207, 92%, 62%)";
  });
});

// Example 4: Add an element

// STEP 1 CREATE THE ELEMENT
const newButton = document.createElement("button");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newButton.textContent = "Button 5";

// Set the CSS class of a newly created button element to "myButtons" class.
// This approach completely overwrites any existing classes on that button, setting the class list strictly to this single string.
newButton.classList = "myButtons"; // When working with an elements class we with work with classList not class

// STEP 3 APPEND ELEMENT TO DOM
// document.body.appendChild(newButton);

// When logging we won't find the new button.
console.log(buttons);

// so we need to add manually (update)
buttons = document.querySelectorAll(".myButtons");

// Example 5: Remove an element
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    // But to really remove them from the nodeList we need to update after each click/delete
    buttons = document.querySelectorAll(".myButtons");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- classLists In JS ----------------------------------------------
// An Element property in JavaScript used to interact with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements across your webpage.

const classButton = document.getElementById("classButton");

// EXAMPLE 1: .add()
// To add a class to an element, we need to access the "classList" property
classButton.classList.add("enabled"); // This adds a CSS property dynamically to the button

// EXAMPLE 2: .remove()
// To add a class to an element, we need to access the "classList" property
// classButton.classList.remove("enabled"); // This adds a CSS property dynamically to the button

// EXAMPLE 3: .toggle(remove if present, add if not)
classButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

classButton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

// EXAMPLE 4: .replace()
classButton.addEventListener("click", (event) => {
  event.target.classList.replace("enabled", "disabled");
});

// EXAMPLE 5: .contains()
// classButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😡";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

// EXAMPLE 6: Integrating NodeLists With ClassLists
let classButtons = document.querySelectorAll(".classButtons");

// Toggle
classButtons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

classButtons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- Rock Paper Scissors Game With JS ----------------------------------------------
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const scoreDisplay = document.querySelectorAll("scoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(choice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;

  if (choice === computerChoice) {
    result = "It is a tie";
  } else {
    switch (choice) {
      case "rock":
        result = computerChoice === "scissors" ? "You won" : "You lose";
        break;

      case "paper":
        result = computerChoice === "rock" ? "You won" : "You lose";
        break;

      case "scissors":
        result = computerChoice === "rock" ? "You lose" : "You won";
    }
  }
  playerDisplay.textContent = `Player: ${choice} `;
  computerDisplay.textContent = `Computer: ${computerChoice} `;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("redText", "greenText");
  switch (result) {
    case "You won":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;

    case "You lose":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------- Image Slider With JS ----------------------------------------------
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

let intervalId = null;

// intializeSlider();
// If you want to wait for the all the DOM content to load first
document.addEventListener("DOMContentLoaded", intializeSlider);

// This will popularize the browser with the first image
function intializeSlider() {
  // To avoid displaying an image if we don't have one
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  // clearInterval(intervalId)
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  clearInterval(intervalId);
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}
