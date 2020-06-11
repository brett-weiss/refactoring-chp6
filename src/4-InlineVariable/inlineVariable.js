// Inline Variable p.123

// Mechanics
// > Check that the right-hand assignment is free of side effects and is immutable.
// > Find the first reference to  the variable and replace it with the right hand assignment.
// > Test
// > Repeat replacement and testing.
// > Remove the original declaration.
// >Test


// Does the temporary variable make this more clear?
export function gameResult(score, opponentScore) {
  const isWin = score > opponentScore;
  return isWin ? 'win' : 'loss';
}
