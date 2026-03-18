// DAY 9

// ---------------------------------- JS Destructuring -------------------------------
// used to extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// EXAMPLE 1: Swap the value of 2 varaibles
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// EXAMPLE 2: SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// EXAMPLE 3: ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXAMPLE 4: EXTRACT VALUES FROM OBJECTS
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "unemployed" } = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
// If any of these are not found in the original object the output will be undefined or u could do as above as a default value

// EXAMPLE 5: DESTRUCTURING IN FUNCTION PARAMETERS
function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  //If the object has a job property it will show it otherwise "unemployed"
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);

////////////////////////////////////////////// ///////////////////////////

// ---------------------------------- JS NESTED OBJECTS -------------------------------
// Objects inside of other Objects.
// Allows you to represent more complex data structures.
// Child Object is enclosed by a Parent Object.
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// EXAMPLE 1
const person = {
  fullName: "spongeBob",
  age: 20,
  address: {
    street: "124 Conch St",
    city: "Bikini Botto",
    country: "Int. Waters",
  },
};

// To print nested object:
// 1. console.log(Person.address.street);
// 2. for(const property in person.address){
// console.log(person.address[property]); // output: "124 Conch St"
// }

// EXAMPLE 2
class Citizen {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const citizen1 = new Citizen(
  "Patrick",
  40,
  "126 Conch St.",
  "Bikini Bottom",
  "Int. Waters",
);

console.log(citizen1.name);
console.log(citizen1.age);
console.log(citizen1.address);
console.log(citizen1.address.street);
console.log(citizen1.address.city);
console.log(citizen1.address.country);

////////////////////////////////////////////// ///////////////////////////

// ---------------------------------- JS ARRAYS of OBJECTS -------------------------------

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

// Access properties of a fruit object
console.log(fruits[0].calories);

// Add a new fruit object
fruits.push({ name: "grapes", color: "purple", calories: 62 });

// Remove the last fruit object
fruits.pop();

// Remove fruit objects by indices
fruits.splice(1, 2);

// forEach(): Loop through array to display names
fruits.forEach((fruit) => console.log(fruit.name));

// map(): Create a new array of just fruit colors
const fruitColors = fruits.map((fruit) => fruit.color);
console.log(fruitColors);

// filter(): Create a new array of fruits with calories < 100
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
console.log(lowCalFruits);

// reduce(): Find the fruit with the maximum calories
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max,
);
console.log(maxFruit);

////////////////////////////////////////////// ///////////////////////////

// ---------------------------------- JS Sorting -------------------------------
// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// EXAMPLE 1
let myFruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// when sorting we treat any element as string
myFruits.sort();

console.log(myFruits);

// EXAMPLE 2
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Custom comparison function
// we will examine 2 contiguos elements (a,b)
numbers.sort((a, b) => a - b);
// order: a-b
// reverse order: b-a

console.log(numbers);

// EXAMPLE 3: sort object given property
const people = [
  { name: "spongebob", age: 30, gpa: 3.0 },
  { name: "patrick", age: 37, gpa: 1.5 },
  { name: "squidward", age: 51, gpa: 2.5 },
];

// if we need to sort by a property that contains a string in an object we do this:
people.sort((a, b) => a.name.localeCompare(b.name)); // this method will examine two strings for lexographic order

// Sort by age
people.sort((a, b) => a.age - b.age);

console.log(people);

////////////////////////////////////////////// ///////////////////////////
// ---------------------------------- JS ARRAY SHUFFLE  -------------------------------

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// It is not recommended to use such method, because the result is not perfectly uniform
cards.sort(() => Math.random() - 0.5);
// Also the larger the array becomes this method becomes increasingly unefficient

console.log(cards);

////////////////////////////////////////////// ///////////////////////////

// To shuffle an array it would be better to use

// ---------------------------------- JS The Fisher–Yates algorithm -------------------------------
// The Fisher–Yates shuffle is an algorithm for shuffling a finite sequence.
// The algorithm takes a list of all the elements of the sequence, and continually determines the next element in the shuffled sequence by randomly drawing an element from the list until no elements remain.
// The algorithm produces an unbiased permutation: every permutation is equally likely.
// The modern version of the algorithm takes time proportional to the number of items being shuffled and shuffles them in place.

shuffle(cards);

console.log(`This is the card after shuffling: ${cards} `);

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    console.log(random);

    // We will use destructring to swap elements (currebt position with current position)
    [cards[i], cards[random]] = [cards[random], cards[i]];
  }
}

////////////////////////////////////////////// ///////////////////////////

// ---------------------------------- JS DATE Objects -------------------------------
// They are objects that contains values that reperesnt dates and times
// They can be changed and formatted to suit our needs

// EXAMPLE 1: Today's/Current Date & Time
const date = new Date();
console.log(date); // Wed Mar 18 2026 06:10:03 GMT+0200 (Eastern European Standard Time)

// EXAMPLE 2: Custom Date & Time
// Date(year, month, day, hour, minute, second, ms)
const customDate = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(customDate); // Mon Jan 01 2024 02:03:04

// EXAMPLE 3: Custom Date & Time
// Date(year, month, day)
const newDate = new Date(24, 10, 18);
console.log(newDate); // Nov 18 1924

// EXAMPLE 4: Custom Date & Time (as a string)
const customStringDate = new Date("2024-01-02T12:00:00");
console.log(customStringDate); // Mon Jan 01 2024 02:03:04

// EXAMPLE 5: Time since epoch (the date where your computer thinks the time begun )
const epochDate = new Date(1700000000000000); // pass to the date constructor a given amount of time in milliseconds since epoch
console.log(epochDate); // Mon Jan 01 2024 02:03:04

// EXAMPLE 6: Compare Dates
const date1 = new Date("2024-12-01");
const date2 = new Date("2024-10-22");

// EXAMPLE 7: Custom Date & Time
const date3 = new Date("2024");
console.log(date3); // January 01 2024

// EXAMPLE 8: Number of MilliSeconds
let x = Date.parse("March 30, 2011");
console.log(x); // The number of milliseconds between March 30, 2011 and January 1, 1970

if (date1 > date2) {
  console.log("Date 1 is older");
}

// Extract/Set Year
const year = date.getFullYear();
date.setFullYear(2024);

// Extract/Set Month (Note: Jan is 0, Feb is 1, ...)
const month = date.getMonth();
date.setMonth(0);

// Extract/Set Day
const day = date.getDate();
date.setDate(1);

// Extract/Set Hours
const hours = date.getHours();
date.setHours(2);

// Extract/Set Minutes
const minutes = date.getMinutes();
date.setMinutes(3);

// Extract/Set Seconds
const seconds = date.getSeconds();
date.setSeconds(4);

// Set TIME
date.setTime(188888); // number of Milliseconds since January 1, 1970

// Extract Day of Week (Note: Sunday is 0, Monday is 1, ...)
const dayOfWeek = date.getDay();
