function makeGuestList(person) {
  let nameArr = person["name"].split(" ");
  delete person.name;
  person.firstName = nameArr[0];
  person.lastName = nameArr[1];

  return person;
}

console.log(makeGuestList({ name: "Hannah Fry", age: 46 }));
