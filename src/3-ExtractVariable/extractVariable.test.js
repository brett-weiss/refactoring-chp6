import { assistRatioForSeason } from './extractVariable';

const gamesPlayed = 2;

const player = {
  assists: 3,
  fieldGoalAttempts: 7,
  freeThrowAttempts: 1,
  turnovers: 1
};

describe('Extract Function', () => {

  test('assistRatioForSeason calculation', () => {
    const result = assistRatioForSeason(gamesPlayed, player);

    expect(result).toBe(26);
  });
});
