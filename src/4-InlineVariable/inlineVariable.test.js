import { gameResult } from './inlineVariable';

describe('Inline Variable', () => {

  test('team wins when scoring more than opponent', () => {
    const result = gameResult(100, 70);

    expect(result).toBe('win');
  });

  test('team loses when scoring less than opponent', () => {
    const result = gameResult(75, 87);

    expect(result).toBe('loss');
  });
});
