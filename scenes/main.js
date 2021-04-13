import {
  scene,
  gravity,
  height,
  play
} from '../engine.js';

import player from '../entities/player.js';
import enemy from '../entities/enemy.js';
import background from '../entities/background.js';

const mainScene = () => scene("main", () => {

  gravity(0);
  play('bg-music', true);

  background(0, 0);
  background(0, -height());
  
	player();

  for(let i = 0; i < 6; i++) {
    enemy();
  }
});

export default mainScene;