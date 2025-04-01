// Top ten method of Array
// Array :-  Array is the collection is the types of items it means it takes one or more type of variable and values

// ---------------------------------------------------------------Pop Method --------------------------------------------------------
// 1. Array.pop()

// it is a method that remove last index of an array and it returns the element
// it remove last index of element
// it does not accept any parameter
//      Ex:-  arr.pop(2) this is not allow

let Arr1 = [2, 4, 5, 6, 7, 8, 9, 13, 55, 66];
let ChangedArr1 = Arr1.pop();
// console.log(`this is poped or Removed Array Element : ${ChangedArr1}`);
// console.log(`this is my original Aarya :  ${Arr1}`);

// if there is no any other element in Array it returns Undefined
let arr3 = [];

// console.log(arr3.pop()); // output : undefined

// ---------------------------------------------------------------Push Method --------------------------------------------------------

// 2. Array.push()

// it is just add the one or more element at the end of the array
// it returns new lenght of array
//  it takes one and more parameter.
//          like :- arr.push("Mango", "Pomigranedes", 655, 98978)

// Add "oolong Tea at the last index
let NewArr1 = Arr1.push("oolong Tea");
// console.log(NewArr1);

// console.log(Arr1); // output : [2, 4, 5, 6, 7, 8, 9, 13, 55, "oolong Tea"];

// ---------------------------------------------------------------Shift Method -------------------------------------------------------
// 3. Array.shift() :  it is removed first element of the Array and return the removed Element and it is Affect the length of the Array  and it does not take any parameter.

let CarNames = ["BMW", "Maruti", "Audi", "Fartuner"];
let ModifiedCarName = CarNames.shift();
// console.log(CarNames); // [ 'Maruti', 'Audi', 'Fartuner' ]
// console.log(ModifiedCarName); //BMW

// ---------------------------------------------------------------UnShift Method ----------------------------------------------------
// 4. Array.unshift() : it is add one and more element at the start of the Array and return the new length of the Array and it does take one and more parameter at a time.

let StudentRoll = [10001, 10002, 10003, 10004, 10005];
let CountedRoll = StudentRoll.unshift(9998, 9999, 10000);
// console.log(StudentRoll);
// console.log(`All rolled is : ${CountedRoll}`);

// ---------------------------------------------------------------sort Method ----------------------------------------------------
// 12. Array.sort() : it is use to short the element based on UTF-16 code and it dose'nt take any parameter
// Ex...
// const Animal = ["Cat", "Cow", "Monkey", "Dog", "Hen", "Elephant"];
// const UpdatedShored = Animal.sort((a, b) => a.localeCompare(b));
// console.log(Animal);
// console.log(UpdatedShored);

// another method for sort

let AllNumbers = [
  5, 8, 2, 90, 77, 87, 55, 237, 98, 56, 998, 6675, 45, 36, 76, 74, 28, 18, 100,
  40, 50, 20, 17, 49, 57, 83, 70, 34, 666, 88,
];

function Comapir(a, b) {
  return a - b;
}

AllNumbers.sort(Comapir);
// console.log(`Accending order :  ${AllNumbers}`);
// console.log(`Deccending order :  ${AllNumbers}`);

// let ShortedAnimal = Animal.sort(comparisionFn());
// console.log(Animal);
// console.log(ShortedAnimal);

// ---------------------------------------------------------------Splice Method ----------------------------------------------------
// 6. Array.splice() : it is the method that change the content of the array by removing and replacing existing content or element
let Bookes = ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7"];
let allbooks = Bookes.splice(
  1,
  5,
  "Don't use these books bacouse it is Old model"
);
console.log(allbooks);

console.log(Bookes);

// 5. Array.slice()
// 7. Array.indexOf()
// 8. Array.filter()
// 9. Array.map()
// 10. Array.reduce()
// 11. Array.toString()
// 12. Array.forEach()
