function calculateTaxiFare(seconds) {
  let time = Math.ceil(seconds / 60);

  if (time <= 3) {
    return 500;
  }
  return 500 + 70 * (time - 3);
}

console.log(calculateTaxiFare(360));
