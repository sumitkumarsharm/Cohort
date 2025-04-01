function distribute(totalGifts, totalFriends) {
  let count = 0;

  for (let i = 0; i < totalFriends && i < totalGifts; i++) {
    count++;
  }

  return count;
}
   
console.log(distribute(5, 2));
