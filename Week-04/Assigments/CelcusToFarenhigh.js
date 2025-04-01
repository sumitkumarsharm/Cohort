// create a funciton that takes two paramater  one is f and another is C when i give C temp convert it into F and when i will give F convert it into C
let temp = 32;
let temptype = "F";
// °F = (°C × 9/5) + 32
// C = (°F - 32) × 5/9

if (temptype === "C") {
  temp = (temp * 9) / 5 + 32 + "°F";
} else {
  temp = ((temp - 32) * 5) / 9 + "°C";
}
console.log(temp);
