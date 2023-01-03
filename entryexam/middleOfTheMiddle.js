function middleOfTheMiddle(string) {
  const words = string.split(" ");
  const middle = words[Math.floor(words.length / 2)];
  if (words.length % 2 === 1) {
    if (middle.length % 2 === 1) {
      return middle[Math.floor(middle.length / 2)];
    } else {
      return middle[middle.length / 2 - 1] + middle[middle.length / 2];
    }
  } else {
    return " ";
  }
}

console.log(middleOfTheMiddle("this is an example sentence"));
