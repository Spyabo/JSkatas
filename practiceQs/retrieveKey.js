function retrieveKey(object, key) {
  return object[key];
}

console.log(retrieveKey({ name: "Sam" }, "name"));
