function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (String(arrayOfArrays[i]).includes(item)) {
      continue;
    }
    return false;
  }
  return true;
}

console.log(isItemOmnipresent([1, [1, 0, [1], 0]], 1));
