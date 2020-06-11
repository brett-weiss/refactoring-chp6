// Inline Variable p.123

// probably don't need the extra temporary variable.
export function gameResult(score, opponentScore) {
  const isWin = score > opponentScore;
  return isWin ? 'win' : 'loss';
}
