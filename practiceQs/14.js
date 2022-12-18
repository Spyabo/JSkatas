function trackAttendees(person, ticketCost) {
  person.paidForTicket = Number(ticketCost);

  return person;
}

console.log(
  trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, "0")
);
