function toCamelCase(str) {
  let words = str.split(/[^A-Za-z0-9]/);
  let ans = '';
  if (words.length > 0) {
    ans = words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
  }
  return ans;
}
