// --------------------------------------------------------- Events Module ----------------------------------------------------------------

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener (name of the event, callback function)
emitter.on("messageLogged", function () {
  console.log("listener called");
});

// Raise an event
emitter.emit("messageLogged");

// If you register a listener after the event is raised, it will not be called because the event has already been emitted.

//--------------------------------------------------------- Events Module with Arguments ----------------------------------------------------------------

// Register a listener (name of the event, callback function)
emitter.on("messageLogged", (arg) => {
  // could be 'e' or 'arg'
  console.log("listener called", arg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "https;//" }); // add arguments to the event, which will be passed to the listener function

// -------------------------------------------------------------- Extending EventEmitter ----------------------------------------------------------------------

const Logger = require("./logger.js");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  // could be 'e' or 'arg'
  console.log("listener called", arg);
});

logger.log("message");

// ---------------------------------------------------------- HTTP Module -----------------------------------------------------------

const http = require("http");

// Creating a Server (Example 1)
const server = http.createServer();

// Creating a Server (Example 2)
// Instead of low-level socket handling, you would pass a callback function to createServer()
const server = http.createServer((req, res) => {
  // This function receives request and response objects,
  // allowing you to route traffic based on the request.url
  if (req.url === "/") {
    res.write("Hello WOrLD");
    res.end;
  }

//   You can use response.write() to send data back to the client.
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3])); // For API endpoints, JSON.stringify() is used to format data (such as arrays or objects) for the client

    res.end();
  }
});

// The server object is an EventEmitter You can listen for various events,
// such as a 'connection' event, which triggers whenever a client connects to the server.
server.on("connection", (socket) => {
  console.log("New connection");
});

// listens for requests on a specific port
server.listen(3000);

console.log("Listening on port 3000");
