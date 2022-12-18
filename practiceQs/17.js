function calculateTables(guests, seats) {
  return {
    tables: Math.floor(guests / seats),
    remainingGuests: guests % seats,
  };
}

console.log(calculateTables(14, 6));
