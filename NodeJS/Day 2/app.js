// ------------------------------------------------------- Global Scope vs. Module Scope --------------------------------------------------

// Global Objects
// console.log();

// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// Any of these belong to both global and window object
// Example:
// window.console.log();
// global.console.log();

// Encapsulation: Variables and functions defined in a file are not added to the global object. 
// They are scoped specifically to that file, which acts as a private module
// This prevents naming collisions, a common issue in browser-based JavaScript
// By default, members (variables/functions) inside a module are private.
// var message = "h";
// console.log(global.message); // undefined

// -------------------------------------------------- Creating Modules --------------------------------------------------------------

// Use the require() function to import modules. 
// It is best practice to store these in const variables to prevent accidental reassignment.
const logger = require('./logger.js'); 

logger.log('message');
