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

export function addEnemy(enemyType, patternType) {
  let x;
  let y;

  if(patternType === 1) {
    x = 0;
    y = 50;
  } else if(patternType === 2) {
    x = width();
    y = height() - 100;
  } else if(patternType === 3) {
    x = width();
    y = 150;
  } else {
    x = 0;
    y = height() / 2 + 100;
  }

  return add([
    sprite(`enemy${enemyType}`),
    origin('center'),
    pos(x, y),
    body(),
    'enemy',
    `enemyType${enemyType}`,
    `patternType${patternType}`,
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

  // Pattern type 1 movement
  action('patternType1', enemy => {
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

  // Pattern type 2 movement
  action('patternType2', enemy => {
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

  // Pattern type 3 movement
  action('patternType3', enemy => {
    if(enemy.pos.x < width() / 2) {
      if(enemy.pos.y < height() / 2) {
        // Top left
        enemy.move(0, ENEMY1_SPEED);
      } else {
        // Bottom left
        enemy.move(-ENEMY1_SPEED, 0);
      }
    } else {
      if(enemy.pos.y < height() / 2) {
        // Top right
        enemy.move(-ENEMY1_SPEED, 0);
      } else {
        // Bottom right
        enemy.move(ENEMY1_SPEED, 0);
      }
    }
  });

  // Pattern type 4 movement
  action('patternType4', enemy => {
    enemy.move(ENEMY1_SPEED, 0);
  });
}