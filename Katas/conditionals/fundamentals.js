function areValuesEqual(left, right) {
  return left === right;
}

function areValuesNotEqual(left, right) {
  return left !== right;
}

function isFromThe60s(year) {
  return 1959 < year && year < 1970;
}

function isEvenLength(string) {
  return string.length % 2 === 0;
}

function areStringsEqualCaseInsensitive(left, right) {
  return left.toLowerCase() === right.toLowerCase();
}
