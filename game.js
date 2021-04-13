import menuScene from './scenes/menu.js';
import mainScene from './scenes/main.js';
import {
  init,
  start,
  loadSprite,
  loadSound
} from './engine.js';

// kaboom.debug.showArea = true;

loadSprite('bg', '/assets/bg.png');
loadSprite('ship', '/assets/ship.png');
loadSprite('laser', '/assets/laser.png');
loadSprite('enemy1', '/assets/enemy1.png');
loadSprite('enemy2', '/assets/enemy2.png');
loadSprite('enemy3', '/assets/enemy3.png');
loadSprite('enemy4', '/assets/enemy4.png');
loadSprite('explosion', '/assets/explosion.png', {
  sliceX: 4,
  sliceY: 4,
  anims: {
    explode: [0,15]
  }
});
loadSound('laserSound', '/assets/laser.ogg');
loadSound('enemyDeathSound', '/assets/enemy-death.ogg');
loadSound('bg-music', '/assets/bg-music.ogg');

init({
  canvas: document.getElementById('game'),
  fullscreen: true,
	scale: 0.5
});

menuScene();
mainScene();

start('main');