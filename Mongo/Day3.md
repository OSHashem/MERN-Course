# Day 3 Summary

## Updating Documents

### updateOne():
Modifies a single document. Requires a filter (selection criteria) and an update operator (e.g., `$set`) to modify fields .

- Best Practices:
Use Unique IDs: Always prefer filtering by _id over fields like name to ensure you are modifying the correct document, especially in large datasets.

### updateMany():
 Updates multiple documents that match a filter. Use an empty set of curly braces {} to select all documents in a collection.

### Update Operators: 
- `$set` Operator: 
Adds a new field or replaces the value of an existing one .

- `$unset` Operator: Removes a specific field from a document. Set the field value to an empty string "" to trigger the removal.

- `$exists` Operator: Useful in filters to find documents that either have or lack a specific field.

## Deleting Documents

### deleteOne(): 
Removes the first document that matches the specified filter criteria. Example: `db.students.deleteOne({name:"Larry"})`.

## deleteMany():
Removes all documents that match the filter. Example: `db.students.deleteMany({fullTime:false})`.
 
## Conditional Deletion:
You can use operators like $exists to remove documents based on field presence. 

- Example: `db.students.deleteMany({registerDate:{$exists:false}})`  deletes all documents where the registerDate field is missing.
