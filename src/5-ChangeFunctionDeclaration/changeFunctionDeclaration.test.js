import { seasonStats } from './changeFunctionDeclaration';

const player = {
  gamesPlayed: 10,
  points: 150,
  rebounds: 60
};

describe('Change Function Declaration', () => {
  test('points per game', () => {
    const result = seasonStats(player);

    expect(result.ppg).toBe(15);
  });

  test('rebounds per game', () => {
    const result = seasonStats(player);

    expect(result.rpg).toBe(6);
  });

});
