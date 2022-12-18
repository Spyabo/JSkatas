function gatherFeedback(feedbackArray) {
  let positive = 0;
  let negative = 0;
  let neutral = 0;

  feedbackArray.forEach((element) => {
    if (element[1] >= 7) {
      positive += 1;
    } else if (element[1] <= 3) {
      negative += 1;
    } else {
      neutral += 1;
    }
  });
  return { positive: positive, negative: negative, neutral: neutral };
}

console.log(
  gatherFeedback([
    ["maddie", 10],
    ["jatinder", 3],
    ["rose", 6],
  ])
);
