// Problem: Create an array containing diffrerent types of teas.
const Teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
  "Darjeeling Tea",
  "Jasmine Tea",
  "Massala Tea",
  "Ginger Tea",
  "Cardamom Tea",
  "Tulsi Tea",
  "Sulaimani Tea",
];
// console.log(Teas);

// Problem : Add "Chamomile Tea" to the existing List of teas
Teas.push("Chamomile Tea");
// console.log(Teas);

// Problem: Remove the  "Oolong Tea" form the List of the teas.
const index = Teas.indexOf("Oolong Tea");
if (index > -1) {
  Teas.splice(index, 1);
}
// console.log(Teas);

// problem: filter the List to only include teas that are coffeinated.
let Caffineated = Teas.filter((teas) => teas !== "Herbal Tea");
// console.log(Caffineated);

// Problem : sort the list of teas in alphbetical order.
Teas.sort();
// console.log(Teas);

// problem: use a for loop to peint each type of tea in the Array
for (let i = 0; i < Teas.length; i++) {
  //   console.log(Teas[i]);
}

// problem : use a for loop to count how many teas are caffeaineted (excluding "Herbal tea").
let CaffineatedTeas = 0;
for (let i = 0; i < Teas.length; i++) {
  if (Teas[i] !== "Herbal Tea") {
    CaffineatedTeas++;
  }
}
// console.log(CaffineatedTeas);

// Problem:  use a for loop to create a New Array which All teas are upercase
const upperCaseTeas = [];
for (let i = 0; i < Teas.length; i++) {
  upperCaseTeas.push(Teas[i].toUpperCase());
}
// console.log(upperCaseTeas);

// problem : Use a for loop to find the tea name with the most Charters.

let LongestTea = "";
for (let i = 0; i < Teas.length; i++) {
  if (Teas[i].length > LongestTea.length) {
    LongestTea = Teas[i];
  }
}
// console.log(LongestTea);

// problem: Use a for loop to reverse the order of teas in the array
let ReversedTeas = [];
for (let i = Teas.length - 1; i >= 0; i--) {
  ReversedTeas.push(Teas[i]);
}
console.log(ReversedTeas);
