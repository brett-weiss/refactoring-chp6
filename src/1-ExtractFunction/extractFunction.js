// Extract Function p.106

// Mechanics
// > Create a new function and name it after intent
// > Copy extracted code to function
// > Look for local parameters that might need to be passed to the function
// > Compile or Test after variables have been dealt with
// > Replace Extracted Code
// > Test

// Examples:
// > Extract function that receives no parameters
// > Extract function that receives a parameter
// > Extract a function that returns a parameter

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
