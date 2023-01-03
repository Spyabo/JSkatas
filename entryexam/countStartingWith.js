function countStartingWith(array, str) {
  let sum = 0;
  array.forEach((word) => {
    let slice = word.substring(0, str.length);
    if (slice === str) {
      sum += 1;
    }
  });
  return sum;
}

console.log(
  countStartingWith(
    ["yes", "yesterday", "envelope", "environment", "yellow", "envision"],
    "env"
  )
);
