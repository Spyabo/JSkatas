function findTotalAge(array) {
  if (array.length > 0) {
    let sum = 0;
    array.forEach((element) => {
      sum += element.age;
    });
    return sum;
  }
  return 0;
}

console.log(findTotalAge([{ name: "Sam", age: 31 }]));
