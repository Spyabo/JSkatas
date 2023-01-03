function findBiggestAndSmallest(numbers) {
  if (numbers.length < 1) {
    return {};
  }
  return { biggest: Math.max(...numbers), smallest: Math.min(...numbers) };
}

console.log(findBiggestAndSmallest([1, 2, 99, 100]));
