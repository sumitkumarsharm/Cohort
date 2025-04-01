function countStar(n) {
  let star = "";
  for (let i = n; i <= 1; i--) {
    for (let j = 1; j <= i - 1; j++) {
      star += "*";
    }
  }
}

console.log(countStar(4));
