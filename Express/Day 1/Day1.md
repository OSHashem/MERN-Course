# Day 1 Summary
## Moving Beyond the HTTP Module
While the native Node.js http module allows for creating web servers, it becomes difficult to maintain as application complexity grows because it requires hard-coding many if statements to handle different routes. Express is introduced as a fast, lightweight, and structured framework for building web applications.

## Understanding RESTful APIs
REST (Representational State Transfer) is a convention for building HTTP services to perform CRUD (Create, Read, Update, Delete) operations.

### Architecture
Follows a client-server model where the client communicates with the server via HTTP.

### Endpoints
Resources (like customers) are exposed through clean, logical URLs (e.g., vidly.com/api/customers).

### HTTP Methods:
The intent of a request is defined by its verb:
- GET: Retrieve data (e.g., list of customers).- POST: Create a new resource.
- POST: Create a new resource.
- PUT: Update an existing resource.
- DELETE: Remove a resource.
