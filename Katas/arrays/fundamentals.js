function getEvenNumbers(nums) {
  return nums.filter((num) => num % 2 == 0);
}

function getItemsLongerThan(array, len) {
  return array.filter((i) => i.length > len);
}

function getLastItems(array, n) {
  return array.slice(-n);
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
  return sandwich.slice(1, sandwich.length - 1);
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  return (newArray = array.slice(0, n).concat(array.slice(n + 1)));
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function flattenArrayByOne(arrayOfArrays) {
  //for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  return arrayOfArrays.flat(1);
}
