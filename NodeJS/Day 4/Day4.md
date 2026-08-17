# Day 4 Summary

## Events Module & EventEmitter

The events module provides the EventEmitter class. An event in Node.js is simply a signal that something has occurred. To use it, you create an instance of the class.

## Raising and Listening for Events

### emit():

Used to signal that an event has occurred (e.g., emitter.emit('messageLogged')).

### on():

Used to register a listener (callback function) that will execute when the specific event is raised.

## Event Arguments

You can pass data alongside an event by adding arguments to the emit() method. It is best practice to encapsulate these values within an object so multiple pieces of information (like an ID or URL) can be passed at once.

## Extending EventEmitter

In real-world applications, you rarely use the EventEmitter object directly. Instead, you create a custom class that extends EventEmitter (using the extends keyword).
This allows your custom class to inherit all event capabilities while maintaining its own specific functionality.
When inside the class, use this.emit() to raise events. This ensures that the object raising the event is the same one the listener is watching.

## Building Web Servers

### Creating a Server
You can use http.createServer() to build a web server that listens for requests on a specific port (e.g., 3000)

### Event-Driven Nature
The server object is an EventEmitter  You can listen for various events, such as a 'connection' event, which triggers whenever a client connects to the server 

### Handling Requests
Instead of low-level socket handling, developers typically pass a callback function to createServer(). This function receives request and response objects, allowing you to route traffic based on the request.url 

### Sending Responses 
You can use response.write() to send data back to the client and response.end() to complete the request. For API endpoints, JSON.stringify() is used to format data (such as arrays or objects) for the client 

### Limitations & Next Steps 
While the http module is powerful, it becomes difficult to manage as the number of routes increases because the logic remains linear within a single callback. The video concludes by recommending the Express framework, which is built on top of the HTTP module to provide a more structured and scalable way to handle routing 
