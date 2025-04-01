function totalPrice(prices) {
  let totalprices = 0;
  for (let i = 0; i < prices.length; i++) {
    totalprices = totalprices + prices[i];
  }
  return totalprices;
}

let prices = [1.5, 2.3, 3.7];
console.log(totalPrice(prices));
