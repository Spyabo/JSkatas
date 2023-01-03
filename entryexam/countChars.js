function countChars(string, char) {
  return string.replace(new RegExp(`[^${char}]`, "g"), "").length;
}

console.log(countChars("hello world", "l"));
