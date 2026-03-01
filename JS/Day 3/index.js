// JS String Methods
// allows u to manipulate and work with text (strings)

let userName = "Omar";

// nth Character
userName.charAt(1);

// 1st Occurence of a character
userName.indexOf("m");

// last Occurence of a character
userName.lastIndexOf("a");

// length of the string
userName.length;

// Trim (removes whitespace from both ends of a string)
userName.trim();

// Turn all to uppercase
userName.toUpperCase();

// Turn all to lowercase
userName.toLowerCase();

// Repeat
console.log(userName.repeat(2)); // Repeat(x), where x is the number of repetition

// Starts With
console.log(userName.startsWith("O")); //Returns a boolean

// Ends With
console.log(userName.endsWith("O")); //Returns a boolean

// Includes
console.log(userName.includes("O")); //Returns a boolean

// Replace All
console.log(userName.replaceAll("O", "A")); // Replaces all any "O" with "A"

// PadStart
// pads the current string with another string from the start (left) until it reaches a specified length
console.log(userName.padStart(12, "A")); // Keeps adding "A" in start until we reach 12 chars

// PadEnd
// pad the end (right side) of a string with another string until it reaches a specified total length.
console.log(userName.padEnd(12, "A")); // Keeps adding "A" at last until we reach 12 chars

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JS STRING SLICING
// Creating a substring from a portion of another string
// Formula: s.slice(start,end)
// Note: end index is execluded

// ------------ EXAMPLE 1 ------------
const fullName = "Omar";

console.log(fullName.slice(0, 3));

// For the last char
console.log(fullName.slice(-1)); // decreasing the number (e.g., -2, -3) retrieves more characters from the end of the string


// ------------ EXAMPLE 2 ------------

const email = "Omar@gmail.com";

let username = email.slice(0, email.indexOf("@")); //Omar
let extension = email.slice(email.indexOf("@") + 1); //gmail.com

console.log(username);
console.log(extension);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// JS METHOD CHAINING
// Calling one method after another in one continuous line of code.
// By using method chaining, this helps u avoid creating names variables
let user = window.prompt("Enter your username: ");

// ----- NO METHOD CHAINING -----
/*
user = user.trim();
let letter = user.charAt(0);
letter = letter.toUpperCase();

let extraChars = user.slice(1);
extraChars = extraChars.toLowerCase();
user = letter + extraChars;

console.log(user);
*/

// ----- METHOD CHAINING -----

user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();

console.log(user);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
