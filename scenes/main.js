import {
  scene,
  gravity,
  height,
  play,
  wait,
  loop,
  rand
} from '../engine.js';

import {
  addPlayer,
  playerControls,
} from '../entities/player.js';
import { addEnemy, enemyActions } from '../entities/enemy.js';
import { addBackground, backgroundActions } from '../entities/background.js';
import { laserActions, laserCollisions } from '../entities/laser.js';
import { addScore } from '../entities/score.js';

const mainScene = () => scene("main", () => {

  gravity(0);
  // play('bg-music', true);

  // Add Collisions
  laserCollisions();

  // Add Actions
  backgroundActions();
  laserActions();
  enemyActions();

  // Add Entities
  addBackground(0, 0);
  addBackground(0, -height());
  addScore();
  addPlayer();

  loop(5.5, () => {
    const enemyType = Math.round(rand(1, 2));
    for(let i = 0; i < 6; i++) {
      wait(i + 0.5, () => addEnemy(enemyType));
    }
  });

  // Add Controls
  playerControls();
});

export default mainScene;