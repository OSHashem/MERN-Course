# Day 4 Summary

## Comparison Operators

### $ne (Not Equal):
Excludes documents matching a specific value (e.g., `{$ne: "Spongebob"}`).
### $lt (Less Than) & $lte (Less Than or Equal To):
Filters records smaller than or inclusive of a specified value.

### $gt (Greater Than) & $gte (Greater Than or Equal To):
Filters records larger than or inclusive of a specified value.

## Advanced Filtering

### Range Queries: 
You can combine multiple operators, such as using `$gte` and `$lte` together to find values within a range, like a GPA between 3 and 4.

### $in (In Array): 
Returns documents where the field value matches any element in a provided array.

### $nin (Not In Array):
Returns documents where the field value does not match any element in the provided array.

## Core Logical Operators

### $and:
Requires all conditions within the array to be true to return a document.

- Example: `{$and: [{fullTime:true}, {age:{$lte:22}}]}`

### $or:
Returns documents where at least one condition is true.

- Example: `{$or: [{fullTime:true}, {age:{$lte:22}}]}`

### $nor:
The inverse of $or. It returns documents only if all specified conditions are false.

- Example: `{$nor: [{fullTime:true}, {age:{$lte:22}}]}`

### $not:
Performs a logical negation on a specific operator/expression. It is useful for excluding specific values or including items that lack a certain field (such as null values), which standard comparison operators might miss.

- Example: `{age:{$not:{$gte:30}}}`