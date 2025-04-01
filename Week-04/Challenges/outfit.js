// server callback weather = ranny, winter, summer

let weather = "summer";
let Confirms;
if (weather === "ranny") {
  Confirms = "Please carry Umbralla";
} else if (weather === "winter") {
  Confirms = "Please Wear Jacket";
} else {
  Confirms = "Jao bhai jaise chaho waise jao !!!";
}
console.log(Confirms);
