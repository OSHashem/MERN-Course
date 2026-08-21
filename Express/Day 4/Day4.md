# Day 4 Summary

## Handling HTTP POST Requests

- Route Creation: You define a POST route using app.post('/api/courses', ...) to add a new course to the collection.

- Middleware: To process JSON data sent in the request body, you must enable the built-in middleware app.use(express.json()) .

- Logic: The request handler reads data from request.body, manually assigns an ID (based on array length + 1), pushes the new object to the array, and returns the created object to the client .

- Testing: Use Postman to send requests by setting the request type to POST, selecting raw JSON format, and providing a valid JSON object in the body .

## Input Validation

- Importance: You should never trust client-side data; always validate it to prevent bad requests .

- Manual vs. Automated: While you can write if statements to check for properties, using a library like Joi is the industry standard for complex validation .

- Using Joi:
  1. Install Joi `npm install joi`
  
  2. Define a schema that outlines the object's shape, including data types and constraints (e.g., minimum string length).
  
  3. Use Joi.validate() to check the request body against the schema .- Error Handling: If validation fails, return an HTTP 400 (Bad Request) status along with a clear error message extracted from the Joi validation result .
