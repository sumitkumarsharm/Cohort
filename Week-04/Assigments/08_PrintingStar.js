function shinyDiamondRug(n) {
  let stars = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      stars += ' ';
    }
    for (let a = 1; a <= (2 * i - 1); a++) {
      stars += "*";
    }
    stars += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      stars += " ";
    }
    for (let a = 1; a <= (2 * i - 1); a++) {
      stars += "*";
    }
    stars += "\n";
  }

  return stars;
}

console.log(shinyDiamondRug(4));
