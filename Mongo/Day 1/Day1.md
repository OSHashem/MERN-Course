## Day 1 Summary

## Introduction to MongoDB

- MongoDB Basics: It is a NoSQL database that stores data in documents (field-value pairs) rather than traditional SQL tables, making it highly scalable and flexible for related data .

- Structure: Data is organized into documents, which are grouped into collections, which are further organized into databases .

- Prerequisites: Some familiarity with an object-oriented programming language (like Python, Java, or JavaScript) is recommended.

## MongoDB Shell Interface

- View Databases: Use `show dbs` to list all current databases.

- Switch/Create Database: Use `use` to switch to or initialize a new database. Note that a database remains invisible until you add a collection to it .

- Create Collection: Use `db.createCollection("")` to populate your database .

- Drop Database: To delete the currently selected database, use `db.dropDatabase()`.

## Inserting Documents

Using the MongoDB Shell

- insertOne(): Used to add a single document. Provide the document in curly braces with key-value pairs .
  - Example: `db.students.insertOne({name:"Spongebob", age:30, gpa: 3.2})`

- insertMany(): Used to add multiple documents at once by placing them inside an array (square brackets) .
  - Example: `db.students.insertMany([{name:"Patrick", ...}, {name:"Sandy", ...}])`

- find(): Use `db.collectionName.find()` to verify and display the documents in the collection .

## Data Types

- String : A series of text characters enclosed in quotes (e.g., "Larry").

- Integer : Used for whole numbers that do not contain decimal points, such as age (32).

- Double : Used for numbers that include a decimal portion, such as a GPA (2.8).

- Boolean : Represents one of two states, either true or false (e.g., fullTime status).

- Date : Created using the `new Date()` constructor, which defaults to the current UTC time.

- Null : Represents a field with no value, acting as a placeholder to be filled later.

- Array : Enclosed in square brackets, this allows a single field to store multiple values (e.g., a list of courses).

- Nested Document : Enclosed in curly braces, this allows you to store a document within another document, useful for structured data like addresses.
