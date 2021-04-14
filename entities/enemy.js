import {
  rand,
  sprite,
  pos,
  add,
  origin,
  body,
  width,
  height,
  action,
  destroy
} from '../engine.js';

const ENEMY1_SPEED = 400;

export function addEnemy(enemyType) {
  let x;
  let y;

  if(enemyType === 1) {
    x = 0;
    y = 50;
  } else if(enemyType === 2) {
    x = width();
    y = height() - 100;
  } else if(enemyType === 3) {
    x = rand(50, width() - 50);
    y = rand(50, height() - 300);
  } else {
    x = rand(50, width() - 50);
    y = rand(50, height() - 300);
  }

  return add([
    sprite(`enemy${enemyType}`),
    origin('center'),
    pos(x, y),
    body(),
    'enemy',
    `enemyType${enemyType}`,
    {
      health: enemyType,
      type: enemyType
    }
  ]);
}

export function enemyActions() {
  // Out of bounds destroy
  action('enemy', enemy => {
    switch(true) {
      case enemy.pos.x < -50:
        destroy(enemy);
      case enemy.pos.x > width() + 50:
        destroy(enemy);
      case enemy.pos.y < -50:
        destroy(enemy);
      case enemy.pos.y > height() + 50:
        destroy(enemy);
    }
  });

  // Enemy type 1 movement
  action('enemyType1', enemy => {
    if(enemy.pos.x < width() / 2) {
      if(enemy.pos.y < height() / 2) {
        // Top left
        enemy.move(ENEMY1_SPEED, 0);
      } else {
        // Bottom left
        enemy.move(-ENEMY1_SPEED, 0);
      }
    } else {
      if(enemy.pos.y < height() / 2) {
        // Top right
        enemy.move(0, ENEMY1_SPEED);
      } else {
        // Bottom right
        enemy.move(-ENEMY1_SPEED, 0);
      }
    }
  });

  // Enemy type 2 movement
  action('enemyType2', enemy => {
    if(enemy.pos.x < width() / 2) {
      if(enemy.pos.y < height() / 2) {
        // Top left
        enemy.move(ENEMY1_SPEED, 0);
      } else {
        // Bottom left
        enemy.move(-ENEMY1_SPEED, 0);
      }
    } else {
      if(enemy.pos.y < height() / 2) {
        // Top right
        enemy.move(-ENEMY1_SPEED / 2, -ENEMY1_SPEED);
      } else {
        // Bottom right
        enemy.move(-ENEMY1_SPEED, -ENEMY1_SPEED / 2);
      }
    }
  });
}