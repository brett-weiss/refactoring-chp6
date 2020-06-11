// Extract Function p.115

// Questions:
// Where do you see an opportunity to reduce delegation
// Where is the function unneeded to help explain the logic
// Hint: Both question 'sum' up the point of inline functions.

import {sumBy} from 'lodash';

function printHeader() {
  console.log('Extract Function Basketball');
  console.log('Total Points');
}

function printPlayerRows(players) {
 players.forEach(player => {
    console.log(`${player.name}: ${player.points}`)
  });
}

function sumPoints(players) {
  return sumBy(players, 'points');
}

function calculateTotalPoints(players) {
  return sumPoints(players);
}

function printFooter(points) {
  console.log('Uncreative Footer Row');
  console.log(`Total Combined Points: ${points}`);
}

export function printReport(players) {

  printHeader();

  printPlayerRows(players);

  const totalPoints = calculateTotalPoints(players);

  printFooter(totalPoints);
}
