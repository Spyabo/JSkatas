function narcissistic(value) {
  let arr = Array.from(String(value), Number);
  arr = arr.map((val) => val ** arr.length).reduce((a, b) => a + b);
  return value === arr;
}
