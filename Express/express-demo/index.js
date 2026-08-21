const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/customers", (req, res) => {
  res.send(customers);
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

app.post("/api/customers", (req, res) => {
  const { error } = schemaValidator(req.body.name);

  if (error) return res.status(400).send(error.details[0].message);

  const customer = { id: customers.length + 1, name: req.body.name };

  customers.push(customer);
  res.send(customer);
});

app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => {
    c.id === parseInt(req.params.id);
  });

  if (!customer)
    return res.status(404).send("Customer of given ID is not found");

  const { error } = schemaValidator(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  customer.name = req.body.name;
  res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => {
    c.id === parseInt(req.params.id);
  });

  if (!customer)
    return res.status(404).send("Customer of given ID is not found");

  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  res.send(customer);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

function schemaValidator(customer) {
  const schema = { name: Joi.string().min(3).required() };

  return Joi.validate(customer, schema);
}
