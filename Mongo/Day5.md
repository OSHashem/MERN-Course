# Day 5 Summary

## Indexes
Indexes are structures used in MongoDB to optimize data retrieval, functioning similarly to a B-tree for efficient lookups.


- Purpose: Significantly speeds up query execution by reducing the number of documents the database needs to examine.

- Trade-offs: Indexes consume additional memory and can slow down insert, update, and remove operations because the tree must be updated with every write.

- Best Practice: Use indexes for fields frequently involved in search queries but keep them limited if the collection undergoes frequent updates.

### Commands & Operations:

- Create: `db.collection.createIndex({field: 1})` (where 1 is ascending and -1 is descending order).

- Verify: Use `db.collection.find().explain("executionStats")` to compare query performance before and after indexing.

- List: `db.collection.getIndexes()` shows all active indexes on a collection.

- Remove: `db.collection.dropIndex("index_name")` removes a specific index.

## Collections

### View Collections:
Use `show collections` to list all collections in the current database.

### Create Collections:
Use `db.createCollection("name", options)` to create a new collection.

### Capped Collections:
You can set capped: true to enable a fixed-size collection where the oldest entries are overwritten when the maximum capacity is reached.

- `size`: Sets the maximum size in bytes.

- `max`: Sets the maximum number of allowed documents.

### Indexing:
By default, MongoDB indexes the _id field. You can disable this during creation using autoIndexId: false, which may improve write performance at the cost of lookup speed.

### Drop Collections:
To remove a collection, use `db.collectionName.drop()`.