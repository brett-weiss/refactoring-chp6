import {
  getFreeThrowShootingPercentage,
  getPlayerShootingStats
} from './combineFunctionsIntoTransform';

const player = {
  name: 'Khris Middleton',
  freeThrowAttempts: 196,
  freeThrowMakes: 178,
};

describe('Combine Functions Into Transform', () => {
  test('getFreeThrowShootingPercentage', () => {
    expect(getFreeThrowShootingPercentage(player)).toBe(91);
  });

  test('getPlayerShootingStats', () => {
    expect(getPlayerShootingStats(player)).toEqual({
      freeThrowPercentage: 91
    });
  });
});
