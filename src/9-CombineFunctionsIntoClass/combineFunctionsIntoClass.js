// Combine Functions Into Class p.144

// Mechanics
// > Encapsulate Record to the common data the functions share
  // Introduce parameter object
// > Move Function for each function in the new class
// > Extract Function to to logic that manipulates data

// Contrived imagine different modules for Client 1 and Client 2.

// Client 1
export function getFreeThrowShootingPercentage(player) {
  return Math.round((player.freeThrowMakes / player.freeThrowAttempts) * 100);
}

// Client 2
export function getPlayerShootingStats(player) {
  function calcFtPercentage(made, attempts) {
    return Math.round((made / attempts) * 100);
  }

  return {
    freeThrowPercentage: calcFtPercentage(player.freeThrowMakes, player.freeThrowAttempts)
  };
}
