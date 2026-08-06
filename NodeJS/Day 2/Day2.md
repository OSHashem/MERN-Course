# Day 2 Summary

## Global Scope vs Module Scope

- In Node.js, some objects and functions are available globally, such as `console`, `setTimeout`, `clearTimeout`, `setInterval`, and `clearInterval`.
- These global members are also available on the `global` object, similar to how browser globals are available on `window`.
- Variables and functions declared in a file are not automatically added to the global object. Each file is treated as a separate module scope.
- This encapsulation prevents naming collisions and keeps module internals private by default.

## Creating Modules

- Use `require()` to import a module from another file.
- Store imported modules in `const` variables to avoid accidental reassignment.
- For example, `const logger = require('./logger.js');` loads the logger module from `logger.js`.

## Exporting from Modules

- In Node.js modules, use `module.exports` to expose values, functions, or objects to other files.
- You can export a single function or an object containing multiple properties.
- Example from `logger.js`:
  - `module.exports.log = log;` exports the `log` function as a property named `log`.

## Node.js Module Wrapper Function

- Node.js wraps each module file in a hidden function when executing it.
- This wrapper provides the module with local variables such as `exports`, `require`, `module`, `__filename`, and `__dirname`.
- The wrapper is the mechanism that provides module encapsulation and module-scoped variables.

## Summary

- Node.js module system encourages isolated file-level scope.
- `require` is used for importing, `module.exports` for exporting.
- The module wrapper function makes module-scoped variables available and keeps the global namespace clean.
