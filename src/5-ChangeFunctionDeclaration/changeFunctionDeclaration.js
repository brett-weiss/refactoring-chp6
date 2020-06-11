// Change Function Declaration p.124

// Mechanics
// > Remove a parameter if it isn’t referenced in the boty of the function.
// > Change the method declaration to the desired declaration.
// > Find all referenced to the old method declaration and update them.
// > Test.

/*
  Refactor pointsPerGame function using Change Function Declaration
  so that it can also be used to calculate rebounds per game.

  Rebounds per game = player.rebounds / player.gamesPlayed

  NOTE: there are test cases for points per game and rebounds
  per game. The Rebounds per game test case will fail until
  the correct value is returned.

  ppg: points per game
  rpg: rebounds per game
*/
function calculatePointsPerGame(player) {
  return Math.round(player.points / player.gamesPlayed);
}

export function seasonStats(player) {
  return {
    ppg: calculatePointsPerGame(player),
    rpg: 0
  };
}

