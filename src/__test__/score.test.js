
import score from './../score';

describe('Bowling', () => {
  
  it('should score a game with all gutterballs', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(0);
  });

  it('should score a game with an open frame',()=>{
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3];
    expect(score(rolls)).toBe(8);
  });

  it('should score a game with a single spare',()=>{
    const rolls = [ 5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(16);
  });

  it('should score a game with a single strike',()=>{
    const rolls = [ 10, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(24);
  });

  it('should score a game with a double strike',()=>{
    const rolls = [ 10, 10, 5, 1, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(47);
  });

  it('should score a game with double spare',()=>{
    const rolls = [ 5, 5, 5, 5, 5 ,2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    expect(score(rolls)).toBe(37);
  });

  it('should score a game with strike followed by spare',()=>{
    const rolls = [ 10, 5, 5, 9, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    expect(score(rolls)).toBe(48);
  })

});