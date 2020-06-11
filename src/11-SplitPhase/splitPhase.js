// Split Phase p.154

// Mechanics
// > Extract second phase. Test.
// > Introduce intermediate object. Test.
  // Move variables one at at time. Test.
// > Extract Function! Test.

// What are the two phases
export function teamReport(games, players) {
  let totalPoints = 0;
  let totalRebounds = 0;
  const result = ['Team Stats Report'];

  players.forEach(player => {
    totalPoints += player.points;
    totalRebounds += player.rebounds;
  });

  const teamPPG = Math.round(totalPoints / games);

  result.push(`Points Per Game: ${teamPPG}`);
  result.push(`Total Points: ${totalPoints}`);
  result.push(`Total Rebounds: ${totalRebounds}`);
  return result;
}
