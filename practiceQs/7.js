function findEvenLengthStrings(items) {
  return items.filter((item) => {
    return typeof item === "string" && item.length % 2 === 0;
  });
}

console.log(findEvenLengthStrings(["hi", "bye"]));
console.log(findEvenLengthStrings(["f", null]));
