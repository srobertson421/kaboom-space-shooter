import {
  scene,
  text,
  add,
  pos,
  origin,
  width,
  height,
  mouseClick,
  go
} from '../engine.js';

const menuScene = () => scene('menu', () => {
  add([
    text('Space Shooter', 32),
    pos(width() / 2, height() / 2 - 150),
    origin('center')
  ]);

  add([
    text('Click to Start!', 32),
    pos(width() / 2, height() / 2),
    origin('center')
  ]);

  mouseClick(() => {
    go('main');
  });
});

export default menuScene;