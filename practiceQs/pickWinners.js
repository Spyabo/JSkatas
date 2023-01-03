function pickWinners(numbers) {
  let winners = [];

  for (let i = 1; i < numbers.length; i += 2) {
    if (numbers[i] % 2 != 0) {
      winners.push({ seat: i, ticketCost: numbers[i] });
    }
  }
  return winners;
}

console.log(pickWinners([1, 3, 5, 7, 9, 11, 16, 28, 6, 93]));
