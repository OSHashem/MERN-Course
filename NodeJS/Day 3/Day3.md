# Day 3 Summary

## Path Module 
Provides utility functions for working with file and directory paths. It is highly recommended to use this module for path manipulation instead of manual string concatenation to ensure cross-platform compatibility.

**Example:**
```javascript
const path = require('path');

// Join path segments
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath); // c:\project\files\data.txt (Windows)

// Resolve absolute path
const absolutePath = path.resolve('files', 'data.txt');
console.log(absolutePath);

// Get file extension
const ext = path.extname('document.pdf');
console.log(ext); // .pdf

// Get base filename
const basename = path.basename('/home/user/file.txt');
console.log(basename); // file.txt
```

## OS Module
Allows you to retrieve information about the host machine's operating system, such as total and free memory (using totalmem() and freemem()). This segment also introduces ES6 template strings (using backticks) as a cleaner way to format output without manual concatenation.

**Example:**
```javascript
const os = require('os');

// Get memory information
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const usedMemory = totalMemory - freeMemory;

// Using ES6 template strings
console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024} GB`);
console.log(`Free Memory: ${freeMemory / 1024 / 1024 / 1024} GB`);
console.log(`Used Memory: ${usedMemory / 1024 / 1024 / 1024} GB`);

// Get OS platform
console.log(`Platform: ${os.platform()}`); // win32, linux, darwin

// Get CPU count
console.log(`CPUs: ${os.cpus().length}`);
```

## File System (FS) Module
Provides a robust set of methods for managing files and directories.

### Non-blocking I/O 
The video emphasizes that you should always prefer asynchronous methods (e.g., readdir) over synchronous ones (e.g., readdirSync) to avoid blocking the single thread of the Node process, which is critical for application scalability.

**Example - Asynchronous (Preferred):**
```javascript
const fs = require('fs');

// Async method - does NOT block
fs.readdir('./files', (err, files) => {
  if (err) throw err;
  console.log(files); // Array of filenames
});

console.log('This prints immediately!');
```

**Example - Synchronous (Avoid):**
```javascript
// Sync method - BLOCKS the entire process
const files = fs.readdirSync('./files');
console.log(files);

console.log('This waits for readdir to complete!');
```

### Error Handling 
When using asynchronous methods, Node expects a callback function containing an err and result argument to handle completion or failures.

**Example:**
```javascript
const fs = require('fs');

fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return; // Stop execution on error
  }
  console.log('File content:', data);
});

// Reading directory with error handling
fs.readdir('./myfiles', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err.message);
    return;
  }
  console.log('Files found:', files);
});
```