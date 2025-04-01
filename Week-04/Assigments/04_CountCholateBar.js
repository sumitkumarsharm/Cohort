// you are packing chocloot bars in gift boxes. Each gift boxs needs to have the same number of chooclates bar.you need to find out how many boxes of chooclates you will have after packing the bar

function chooclatesBox(totoalchoclates, totalbox) {
  let calcuklate = Math.floor(totoalchoclates / totalbox);
  return calcuklate;
}

console.log(chooclatesBox(17, 5));
