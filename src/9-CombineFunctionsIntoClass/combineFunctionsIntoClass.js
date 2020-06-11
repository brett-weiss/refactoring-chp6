// Combine Functions into Class p.144

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
