const express = require("express");
const app = express();

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/customers", (req, res) => {
  res.send([1, 2, 5]);
});

// You can define route parameters in the path using a colon
// app.get("/api/customers/:birth", (req, res) => {
//   //  Use request.params to read route parameters.
//   res.send(req.params.birth);
//   // You can have multiple parameters in a single route (e.g., year and month)
// });

app.get("/api/customers/:id", (req, res) => {
  // To retrieve a specific item, use the Array.find() method to locate an object by ID within your array. 
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  // request.params.id returns a string, so you must use parseInt() to convert it for comparison
  if (!customer) {
    res.status(404).send("Customer not found");
  } else {
    res.send(customer);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
