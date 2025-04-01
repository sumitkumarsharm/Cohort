function workingDays(days) {
  // your code here
  let countDays = 0;
  for (let i = 1; i <= days.length; i++) {
    countDays++;
  }
  return countDays;
}

let arr = ["monday", "Tuesday", "Tuesday"];
console.log(workingDays(arr));
