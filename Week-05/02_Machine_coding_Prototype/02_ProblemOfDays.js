// Create an object person with properties name and age, and a method greet that logs "Hello, my name is name".
const Person = {
  Fname: "Sumit",
  lName: "Sharma",
  Age: 34,
  Greet: function () {
    return `Hello, My Name is ${this.Fname} ${this.lName}`;
  },
};

// console.log(Person);
// console.log(Person.Greet());

// Write a function that takes an object and returns the number of properties it has.
// const TakeObj = (obj) => {
//   let Myarr = [];
//   for (const key in obj) {
//     Myarr.push(`${key}`);
//   }
//   return Myarr;
// };
// console.log(TakeObj(Person));

// Create a function that checks whether two objects have the same properties and values.
const obj1 = {
  fname: "Amit",
  lname: "Sharma",
  Age: 22,
};
const obj2 = {
  fname: "Amit",
  lname: "Sharma",
  Age: 22,
};
function areObjectValue(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
}

// Given an array of objects, write a function that finds an object with a specific property value.

// Write a function to merge two objects into one.

// Implement a function that removes a property from an object without mutating the original object.

// Write a function to deep clone an object.

// Given an object, write a function that returns an array of its values sorted in ascending order.

// Write a function that converts an object into a query string.

// Create a constructor function for an object representing a Car with properties make, model, and year.

// Implement a class Animal with a method speak() and extend it to create a Dog class with a bark() method.

// Write a function that takes an object and returns a new object with the keys and values swapped.

// Create a function that checks if an object is empty.

// Write a function that flattens a nested object into a single-level object.

// Create a function that returns only the properties of an object that are functions.

// Given an array of objects, write a function that groups objects by a specific property.

// Implement a function that finds the property with the highest numerical value in an object.

// Write a function that capitalizes all string properties of an object.

// Create an object representing a bank account with deposit and withdraw methods.

// Write a function that deeply compares two objects to check if they are equal.
