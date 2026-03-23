// DAY 10

// ------------------------------------ JS CLOSURES -------------------------------
// Closure is a function defined inside of another function.
// the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

// EXAMPLE 1: private variables
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

message = "Goodbye";

console.log(message); // Output: Goodbye

outer(); // Output: Hello

// EXAMPLE 2: state maintenance
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  // will make us retrieve the count variable
  function getCount() {
    return count;
  }

  return { increment, getCount };
}

// Create an object with all children method returned, to be able to access them later through the new object
const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log(counter.count); // Undefined, it is hidden

console.log(`Current count: ${counter.getCount()}`);

// EXAMPLE 3

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

// Create an object with all children method returned, to be able to access them later through the new object
const game = createGame();

game.increaseScore(225);
game.decreaseScore(22);

console.log(`The final score is : ${game.getScore()} pts`);

/////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------ JS setTimeout() -------------------------------
// It is a function in JavaScript that allows you to schedule the execution of a function after an amount of time.
// Note: Times are approximate
// Form: setTimeout(callback, delay);

// EXAMPLE 1 setTimeout w/ callback
function hello() {
  window.alert("Hello There");
}

// setTimeout(hello, 3000);

// EXAMPLE 2: setTimeout w/ anonymous functions
// setTimeout(function () {
//   window.alert("Hello There");
// }, 3000);

// EXAMPLE 3: setTimeout w/ arrow funcitons
// setTimeout(() => window.alert("Hello There"), 3000);

// EXAMPLE 4: clearTimeout(timeoutId), cancel a timeout before it triggers
// const timeoutId = setTimeout(() => window.alert("Hello There"), 3000);

// clearTimeout(timeoutId);

// EXAMPLE 5: Start & Clear Timer With Buttons
let timeoutButton;

function startTimer() {
  timeoutButton = setTimeout(() => window.alert("Hello There"), 3000);
  console.log("Stat");
}

function clearTimer() {
  clearTimeout(timeoutButton);
  console.log("Claer");
}

/////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------ JS console.time() -------------------------------
// A tool that allows you to measure the time it takes for a section of code or process to execute.
// Great for identifying performance "bottlenecks".

// EXAMPLE 1: Check how long does a specific block takes time to finish
console.time("Test");
// for (let index = 0; index < 1000000; index++) {
//   // pretend to load some data
// }
console.timeEnd("Test");

// EXAMPLE 2: Check how long does a specific method takes time to finish
function loadData() {
  console.time("loadData");
  for (let index = 0; index < 1000000; index++) {
    // pretend to load some data
  }
  console.timeEnd("loadData");
}

function processData() {
  console.time("processData");
  for (let index = 0; index < 1000000000; index++) {
    // pretend to process some data
  }
  console.timeEnd("processData");
}

// loadData();
// processData();

/////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------ JS digital clock -------------------------------
// Format the date to Cairo's time zone using the Intl API

function updateClock() {
  // To get Current Date & Time
  const now = new Date();

  // To get Current Hours
  let hours = now.getHours();

  // For AM & PM
  const meridiem = hours >= 12 ? "PM" : "AM";

  // To convert from a 24-hr to 12-hr format
  hours = hours % 12 || 12;

  // Convert to string to be able to pad, allowing us to add 0's in the beginning for the first 2 digits only
  hours = hours.toString().padStart(2, 0); // We padded here because the modulus operation erased it

  // To get Current Minutes
  const minutes = now.getMinutes().toString().padStart(2, 0); // Convert to string to be able to pad, allowing us to add 0's in the beginning for the first 2 digits only

  // To get Current Seconds
  const seconds = now.getSeconds().toString().padStart(2, 0); // Convert to string to be able to pad, allowing us to add 0's in the beginning for the first 2 digits only

  // Arrange Numbers -> Hours:Minutes:Seconds
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem} `;

  // Change the content of the clock to the new arranged timeString
  document.getElementById("clock").textContent = timeString;
}

updateClock();
// To get it update to the new current time each second
setInterval(updateClock, 1000);

// const cairoTime = now.toLocaleString("en-EG", {
//   timeZone: "Africa/Cairo",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   hour12: true, // or false for 24-hour format
// });
// console.log(cairoTime);

/////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------ JS StopWatch -------------------------------

const display = document.getElementById("display");

// Timer is going to hold the id of setInterval to help us keep track and stop it if we need to
let timer = null; // No value

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startWatch() {
  // If the stopwatch is not currentlt running, then start the stopwatch
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; // Date.now() returns the number of milliseconds elapsed since January 1, 1970
    timer = setInterval(updateWatch, 10);
    isRunning = true;
  }
}

function stopWatch() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetWatch() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = `00:00:00:00 `;
}

function updateWatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  // Convert Milliseconds to hours, divide by (1000 Ms *60 seconds *60 minutes)
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  // Convert Milliseconds to minutes, divide by (1000 Ms *60 seconds %60, this will limit the minutes to 60 so when the count hits 60 it resets to 0)
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  // Convert Milliseconds to seconds, divide by (1000 Ms %60, this will limit the minutes to 60 so when the count hits 60 it resets to 0)
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // Convert to string to be able to pad, allowing us to add 0's in the beginning for the first 2 digits only
  hours = String(hours).padStart(2, 0);

  minutes = String(minutes).padStart(2, 0);

  seconds = String(seconds).padStart(2, 0);

  milliseconds = String(milliseconds).padStart(2, 0);

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds} `;
}
