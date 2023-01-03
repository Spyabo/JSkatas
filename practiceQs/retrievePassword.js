function retrievePassword(user) {
  return user.password;
}

console.log(retrievePassword({ name: "Lucy", password: "n0rthc0derzzz" }));
