// Extract Variable p.119

// Mechanics
// > Beware of polymorphic functions. Do subclasses override?
// > Ensure the expression you want to extract doesn't have side effects
// > Declare an immutable variable set to the expression you want named
// > Replace the original expression with the new variable.
// > Test

// What variables can be extracted to make this more clear?
export function assistRatioForSeason(gamesPlayed, playerPerGameStats) {
  const {assists, fieldGoalAttempts, freeThrowAttempts, turnovers} = playerPerGameStats;

  return Math.round(
    (assists * gamesPlayed
      / (fieldGoalAttempts * gamesPlayed
        + (0.44 * (freeThrowAttempts * gamesPlayed))
        + assists * gamesPlayed
        + turnovers * gamesPlayed))
      * 100);
}

/*
Background: The Hollinger Assist Ratio metric is one stat used to help determine
a players impact to the team's overall offensive productivity. The ability
to setup a teammate for a score is key to a successful outcome. When a player
creates an assist over taking a shot or turning the ball over they are
precedent for teamwork over individual stats.

Glossary:
Assist: When a pass to a teammate leads directly to a basket.
FGA: Total number of shots taken.
FTA: Total number of free throws taken.
TO: Turnover - when a player loses possession of the ball to the opposing team.
https://www.nba.com/resources/static/team/v2/thunder/statlab-activity-EN-181101.pdf
*/
