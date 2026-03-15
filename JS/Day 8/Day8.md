# Day 8 JavaScript Summary

## JS Objects

- Objects are collections of related properties and methods.
- Syntax: `{ key: value, method() }`
- Example:
  ```js
  const person = {
      firstName: "Spongebob",
      lastName: "Squarepants",
      age: 30,
      isEmployed: true,
      sayHello: function () { ... },
      eat: () => { ... }
  };
  ```
- Methods can be regular functions or arrow functions (note: `this` behaves differently in arrow functions).

## JS `this` Keyword

- `this` refers to the object where it is used.
- In regular functions, `this` refers to the object; in arrow functions, it refers to the global/window object.
- Example:
  ```js
  const person = {
    name: "Patrick",
    sayHello: function () {
      console.log(this.name);
    },
  };
  ```

## JS Constructors

- Constructor functions define properties and methods for objects.
- Use `new` keyword to create instances.
- Example:
  ```js
  function Car(make, model, year, color) { ... }
  const car1 = new Car("Ford", "Mustang", 2024, "red");
  ```
- Add properties to constructor prototypes for shared values.

## JS Classes

- ES6 feature for structured object-oriented programming.
- Use `class` keyword and `constructor` method.
- Example:
  ```js
  class Product {
      constructor(name, price) { ... }
      displayProduct() { ... }
      calculateTotal(salesTax) { ... }
  }
  ```

## JS Static Properties & Methods

- `static` keyword defines class-level properties/methods (not available on instances).
- Example:
  ```js
  class MathUtil {
      static PI = 3.14159;
      static getDiameter(radius) { ... }
  }
  ```

## JS Inheritance

- Classes can inherit properties and methods from other classes using `extends`.
- Example:
  ```js
  class Animal { ... }
  class Rabbit extends Animal { ... }
  ```

## JS `super` Keyword

- Used in subclasses to call parent class constructor or methods.
- Example:
  ```js
  class Pet { ... }
  class SuperRabbit extends Pet {
      constructor(name, age, runSpeed) {
          super(name, age);
          this.runSpeed = runSpeed;
      }
      run() { super.move(this.runSpeed); }
  }
  ```

## JS Getters & Setters

- Getters make properties readable; setters make them writable and allow validation.
- Example:
  ```js
  class Rectangle {
      set width(newWidth) { ... }
      get width() { ... }
      get area() { ... }
  }
  ```
- Useful for encapsulation and validation of property values.

---

**Key Concepts Covered:**

- Object creation and manipulation
- Context of `this`
- Constructor functions and ES6 classes
- Static members
- Inheritance and `super`
- Getters and setters for property control
