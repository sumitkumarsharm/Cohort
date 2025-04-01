function countStar(star) {
  let countStart = 0;
  for (let i = 0; i < star.length; i++) {
    for (let j = 0; j < star[j].length; j++) {
      countStart++;
    }
  }
  return countStart;
}

let Starts = [["*", "*", "*"], ["*", "*"], ["*"]];
console.log(countStar(Starts));
