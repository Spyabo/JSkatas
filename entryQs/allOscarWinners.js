function allOscarWinners(films) {
  let result = true;
  films.forEach((film) => {
    if (film.wonOscar != true) {
      result = false;
    }
  });
  return result;
}

console.log(
  allOscarWinners([
    {
      title: "Forrest Gump",
      wonOscar: true,
    },
    {
      title: "Moonlight",
      wonOscar: true,
    },
    {
      title: "The Breadwinner",
      wonOscar: false,
    },
    {
      title: "No Country for Old Men",
      wonOscar: true,
    },
  ])
);
