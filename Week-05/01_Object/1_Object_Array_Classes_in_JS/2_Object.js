// object :-  it is the collection of types of element
const Person = {
  FirstName: "Sumit",
  lastName: "Sharma",
  hubbies: ["cosing", "Gym", "leastning music"],
  isMarried: true,
  isGF: false,
  hadGF: false,
  hasCruss: Infinity,
  getFullname: function () {
    return "Sumit sharma";
  },
  Address: {
    HNo: 12434,
    Village: "Rajeev Nagar",
    City: "Bhoapl",
    ZipCode: 5855556,
    countryCode: "IN",
  },
};

// console.log(Person.FirstName);
// console.log(Person.lastName);
// console.log(Person.Address.City);
// console.log(Person.Address.countryCode);
// console.log(Person.Address.ZipCode);
// console.log(Person.getFullname());
// console.log(typeof Person.hasCruss);
// console.log(typeof Person.xxxzzzyyy); // if the key is not aviable or not defined then is return undefined

// here we are not
const p1 = {
  fName: "Sumit",
  LName: "Sharma",
};

// without spread operator
// const p2 = {
//   fName: p1.fName,
//   LName: p1.LName,
// };

// yaha mian chahta hu ki p1 ke sare property ko p2 ke andar lekr aa jau tab ham ek ek value to kasie lenge  isse achha ham spread operator ka use kr lete hai

// spread operator do shallow copy only uper uper se copy krta hai

// spread operator is not work on inner object

// Deep copy
const p2 = {
  ...p1,
};

p2.fName = "Ssumit";
p2.Address = "Sharma";

// console.log(p1);
// console.log(p2);

// Deep copy
// yaha ham spread operator ka use kr ke hamne copy to kr liya par nested opbject ka referance hi to copy huaa na ki value then we use Deep COpy.

const person2 = {
  fname: "Manish",
  lname: "Sharma",
  Address: {
    HNo: 12434,
    Village: "Rajeev Nagar",
    City: "Bhoapl",
    ZipCode: 5855556,
    countryCode: "IN",
  },
};

const person3 = {
  ...person2,
};

// console.log(person2);
// console.log(person3);

// there are multipal way to do deep copy

// 1. Object.assign()
// 2. JSON.parse(JSON.stringify())
const PersonString = JSON.stringify(person2);
let person5 = JSON.parse(PersonString);

console.log(PersonString);
person5.lname = "Sumit sharma";
console.log(person5);
