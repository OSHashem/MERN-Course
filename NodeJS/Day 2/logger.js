var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// To make code accessible externally, use module.exports. 
// You can export an object (with multiple properties) or a single function.
module.exports.log = log;

// ------------------------------------------------------- Module Wrapper unction ------------------------------------------------
// Node.js wraps your code in a special function before execution, which provides parameters like exports, require, module, __filename, and __dirname.
// This hidden wrapper is exactly how Node.js achieves module encapsulation and makes the module object available to each file.

// These 2 lines are equivalent to the module.exports.log = log; line above.
module.exports = log; 
exports.log = log;