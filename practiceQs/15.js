function isPartyViable(guests) {
  let sum = 0;
  if (guests.length < 5) {
    return false;
  }
  guests.forEach((element) => {
    sum += element.paidForTicket;
  });
  return sum >= 100;
}

console.log(
  isPartyViable([
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 20 },
    { name: "saleh", paidForTicket: 2 },
    { name: "philippa", paidForTicket: 30 },
    { name: "kev", paidForTicket: 26 },
    { name: "sarah", paidForTicket: 11 },
  ])
);
