import {player} from './encapsulateVariable';

describe('Encapsulate Variable', () => {
  test('initial player data', () => {
    const result = player;

    expect(result).toEqual({
      firstName: 'Chris',
      lastName: 'Middleton',
      points: 1159
    });
  });

  test('when player is updated', () => {
    const result = player;
    player.firstName = 'Khris';
    player.points = player.points + 30;

    expect(result).toEqual({
      firstName: 'Khris',
      lastName: 'Middleton',
      points: 1189
    });
  });
});
