import {
  scene,
  gravity,
  height,
  play
} from '../engine.js';

import {
  addPlayer,
  playerControls,
} from '../entities/player.js';
import { addEnemy } from '../entities/enemy.js';
import { addBackground, backgroundActions } from '../entities/background.js';
import { laserActions, laserCollisions } from '../entities/laser.js';

const mainScene = () => scene("main", () => {

  gravity(0);
  // play('bg-music', true);

  // Add Collisions
  laserCollisions();

  // Add Actions
  backgroundActions();
  laserActions();

  // Add Entities
  addBackground(0, 0);
  addBackground(0, -height());
  addPlayer();

  for(let i = 0; i < 6; i++) {
    addEnemy();
  }

  // Add Controls
  playerControls();
});

export default mainScene;