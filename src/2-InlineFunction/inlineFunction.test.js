import {printReport} from './inlineFunction';

const players = [
  { name: 'Giannis Antetokounmpo', points: 1690 },
  { name: 'Khris Middleton', points: 1159 }
];

describe('Inline Function', () => {
  let consoleOutput = [];

  beforeEach(() => {
    // probably should not be mocking console. Don't tell.
    console.log = output => consoleOutput.push(output);
  });

  test('creates report', () => {
    printReport(players);

    expect(consoleOutput).toEqual([
      'Extract Function Basketball',
      'Total Points',
      'Giannis Antetokounmpo: 1690',
      'Khris Middleton: 1159',
      'Uncreative Footer Row',
      'Total Combined Points: 2849'
    ]);
  });
});

