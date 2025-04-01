// Problem : Create an object representing a type of tea whith properties name type and Caffeine content.
const TeaName = {
  Name: "Oolong Tea",
  type: "green",
  caffeine: "low",
};

// Problem : Access and print the name and type properties of the tea object.
// console.log(TeaName);

// Problem : Add a new property origin to the tea object.
TeaName.origin = "China";
// console.log(TeaName);

// Problem : Change the caffeine lavel of the Tea object to "Medium"
TeaName.caffeine = "Medium";
// console.log(TeaName);

// Problem : Remove the type property from the tea object.
delete TeaName.type;
// console.log(TeaName);

// Problem : check if the tea object has a property called origin.
// console.log("origin" in TeaName);

// Problem : use a for ... in loop to print the properties of type tea object.
for (const key in TeaName) {
  //   console.log(`${key} : ${TeaName[key]}`);
}

// Problem : create a  nested object representing the different type of tea with properties.
TeaName.AnotherTes = {
  Name: "Lemon Tea",
  type: "green",
  caffeine: "low",
};

// console.log(TeaName);

// Problem : create a copy of tea object
const CopyTea = {
  ...TeaName,
};
// console.log(CopyTea);

// create a custom method Describe to the tea
