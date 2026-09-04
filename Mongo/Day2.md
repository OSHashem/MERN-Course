# Day 2 Summary

## Sorting Data (sort()):

- Syntax: Use `db.collection.find().sort({ field: value })`.

- Parameters: Provide 1 for ascending order (e.g., A-Z or lowest to highest) and -1 for descending order (e.g., Z-A or highest to lowest).

- Examples: Sorting names alphabetically (sort({name: 1})) or GPAs by rank (sort({gpa: -1})).

## Limiting Results (limit()):

- Syntax: Use `db.collection.find().limit(n)`.

- Function: Restricts the number of documents returned. If no sort is applied, it returns documents based on their default insertion order (Object ID).

## Combining Methods:
You can chain both methods to isolate specific data, such as finding the top student: `db.students.find().sort({gpa: -1})`.limit(1).

## The find() method uses two primary optional parameters to refine search results:

### Query Parameter (Filter):
Works similarly to a WHERE clause in SQL. You provide a document object with specific key-value criteria to limit which documents are returned.

- Example: `db.students.find({name: "Spongebob"})` returns documents where the name matches.

- You can include multiple filters separated by commas within the same curly braces to further narrow down results.

### Projection Parameter:
Used to select which fields appear in the results, similar to SELECT in SQL.

- You set fields to true (or 1) to include them or false to exclude them.
- Note: The _id field is returned by default unless explicitly set to false .

- Example: `db.students.find({}, {_id: false, name: true, gpa: true})` returns only the name and GPA for every document.