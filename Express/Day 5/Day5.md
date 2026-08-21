# Day 5 Summary

## Handling HTTP PUT Requests

- Route Setup: Define a PUT route at /api/courses/:id .

- Logic Flow:
  
  1. Locate: Find the course by ID; return 404 if not found .
  
  2. Validate: Check the request body against the Joi schema; return 400 if invalid .
  
  3. Update: Modify the course properties (e.g., name) and return the updated object to the client .
  
- Refactoring: To avoid duplicating validation logic, the author extracts the schema validation into a standalone function called validateCourse() . This function uses object destructuring to cleanly handle the error property from the validation result .
  
## Handling HTTP DELETE Requests
- Logic Flow:
  1. Locate: Find the course by ID; return 404 if not found .
  2. Remove: Determine the index of the course and use splice() to remove it from the array .
  3. Return: Respond with the deleted course object .

## Code Clean-up

- The author notes a common bug: failing to exit a route handler after returning an error. By adding a return statement immediately after the error response (return res.status(404).send(...)), the rest of the function execution is prevented, leading to cleaner and more efficient code.
