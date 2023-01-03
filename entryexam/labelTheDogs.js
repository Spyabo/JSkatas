function labelTheDogs(animals) {
  for (let i = 0; i < animals.length; i++) {
    if (!animals[i].type) {
      animals[i].type = "dog";
    }
  }
  return animals;
}

console.log(labelTheDogs([{ name: "Obi" }]));
