// DAY 8

// ----------------------------------------- JS Objects ----------------------------------------
// object = A collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// form: object = {key:value,
//                 function()}

// EXAMPLE 1
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! I am Spongebob!");
  },
  eat: () => console.log("I am eating a Krabby Patty"),
};

console.log(person1.firstName);
person1.sayHello();
person1.eat();

// Incorrect syntax: alert(person1[firstName])

// To delete a property: delete person1.age

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS This ----------------------------------------
// reference to the object where THIS is used
// (the object depends on the immediate context)
// Note: THIS keyword does not work with arrow functions (It will make a reference to the window object)

// EXAMPLE 1
const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function () {
    console.log(`Hi! I am ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person1.eat();
person2.eat();

// EXAMPLE 2
console.log(this); // It will return the window object

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS CONSTRUCTORS ----------------------------------------
// constructor = special method for defining the properties and methods of objects

// EXAMPLE 1
function Car(make, model, year, color) {
  // Pay attention to the capitalization
  ((this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(`You drive the ${this.model}`);
    }));
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

car1.drive();
car2.drive();

console.log(car1.make);
console.log(car1.model);

console.log(car2.make);
console.log(car2.model);

// To add a new property to the object constructor: Car.prototype.country = 'Italy';

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS CLASSES ----------------------------------------
// An ES6 feature that provides a more structured and cleaner way to work with objects compared to traditional constructor functions
// ex. static keyword, encapsulation, inheritance
// Instead of uisng a constructor method, we will use a class (it will include a constructor)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Inside of a class you don't need to use the function keyword
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS STATIC ----------------------------------------
// keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// EXAMPLE 1
class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));

//  EXAMPLE 2
class User {
  // It belongs to the class itself and not any object created from the class
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.userCount); // Output: Undefined

user1.sayHello();
user2.sayHello();
User.getUserCount();

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS INHERITANCE ----------------------------------------
// It allows a new class to inherit properties and methods from an existing class. Helps with code reusability

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

// EXAMPLE 1
class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

// EXAMPLE 2
class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS SUPER ----------------------------------------
// It is a keyword that is used in classes to call the constructor or access/extend the properties and methods of a parent (superclass)
// similar to: this = this object
// super = the parent

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

// EXAMPLE 1
class SuperRabbit extends Pet {
  constructor(name, age, runSpeed) {
    // Super here refers to the parent (Pet in this case)
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

const newRabbit = new SuperRabbit("rabbit", 1, 25);

newRabbit.run();

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------------- JS GETTERS & SETTERS ----------------------------------------
// getter = special method that makes a property readable.
// setter = special method that makes a property writeable.
// they are used to validate and modify a value when reading/writing a property

// EXAMPLE 1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("width should be positive");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height should be positive");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // With getters we can access properties with ".prob" that does not exist
  get area() {
    return this._height * this._width;
  }
}

const rectangle = new Rectangle(10000, 40000); // This does not make sense, we will use the setters to accept only valid positive values.

rectangle.width = 44; // you can even change the values later like this.

console.log(rectangle.width); // we won't be able to access this without getters. If no getters output is undefined
console.log(rectangle.height);
console.log(rectangle.area);

// EXAMPLE 2
class Person {
  constructor(firstName, lastName, age) {
    // These use the setters to validate initial data
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // SETTERS (Writing/Validating data)
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  // GETTERS (Reading data)
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

// 1. Creating a person with valid data
const person = new Person("SpongeBob", "SquarePants", 30);
console.log(person1.firstName); // SpongeBob
console.log(person1.fullName); // SpongeBob SquarePants
console.log(person1.age); // 30

// 2. Attempting to create a person with invalid data (triggers console errors)
// const person2 = new Person(420, 69, "Pizza");
// Errors logged: "First name must...", "Last name must...", "Age must..."
