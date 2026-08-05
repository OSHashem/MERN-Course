# Day 1: Introduction to Node.js

## What is Node.js?

### Definition: 
An open-source, cross-platform runtime environment that allows you to execute JavaScript code outside of the browser.

### Use Case: 
Primarily used for building highly scalable, data-intensive, and real-time back-end services (APIs) for web or mobile applications.

### Benefits:

- Enables front-end developers to transition to full-stack development by reusing existing JavaScript skills.

- Large ecosystem of open-source libraries available via the community.

- High performance and scalability (proven by companies like PayPal, Uber, and Netflix).

## Node Architecture & How It Works

### JavaScript Engines: 
Like browsers (e.g., Chrome uses V8), Node leverages the V8 engine to convert code into machine-understandable instructions.

### Non-Blocking I/O: 
Unlike traditional environments, Node is asynchronous by default. It uses a single thread to handle requests.

### Event Loop: 
When performing I/O (like database queries), the thread does not wait. Instead, it processes other requests, and when the operation completes, the result is placed in an Event Queue to be processed later.

### Ideal Use Cases: 
Best for I/O-intensive tasks (network/disk access). It is not recommended for CPU-intensive tasks (e.g., video encoding) as this blocks the single thread.

### Environment Differences: 
Node does not have access to browser-specific objects like window or document. Instead, it has its own global environment for interacting with the operating system, file system, and network.