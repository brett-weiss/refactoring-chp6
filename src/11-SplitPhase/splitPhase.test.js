import {teamReport} from './splitPhase';

const games = 10;

const players = [
  {name: 'Khris', points: 100, rebounds: 10},
  {name: 'Giannis', points: 300, rebounds: 40}
];

describe('Split Phase', () => {
  test('report creation', () => {
    const result = teamReport(games, players);

    expect(result).toEqual([
      'Team Stats Report',
      'Points Per Game: 40',
      'Total Points: 400',
      'Total Rebounds: 50'
    ]);
  });
});
