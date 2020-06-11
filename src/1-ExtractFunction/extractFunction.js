// Extract Function p.106

export function printReport(players) {
  // Prints the report header
  console.log('Extract Function Basketball');
  console.log('Total Points');

  // Print Player names with their points
  players.forEach(player => {
    console.log(`${player.name}: ${player.points}`)
  });

  // Calculates total points
  let total = 0;
  players.forEach(player => {
    total += player.points;
  });

  // Prints the report footer
  console.log('Uncreative Footer Row');
  console.log(`Total Combined Points: ${total}`);
}
