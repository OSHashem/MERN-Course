const EventEmitter = require("events");

var url = "http://mylogger.io/log";

// Create a custom class that extends EventEmitter (using the extends keyword).
// This allows your custom class to inherit all event capabilities while maintaining its own specific functionality.
class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;