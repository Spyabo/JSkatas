function findHiddenNumber(string) {
  let Nums = parseInt(string.replace(/[A-Za-z]/g, ""));
  return Nums ? Nums : "no numbers present";
}

console.log(findHiddenNumber("How much should I bill for 58 hours of work?"));
