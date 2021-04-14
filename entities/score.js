import {
  text,
  add,
  pos,
  width,
  origin
} from '../engine.js';

export function addScore() {
  const score = add([
    text('Score: 0', 32),
    pos(width() - 300, 50),
    origin('center'),
    {
      score: 0
    },
    'score'
  ]);

  score.on('increaseScore', increaseAmount => {
    score.score += increaseAmount;
    score.text = `Score: ${score.score}`;
  });
}