
import score from './../score';

describe('Bowling', () => {
  
  it('should score a game with all gutterballs', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(0);
  });

  it('should score a game with an open frame',()=>{
    const rolls = [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(8);
  });

  it('should score a game with a single spare',()=>{
    const rolls = [ 5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(16);
  });

  it('should score a game with a single strike',()=>{
    const rolls = [ 10, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(24);
  });
});