// Total 30 Questions of Object

// Basic Questions:
// 1.How do you create an empty object in JavaScript?
const MyObj = {};

// 2.What are the different ways to create an object in JavaScript?
const Obj1 = new Object();
const Obj2 = { Name: "Sumit" };

// 3.How do you add a new property to an existing object?
const Obj3 = {
  Name: "Sumit Sharma",
  isMarried: true,
  HadGF: false,
};

Obj3.HasGf = false;
console.log(Obj3);

// 4.How do you delete a property from an object?
const Obj4 = {
  Name: "Sumit Sharma",
  isMarried: true,
  HadGF: false,
};
delete Obj4.HadGF;
console.log(Obj4);

// 5.What is the difference between dot notation (object.property) and bracket notation (object["property"])?
let Person3 = {
  "Student-Name": "Sumit Sharma",
  "Stu-Id": "0191EE191055",
  Score: 8.65,
  Profeser: "Aditay Narayana",
};

console.log(Person3["Student-Name"]);
console.log(Person3[Score]);
console.log(Person3.Score);

// 6.How do you check if a property exists in an object?
for (const key in Person3) {
  if (key === "Score") {
    console.log(key);
  }
}
// method 2.
console.log("Score" in Person3);
console.log("Abcd" in Person3);

// method 3.
console.log(Object.keys(Person3).includes("Sumit"));
console.log(Object.keys(Person3).includes("Score"));

// method 4
console.log(Person3.Scores);
console.log(Person3.Score !== undefined);

// Method 5
console.log(Object.hasOwn(Person3, "Scores"));
console.log(Object.hasOwn(Person3, "Score"));

// 7.What does Object.keys(obj) return?
console.log(Object.keys(Person3)); // "Student-Name",  "Stu-Id", Score, Profeser

// 8.What does Object.values(obj) return?
console.log(Object.values(Person3)); // "Sumit Sharma" , "0191EE191055", 8.65,  "Aditay Narayana"

// 9.How can you copy an object without affecting the original one?
pers1 = {
  ...Person3,
};
console.log(pers1);
// { 'Student-Name': 'Sumit Sharma', 'Stu-Id': '0191EE191055', Score: 8.65, Profeser: 'Aditay Narayana' }

// 10.What is the difference between Object.assign({}, obj) and {...obj}?

// Intermediate Questions:
// 1.What is the difference between shallow copy and deep copy of an object?
// 2.How do you iterate over an object's properties?
// 3.What is the purpose of Object.entries(obj)?
// 4.What does Object.freeze(obj) do?
// 5.What does Object.seal(obj) do?
// 6.What is the difference between Object.freeze(obj) and Object.seal(obj)?
// 7.How do you merge two objects in JavaScript?
// 8.What happens when two objects have the same property in Object.assign(target, source)?
// 9.How can you define a method inside an object?
// 10.What is the use of hasOwnProperty() method?
// Advanced Questions:
// 1.What is a prototype in JavaScript?
// 2.How does JavaScript handle object inheritance?
// 3.What is the difference between __proto__ and prototype?
// 4.How does Object.create(protoObj) work?
// 5.How do you define getters and setters in an object?
// 6.What are computed property names in JavaScript?
// 7.What is the difference between class-based and prototype-based inheritance?
// 8.How can you prevent modification of an object’s properties?
// 9.What are symbols, and how can they be used as object keys?
// 10.What is the this keyword inside an object method?
