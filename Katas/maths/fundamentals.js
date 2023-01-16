function modulo(a, b) {
  return a % b;
}

function squareRoot(n) {
  return Math.sqrt(n);
}

function raiseToPower(m, n) {
  return m ** n;
}

function formatMoney(amount) {
  return `£${amount.toFixed(2)}`;
}

function calculateCircleArea(r) {
  return parseFloat((Math.PI * r ** 2).toFixed(3));
}

function calculateFullTurns(degrees) {
  return Math.floor(degrees / 360);
}

function findSmallestAndBiggest(arr) {
  arr = arr.sort((a, b) => a - b);
  const min = arr[0];
  const max = arr[arr.length - 1];
  return [min, max];
}
