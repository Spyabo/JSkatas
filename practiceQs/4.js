function findFirstOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i];
    }
  }
  return undefined;
}

console.log(findFirstOdd[(2, 4, 1)]);
