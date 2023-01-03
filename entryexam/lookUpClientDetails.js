function lookUpClientDetails(clientList, firstName, property) {
  let result = "client does not exist";
  clientList.forEach((client) => {
    if (client.firstName === firstName) {
      result = client[property] ? client[property] : "property does not exist";
    }
  });
  return result;
}

const clientList = [
  {
    firstName: "Bob",
    lastName: "Jones",
    age: 41,
    pet: {
      petName: "Buster",
      petType: "dog",
      petAge: 3,
    },
    favouriteColour: "Yellow",
    location: "Manchester",
  },
];
console.log(lookUpClientDetails(clientList, "Bob", "lastName"));
