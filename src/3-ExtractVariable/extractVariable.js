// Extract Variable p.119

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

// This example is purposely contrived! Player stats are per game so that the
// totals need to be calculated.
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


