function orderSupplies(supplies, guests) {
  return Object.values(supplies).reduce((a, b) => a + b) * guests;
}

console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));
