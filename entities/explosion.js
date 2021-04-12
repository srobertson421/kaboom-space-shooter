import {
  sprite,
  pos,
  add,
  origin,
  scale,
  destroy
} from '../engine.js';

function explosion(x, y) {
  const explosion = add([
    sprite('explosion'),
    pos(x, y),
    origin('center'),
    scale(1.5, 1.5)
  ]);

  explosion.animSpeed = 0.025;

  explosion.onAnimEnd('explode', () => {
    destroy(explosion);
  });

  explosion.play('explode', false);
}

export default explosion;