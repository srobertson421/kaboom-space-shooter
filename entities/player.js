import {
  sprite,
  pos,
  add,
  origin,
  body,
  width,
  height,
  destroy,
  overlaps,
  keyDown,
  keyPress,
  action,
  play
} from '../engine.js';

import explosion from './explosion.js';
import laser from './laser.js';

const SHIP_SPEED = 500;
const LASER_SPEED = 800;

function player() {
  const ship = add([
    sprite('ship'),
    origin('center'),
    pos(width() / 2, height() - 100),
    body()
  ]);

  overlaps('laser', 'enemy', (laser, enemy) => {
    const enemX = enemy.pos.x;
    const enemY = enemy.pos.y;
    destroy(laser);
    destroy(enemy);
    play('enemyDeathSound');

    explosion(enemX, enemY);
  });

  keyDown('left', () => {
    ship.move(-SHIP_SPEED, 0);
  });

  keyDown('right', () => {
    ship.move(SHIP_SPEED, 0);
  });

  keyDown('up', () => {
    ship.move(0, -SHIP_SPEED);
  });

  keyDown('down', () => {
    ship.move(0, SHIP_SPEED);
  });

  keyPress('space', () => {
    laser(ship.pos.x, ship.pos.y - 50);
    play('laserSound');
  });

  action('laserMove', (laser) => {
    if(laser.pos.y <= 0) {
      destroy(laser);
    } else {
      laser.move(0, -LASER_SPEED);
    }
  });

  return ship;
}

export default player;