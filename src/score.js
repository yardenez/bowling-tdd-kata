export default function score(rolls) {

  let score = 0;
  let frameIndex = 0;

  const isStrike = (frameIndex) => rolls[frameIndex] === 10;
  const isSpare = (frameIndex) => rolls[frameIndex] + rolls[frameIndex+1] === 10;
  const isTenthFrame = (frameIndex) => frameIndex === 18;

  for(let frame=0; frame < 10; frame++){
    if(isStrike(frameIndex)){
      score += 10 + rolls[frameIndex+1] + rolls[frameIndex+2];
      frameIndex+=1;
    }
    else if (isSpare(frameIndex)){
      score += 10 + rolls[frameIndex+2];
      frameIndex+=2;
    }
    else {
      score += rolls[frameIndex]+rolls[frameIndex+1];
      frameIndex+=2;
    }    
  }
  return score;
}

