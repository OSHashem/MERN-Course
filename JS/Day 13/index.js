// DAY 13

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ JS Callback Hell ----------------------------------------------
// A Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous functions.
// Soon, Use Promises + async/await to avoid Callback Hell

// EXAMPLE 1: synchronous code
// function task1() {
//   console.log("Task 1 is completed");
// }

// function task2() {
//   console.log("Task 2 is completed");
// }

// function task3() {
//   console.log("Task 3 is completed");
// }

// function task4() {
//   console.log("Task 4 is completed");
// }

// task1();
// task2();
// task3();
// task4();

// EXAMPLE 2: asynchronous code
// function task1() {
//   setTimeout(() => {
//     console.log("Task 1 is completed");
//   }, 2000);
// }

// function task2() {
//   setTimeout(() => {
//     console.log("Task 2 is completed");
//   }, 1000);
// }

// function task3() {
//   setTimeout(() => {
//     console.log("Task 3 is completed");
//   }, 3000);
// }

// function task4() {
//   setTimeout(() => {
//     console.log("Task 4 is completed");
//   }, 1500);
// }

// task1();
// task2();
// task3();
// task4();

// EXAMPLE 3: callback hell
// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 is completed");
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 is completed");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 is completed");
//     callback();
//   }, 3000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 is completed");
//     callback();
//   }, 1500);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("all task are completed");
//       });
//     });
//   });
// });

// Note: 4 levels of callback is not too unreasonable, but when you add additional levels on top of that it becomes difficult to read and maintain the code.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ JS PROMISES ----------------------------------------------
// An Object that manages asynchronous operations. Such as querying a DB, fetching a file, gathering rescouces.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// Form(arrow function): new Promise((resolve, reject) => { asynchronous code })
// Used to avoid Callback Hell and make asynchronous code easier to read and maintain.

// EXAMPLE 1
// 1. WALK THE DOG
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true; // change this to false to test the reject case
      if (dogWalked) {
        resolve("you walk the dog "); // display the message when the promise is resolved, the message is the value.
      } else {
        reject("You did not walk the dog"); // display the message when the promise is rejected, the message is the reason for rejection.
      }
    }, 2000);
  });
}
// 2. CLEAN THE KITCHEN
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true; // change this to false to test the reject case

      if (kitchenCleaned) {
        resolve("You have clean the kitchen"); // display the message when the promise is resolved, the message is the value.
      } else {
        reject("you did not clean the kitchen"); // display the message when the promise is rejected, the message is the reason for rejection.
      }
    }, 2000);
  });
}
// 3. TAKE OUT THE TRASH
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true; // change this to false to test the reject case

      if (trashTakenOut) {
        resolve("You have taken out the trash"); // display the message when the promise is resolved, the message is the value.
      } else {
        reject("You did not take the trash out"); // display the message when the promise is rejected, the message is the reason for rejection.
      }
    }, 2000);
  });
}

// Method Chaining to avoid Callback Hell
// Value here is the message that we resolve in the promise, and we can use it in the then() method.
// .catch() method is used to handle the rejected case, and it takes a callback function that has the reason for rejection as a parameter.
// If the first promise is rejected, the second and third promise will not be executed, and the catch() method will be executed to handle the error. If the first promise is resolved, the second promise will be executed, and if the second promise is resolved, the third promise will be executed. If any of the promises are rejected, the catch() method will be executed to handle the error.
// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished the chores");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ JS ASYNC/AWAIT ----------------------------------------------
// Async = makes a function return a promise
// Await = makes an async function wait for a promise
// Allows you to write asynchronous code in a synchronous manner
// Everything after Await is placed in an event queue

// Async doesn't have resolve or reject parameters
// async function takeOutTrash() {
//   return new Promise(() => {
//     setTimeout(() => {
//       const trashTakenOut = true; // change this to false to test the reject case

//       if (trashTakenOut) {
//         resolve("You have taken out the trash"); // display the message when the promise is resolved, the message is the value.
//       } else {
//         reject("You did not take the trash out"); // display the message when the promise is rejected, the message is the reason for rejection.
//       }
//     }, 2000);
//   });
// }

// EXAMPLE 1: using async/await to handle promises
async function doChores() {
  try {
    // If the first promise is rejected, the second and third promise will not be executed, and the catch() method will be executed to handle the error.
    // If the first promise is resolved, the second promise will be executed, and if the second promise is resolved, the third promise will be executed.
    // If any of the promises are rejected, the catch() method will be executed to handle the error.

    // await is only valid in async functions.
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finsihed all the chores!");
  } catch (error) {
    console.error(error);
  }
}

doChores();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ JSON Files ----------------------------------------------
// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files format: {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a one long JSON string.
// JSON.parse() = converts a JSON string to a JS object

// EXAMPLE 1: JSON.stringify(objectToConvert)
const names = ["spongebob", "patrick", "sandy"];
const person = {
  name: "spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["jellyfishing", "cooking", "karate"],
};

const jsonString = JSON.stringify(names);
const personString = JSON.stringify(person);
console.log(jsonString);

// EXAMPLE 2: JSON.parse(jsonStringToConvert)
const jsonNames = `["spongebob", "patrick", "sandy"]`;
const jsonPerson = `{"name":"spongebob","age":30,"isEmployed": true,"hobbies": ["jellyfishing", "cooking", "karate"]}`;

