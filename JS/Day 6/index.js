// Day 6

// --------------------------- JS Arrays ------------------------------
// a variable like structure that can
// hold more than 1 value

let fruits = ["apple", "orange", "banana"];
// const fruits = new Array ('Orange', 'Banana', 'Apple'); //Alternate way for creating an array

fruits.push("coconut"); // add an element to the end of the array
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to beginning
fruits.shift(); // removes element from beginning

let numOfFruits = fruits.length; // Size of an array
let index = fruits.indexOf("coconut"); // to find the index of a specific element, if the element does not exist the method will return a value of -1

// Looping through the elements of an array (Shortcut/Enhanced)
for (let fruit of fruits) {
  console.log(fruit); //prints the elements of an array
}

fruits.sort(); // Sorting an array in alphabetical order
fruits.sort().reverse; // Sorting an array in reverse alphabetical order

/////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------- 2D ARRAYS in JS ------------------------------
// multi-dimensional array that stores a matrix
// of data in rows and columns.
// Useful for games, spreadsheets, or representing images

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// The length of rows and cols does not need necessarily to be uniform
// We can also mix and match datatypes (string,char,number)

// access a specific element: matrix[row][col]
//matrix[0][0] = 'X';
//matrix[0][1] = 'O';
//matrix[0][2] = 'X';

//matrix[1][0] = 'O';
//matrix[1][1] = 'X';
//matrix[1][2] = 'O';

//matrix[2][0] = 'X';
//matrix[2][1] = 'O';
//matrix[2][2] = 'X';

for (let row of matrix) {
  const rowString = row.join(" "); // to print individual values, join each elements of the same row and seperate them with space character ('')
  console.log(rowString);
  // Output: 1 2 3
  //         4 5 6
  //         7 8 9
}

/////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------- JS Spread Operator ------------------------------
// =  ... allows an iterable such as an
// array or string to be expanded
// in to separate elements
// (unpacks) the elements)

// EXAMPLE 1
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers); // spread the array into different elements (imagine you are opening a bocx and taking all of what is inside)

console.log(maximum);

// EXAMPLE 2
let username = "omar";
let letters = [...username].join("-"); // spreads the string into array of characters, then they are sepearted with a dash between each character 

console.log(letters);


// EXAMPLE 3
let fruits1 = ["apple", "orange", "banana"];
let newfruits = [...fruits1]; // shallow copy (different data structure but contains identical values)

console.log(newfruits);

/////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------- JS REST PARAMETERS ------------------------------
// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// EXAMPLE 1 
function openFridge(...foods){ // ..."foods" is the array name 
    console.log(foods);
    // console.log(...foods); you can spread them again if you would like
    
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";

openFridge(food1,food2,food3); // here we will send the elemnts that we want to combine using the rest parameters (u can send any number of arguments u want)

// EXAMPLE 2 
function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);

// EXAMPLE 3
function combineStrings(...strings){
    return strings.join(" "); // join all strings with space (" ") between each
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);

/////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------- JS dice roller program ------------------------------

function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceImg = document.getElementById("diceImg");
  const diceRes = document.getElementById("diceRes");
  const values = [];
  const images = [];

  for(let i =0; i<numOfDice; i++){
    const value = Math.floor(Math.random() *6) + 1;
    values.push(value);
    images.push(`<img src="Media/${value}.png" alt="dice ${value}">`)
  }

  diceRes.textContent = `dice: ${values.join(', ')}`
  diceImg.innerHTML = `${images.join('')}`  

}

/////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------- JS random password generator  ------------------------------


function generatePassword(passLength, upperCase, lowerCase, numbersCase, specialCase){
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let password = ""
  let allowedChars = "";
  
  allowedChars += lowerCase ? lowercaseChars: "";
  allowedChars += upperCase ? uppercaseChars: ""; 
  allowedChars += numbersCase ? numberChars: ""; 
  allowedChars += specialCase ? symbolChars: ""; 

  if(passLength <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

  for (let i = 0; i < passLength; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index]     
  }

  return password;
}

const passLength = 8;
const upperCase = true;
const lowerCase = true;
const numbersCase = true;
const specialCase = true;


const generatedPassword = generatePassword(passLength, upperCase, lowerCase, numbersCase, specialCase)

console.log(generatedPassword);
