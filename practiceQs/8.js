function isThisAPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isThisAPalindrome("yay"));
