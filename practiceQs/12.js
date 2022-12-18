function findTicketPrices(emailString) {
  const hasNum = /\d/.test(emailString);
  return hasNum;
}

console.log(
  findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?")
);
