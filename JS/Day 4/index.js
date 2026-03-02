// JS LOGICAL OPERATORS
// used to combine or manipulate Boolean values
// AND = &&
// OR  = ||
// NOT = !

// Example

let temp = 25;

// AND
if (temp > 0 && temp <= 30) {
  console.log("weater is good");
}

// OR
else if (temp <= 0 || temp > 30) {
  console.log("weater is bad");
} else {
  console.log("weater is bad");
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// JS STRICT EQUALITY
//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

// String and Integer(number)
if (PI === "3.14") {
  console.log("That is NOT Pi");
} else {
  console.log("That is Pi");
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// JS While Loops

// Example 1
let username = "";

// while (username === "") {
//   username = window.prompt(`Enter your username`); // if user clicks cancel the username will be equal to null
// }

console.log(`Hello ${username}`);

// Example 2
let loggedIn = false;
let myUser;
let password;

// In the do-while we will execute the do part first even if the condition was false then start checking
do {
  myUser = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (myUser === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials! Please try again");
  }
} while (!loggedIn);

//////////////////////////////////////////////////////////////////////////////////////////////////

// JS For Loops
// Repeat a code for a limited amount of time

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue; //This will let the loop skip 5
  } else if (i == 8) {
    break; // Breaks out of the loop entirely when i equals 8
  } else {
    console.log(i);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// JS NUMBER GUESSING GAME

let min = 50;
let max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let run = true;
let take = 0;
let guess;
while (run) {
  guess = window.prompt(`Guess an number between ${min} and ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`please enter a valid number`);
  } else if (guess < min || guess > max) {
    window.alert(`please enter a valid number`);
  } else {
    take++;
    if (guess > answer) {
      window.alert("Too High");
    } else if (guess < answer) {
      window.alert("Too Low");
    } else {
      window.alert(
        `Congrats, you took ${take} guesses to find the number ${answer}`,
      );
      run = false;
    }
  }
}
// console.log(answer);
