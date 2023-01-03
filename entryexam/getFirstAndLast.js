function getFirstAndLast(array) {
  if (array.length > 1) {
    return [array[0], array.at(-1)];
  } else if (array.length === 1) {
    return [array.pop()];
  }
  return [];
}

console.log(getFirstAndLast([42, 100, 25, -3]));
