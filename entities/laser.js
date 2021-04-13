import {
  add,
  sprite,
  origin,
  pos,
  body,
  action,
  destroy,
  overlaps,
  play
} from '../engine.js'

import { addExplosion } from './explosion.js';

const LASER_SPEED = 800;

export function addLaser(x, y) {
  return add([
    sprite('laser'),
    origin('center'),
    pos(x, y),
    body(),
    'laser',
    'laserMove'
  ]);
}

export function laserCollisions() {
  overlaps('laser', 'enemy', (laser, enemy) => {
    const enemX = enemy.pos.x;
    const enemY = enemy.pos.y;
    destroy(laser);
    destroy(enemy);
    play('enemyDeathSound');

    addExplosion(enemX, enemY);
  });
}

export function laserActions() {
  action('laserMove', (laser) => {
    if(laser.pos.y <= 0) {
      destroy(laser);
    } else {
      laser.move(0, -LASER_SPEED);
    }
  });
}