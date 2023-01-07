function gatherPets(people) {
  let pets = [];
  people.forEach((person) => {
    pets.push(...person.pets);
  });
  return pets;
}

console.log(gatherPets([{ name: "Malcolm", pets: ["Bear", "Minu"] }]));
