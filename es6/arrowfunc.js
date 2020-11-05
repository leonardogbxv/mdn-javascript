// const square = () => {
//   return 2 ** 2
// }

// const square = (number) => {
//   return number * number;
// }

// const square = number => number * number;
// console.log(square(4));

const games = [
  { id: 1, isPlaying: true },
  { id: 2, isPlaying: false },
  { id: 3, isPlaying: true },
];

// const playingGames = games.filter(function(game) { return games.isPlaying; });
const playingGames = games.filter(game => games.isPlaying);