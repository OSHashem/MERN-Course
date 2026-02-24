// Introduction to JavaScript

console.log("Hello");

// window.alert("I hate js");

// This is a comment

document.getElementById("myP").textContent = "I hate js";

//////////////////////////////////////////////////////////////////////////

// JS Variables

// Variable names need to be unique

// Number
let age = 23;
// String
let fname = "omar";
// Boolean
let isStudent = false;

document.getElementById("name").textContent =
  `Your name is ${fname} of type ${typeof fname} `;
document.getElementById("age").textContent =
  `Your age is ${age} of type ${typeof age}`;
document.getElementById("student").textContent =
  `Enrolled: ${isStudent} of type ${typeof isStudent}`;

////////////////////////////////////////////////////////////////////////////////////////////

// JS ARITHMETIC OPERATORS
// Operands: Values, variables
// Operators: + - * /
// Operator Precednece:
// 1. Parentheses
// 2. Exponents
// 3. Multiplication/Division/Modulus
// 4. Addition/Subtraction

let students = 20;

// Normal Operators
students = students + 1; //21
students = students ** 2; //440
students = students % 2; //0

//Augented assignment operators
students += 1; //21
students *= 2; //40
students **= 2;
students /= 2;

students++; //21
students--; //20

// JS User Input
// There are 2 ways to get user iput in JS:
// 1. Easy way = window prompt
// 2. hard way = HTML form + JS event listener

// 1. Easy Way
let userName = window.prompt("What is Your Name?");

// 2. Hard Way
let myname;

document.getElementById("myButton").onclick = function () {
  myname = document.getElementById("myInput").value;
  console.log(myname);
};

///////////////////////////////////////////////////////////////////

// JS Type Conversion

// String to number

let myAge;

document.getElementById("tc").onclick = function () {
  myAge = document.getElementById("str").value;
  myAge = Number(myAge);
  myAge += 1;
  document.getElementById("int").textContent = myAge;
};

// Number Examples
let x = "pizza";
x = Number(x);
console.log(x, typeof x); // NaN, Number

let a = "0";
a = Number(a);
console.log(a, typeof a); // 0, Number

let d = "";
d = Number(d);
console.log(d, typeof d); // 0, Number

let g;
g = Number(g);
console.log(g, typeof g); // NaN, Number

// String Examples
let y = "pizza";
y = String(y);
console.log(y, typeof y); // pizza, string

let b = "0";
b = String(b);
console.log(b, typeof b); // 0, string

let e = "";
e = String(e);
console.log(e, typeof e); // "", string

let h;
h = String(h);
console.log(h, typeof h); // undefined, string

// Boolean Examples
let z = "pizza";
z = Boolean(z);
console.log(z, typeof z); // true, boolean (as long there is a value the boolean value will be true )

let c = "0";
c = Boolean(c);
console.log(c, typeof c); // true, boolean (as long there is a value the boolean value will be true )

let f = "";
f = Boolean(f);
console.log(f, typeof f); // false, boolean (can be used to check if user did not type/enter text)

let i;
i = Boolean(i);
console.log(i, typeof i); // false, boolean

//////////////////////////////////////////////////////////////////////////

// JS constants
// constant is a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// If we tried to change the value of PI we will get an Uncaught TypeError

document.getElementById("const").onclick = function () {
  radius = document.getElementById("radius").value;
  radius = Number(radius);
  circumference = PI * 2 * radius;
  document.getElementById("cir").textContent = circumference + "cm";
};

//////////////////////////////////////////////////////////////////////////////

// JS COUNTER PROGRAM
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const countLabel = document.getElementById("number");


let counter = 0;

increasebtn.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}

decreasebtn.onclick = function(){
    counter--;
    countLabel.textContent = counter;
}

resetbtn.onclick = function(){
    counter=0;
    countLabel.textContent = counter;
}


