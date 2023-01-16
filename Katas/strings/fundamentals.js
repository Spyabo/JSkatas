function getLength(str) {
  return str.length;
}

function putNamesTogether(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function capitaliseString(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function dontShoutSentence(SENTENCE) {
  return SENTENCE[0] + SENTENCE.slice(1).toLowerCase();
}
function getMiddle(str) {
  let middle = Math.floor(str.length / 2);

  return str.length % 2 === 0
    ? str.slice(middle - 1, middle + 1)
    : str.slice(middle, middle + 1);
}

function getLastWord(words) {
  return words.split(" ").pop();
}

function hyphenateWords(words) {
  return words.replace(/ /g, "-");
}
