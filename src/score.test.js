
import score from './score';

describe('Bowling', () => {
  it('should score a game with all gutterballs', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(0);
  });
});