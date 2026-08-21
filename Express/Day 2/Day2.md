# Day 2 Summary

## Building the First Web Server
- The express module is loaded and instantiated as an app object.
- Routes are defined using methods like app.get(), which takes a path (e.g., / or /api/courses) and a callback function (route handler).
- app.listen() is used to start the server on a specified port.

## Development Productivity
Nodemon (npm install -g nodemon), a tool that automatically restarts the Node process whenever file changes are detected, eliminating the need to manually stop and start the server.

## Handling Environment Variables
To ensure portability across environments (like production hosting), the port is no longer hard-coded. Instead, the application checks the process.env.PORT environment variable, defaulting to 3000 for local development if it is not set.