# Day 3 Summary

## Route Parameters

- Defining Parameters: You can define route parameters in the path using a colon (e.g., /api/courses/:id). These are required values for the endpoint.

- Accessing Data: Use request.params to read route parameters. You can have multiple parameters in a single route (e.g., year and month).

- Query Strings: For optional data, use query parameters (e.g., ?sortBy=name). These are accessed via request.query 

## Handling GET Requests 

- Retrieving Data: To retrieve a specific item, use the Array.find() method to locate an object by ID within your array. Remember that request.params.id returns a string, so you must use parseInt() to convert it for comparison

- Error Handling: If an item is not found, it is standard REST practice to return an HTTP 404 (Not Found) status code along with a descriptive error message
- Successful Responses: Use response.send() to return the requested object or data as JSON to the client