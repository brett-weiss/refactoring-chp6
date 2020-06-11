// Combine Functions into Transform p.149
// Mechanics
  // 1. Create Function that accepts source data
  // 2. Function should return a deep copy of data (never change source data)
  //    Consider a test to verify source data object does not change after transform function.
  // 3. Bring logic into new transform function and return result as new field.
  // 4. Change client code to use the new field.

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
