// JS Math Objects
// It is a bulit-in object that provides a collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

// Round
let x = 3.21;
x = Math.round(x);

// Floor (Rounds Down)
let y = 3.99;
y = Math.floor(y);

// Ceil (Rounds Up)
let z = 3.21;
z = Math.ceil(z);

// Truncate (Eleminates any decimal portion)
let a = 3.21;
a = Math.trunc(a);

// Power
let b = 3;
let c = 2;
console.log(Math.pow(b, c)); // 3^(2) = 9

// Square Root
// Math.sqrt(x)

// Log
// Math.log(x)

// Sin
// Math.sin(x); (x is an angle measured in radians)

// Cos
// Math.cos(x); (x is an angle measured in radians)

// Tan
// Math.tan(x); (x is an angle measured in radians)

// Absloute
// Math.abs(x);

// Sign of Number
// Math.sign(x); (-1 for negative numbers, 1 for positive, 0 for 0)

// Max
// Math.max(x,y,z);

// Min
// Math.min(x,y,z);

////////////////////////////////////////////////////////////////////////////////////////////////

// JS Random Number Generator

Math.random(); // This will generate a random number between 0 and 1

// A random number between 1 and 6
let min = 1;
let max = 6;
let btn = document.getElementById("mybtn");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");

btn.onclick = function () {
  let randnum1 = Math.floor(Math.random() * max) + min;
  let randnum2 = Math.floor(Math.random() * max) + min;
  let randnum3 = Math.floor(Math.random() * max) + min;

  label1.textContent = randnum1;
  label2.textContent = randnum2;
  label3.textContent = randnum3;
};

/////////////////////////////////////////////////////////////////////////

// JS If Statements

let submitButton = document.getElementById("submitbtn");
let statement = document.getElementById("statement");
let realAge = document.getElementById("age");
let age;

submitButton.onclick = function () {
  age = realAge.value;
  age = Number(age);
  console.log(age);

  if (age >= 100) {
    statement.textContent = "You are too old";
  } else if (age == 0) {
    statement.textContent = "You were just born";
  } else if (age >= 18) {
    statement.textContent = "You are allowed";
  } else if (age < 0) {
    statement.textContent = "This is invalid";
  } else {
    statement.textContent = "You are too young ";
  }
};

///////////////////////////////////////////////////////////////

// JS checked property
// .checked = property that determines the checked state of an
// html check box or radio button element

const payRes = document.getElementById("payRes");
const subRes = document.getElementById("subRes");
const mySubmit = document.getElementById("mySubmit");
const palBtn = document.getElementById("palBtn");
const masterBtn = document.getElementById("masterBtn");
const visaBtn = document.getElementById("visaBtn");
const subscribe = document.getElementById("subscribe");

mySubmit.onclick = function () {
  if (subscribe.checked) {
    subRes.textContent = "you are sub";
  } else {
    subRes.textContent = "you are not sub";
  }

  if (visaBtn.checked) {
    payRes.textContent = "you will pay by visa";
  } else if (masterBtn.checked) {
    payRes.textContent = "you will pay by master";
  } else if (palBtn.checked) {
    payRes.textContent = "you will pay by pal";
  } else {
    payRes.textContent = "you have to choose a payment method";
  }
};

///////////////////////////////////////////////////////////////

// JS TERNARY OPERATOR
// It is shortcut to IF and ELSE statements
// Condition ? codeIfTrue : codeIfFalse

// Number Example
let yourAge = 20;
let msg = yourAge >= 18 ? "you are adult" : "you are minor";
console.log(msg);

// Boolean Example
let isStudent = false;
let mssg = isStudent ? "you are student" : "you are Not student";
console.log(mssg);

////////////////////////////////////////////////////////////////

// JS SWITCHES
// Can be an effiecent replacement to many Else IF statements

// Example

let testScore = 86;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break; // used to break out of a switch
          // If we don't have them, once we have we will execute
          //  the code and any code that follows after
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = 'F';
}

console.log(letterGrade);

