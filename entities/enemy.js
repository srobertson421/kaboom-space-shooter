import {
  rand,
  sprite,
  pos,
  add,
  origin,
  body,
  width,
  height
} from '../engine.js';

export function addEnemy() {
  const x = rand(50, width() - 50);
  const y = rand(50, height() - 300);
  const enemyType = rand(1, 4);

  return add([
    sprite(`enemy${Math.round(enemyType)}`),
    origin('center'),
    pos(x, y),
    body(),
    'enemy',
    {
      health: Math.round(rand(1, 4))
    }
  ]);
}