const parsedNames = JSON.parse(jsonNames);
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);

// EXAMPLE 3: fetching a json file . fetch(relative or absolute path to the json file or a url)

fetch("person.json")
  .then((response) => response.json()) // response.json() is a method that parses the JSON string and returns a promise that resolves to a JS object.
  .then((value) => {
    console.log(value); // value is the JS object that we parsed from the JSON string in the person.json file.
  })
  .catch((error) => console.error(error)); // catch() method is used to handle any errors that may occur during the fetch or parsing process, and it takes a callback function that has the error as a parameter.
// .then((values)=> values.forEach((value)=> console.log(value.name))) // if the JSON file contains an array of objects, we can use forEach() method to iterate through the array and log each object to the console.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ JS COOKIES ----------------------------------------------
// A small text file stored on your computer used to remember information about the user
// It is saved in name=value pairs.
// Between each name = value pair there is a semicolon and a space. For example: name=value; name2=value2; name3=value3

// To check if cookies are enabled in the browser.
// console.log(navigator.cookieEnabled);

// EXAMPLE 1: creating a cookie
// document.cookie =
//   "firstName=Spongebob; expires=Sun, 1 January 2027 12:00:00 UTC; path=/";
// document.cookie =
//   "lastName=SquarePants; expires=Sun, 1 January 2027 12:00:00 UTC; path=/";
// // When the current time is passed a certain expiration date, cookie will deleted.

// Example 2: function to create a cookie instead of doing it mannually
function setCookie(name, value, daysToLive) {
  const date = new Date();

  // Sets the time for the date object to the current time plus the number of milliseconds in the specified daysToLive.
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);

  // Formats the expiration date into a UTC string as required by the document.cookie API
  let expires = "expires =" + date.toUTCString();

  // Assign the cookie string to the document.cookie property, which sets the cookie in the browser
  document.cookie = `${name} = ${value}; ${expires}; path=/`;
}

// setCookie("email", "sponge@gmail.com", "365");
// setCookie("firstName", "Spongebob", "365");
// setCookie("lastName", "Squarepants", "365");

// EXAMPLE 3 : Function to delete a cookie
function deleteCookie(name) {
  setCookie(name, null, null);
}

// deleteCookie("firstName");
// deleteCookie("email");
// deleteCookie("lastName");

// EXAMPLE 4 : Function to get a cookie value by name
function getCookie(name) {
  // Retrieves the entire document.cookie string and decodes any special characters that might have been URL-encoded when the cookie was set using
  const cDecoded = decodeURIComponent(document.cookie);

  // Splits the decoded cookie string into an array of individual cookies using "; " as the delimiter, since cookies are typically separated by a semicolon and a space.
  const cArray = cDecoded.split("; ");

  // This will store the value of the cookie that matches the specified name. It is initialized as undefined, and will be assigned a value if a matching cookie is found in the array.
  let result;

  cArray.forEach((cookie) => {
    // Inside the loop, it checks if the current cookie string starts with the provided name
    if (cookie.indexOf(name) == 0) {
      // If a match is found, it extracts the value by taking the substring starting from after the name and the equals sign (=)
      result = cookie.substring(name.length + 1);
    }
  });
  return result;
}

// EXAMPLE 5 : HTML + JS to set a cookie with user input
const cookiesBtn = document.getElementById("cookiesBtn");
const submitBtn = document.getElementById("submitBtn");
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookiesBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

// The expires and path attributes are not included when reading a cookie, only the name=value pairs are included. If there are multiple cookies, they will be separated by a semicolon and a space.
// If a cookie is expired/deleted, it will not be included when reading the cookies.
console.log(document.cookie);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------ FETCH data from an API using JS ----------------------------------------------
// Function used for making HTTP requests to fetch resources.
// Ex: (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// Format: fetch(url, {Object of options (Default: "GET","POST","PUT","DELETE")})

// EXAMPLE 1: fetch data from an API
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    // The "Response.ok" refers to a boolean property, it indicates whether an HTTP response was successful.
    if (!response.ok) {
      throw new Error("Could not fetch the resource");
    } else {
      return response.json(); // response.json() is a method that parses the JSON string and returns a promise that resolves to a JS object.
    }
  })
  .then((value) => {
    console.log(value.name); // value is the JS object that we parsed from the JSON string.
  })
  .catch((error) => console.error(error)); // catch() method is used to handle any errors that may occur during the fetch or parsing process, and it takes a callback function that has the error as a parameter.

// EXAMPLE 2: fetch data from an API using async/await
async function fetchData() {
  try {
    const pokemonSprite = document.getElementById("pokemonSprite");
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );
    if (!response.ok) {
      throw new Error("Could not fetch the resource");
    } else {
      const data = await response.json();
      pokemonSprite.src = data.sprites.front_default;
      pokemonSprite.style.display = "block";
      pokemonSprite.alt = data.name;
      pokemonSprite.style.width = "200px";
      pokemonSprite.style.height = "200px";
    }
  } catch (error) {
    console.error(error);
  }
}

// fetchData("https://pokeapi.co/api/v2/pokemon/pikachu");
