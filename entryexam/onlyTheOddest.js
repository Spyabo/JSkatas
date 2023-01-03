function onlyTheOddest(array) {
  let odds = [];

  for (let i = 1; i < array.length; i += 2) {
    if (array[i] % 2 != 0) {
      odds.push(array[i]);
    }
  }
  return odds;
}

console.log(onlyTheOddest([1, 3, 5, 7, 9, 11]));
