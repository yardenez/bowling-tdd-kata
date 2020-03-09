export default function score(rolls) {
  return rolls.reduce((firstRoll,secondRoll)=>firstRoll+secondRoll,0);
}
