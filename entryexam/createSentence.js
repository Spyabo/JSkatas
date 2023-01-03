function createSentence(obj) {
  return `Hello my name is ${obj.name}, I am ${obj.age} years old and I am a ${obj.job}`;
}

console.log(createSentence({ name: "Mitch", age: 29, job: "tutor" }));
