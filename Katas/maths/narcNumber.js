/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. Using base 10 for this example.
e.g. 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/
function narcissistic(value) {
  let arr = Array.from(String(value), Number);
  arr = arr.map((val) => val ** arr.length).reduce((a, b) => a + b);
  return value === arr;
}

console.log(narcissistic(153));
