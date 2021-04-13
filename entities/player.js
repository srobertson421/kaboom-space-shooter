import {
  sprite,
  pos,
  add,
  origin,
  body,
  width,
  height,
  keyDown,
  keyPress,
  play,
  get
} from '../engine.js';

import { addLaser } from './laser.js';

const SHIP_SPEED = 500;

export function addPlayer() {
  return add([
    sprite('ship'),
    origin('center'),
    pos(width() / 2, height() - 100),
    body(),
    'player'
  ]);
}

export function playerControls() {
  const ship = get('player')[0];

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
    addLaser(ship.pos.x, ship.pos.y - 50);
    play('laserSound');
  });
}