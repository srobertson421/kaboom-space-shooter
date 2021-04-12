import {
  add,
  sprite,
  scale,
  width,
  height,
  origin,
  pos,
  action
} from '../engine.js';

const BG_SCROLL_SPEED = 100;

function background(x, y) {
  const bg = add([
    sprite('bg'),
    scale(width() / 240, height() / 240),
		origin("topleft"),
    pos(x, y),
    'bgScroll'
  ]);

  action('bgScroll', (bg) => {
    if(bg.pos.y >= height()) {
      bg.pos.y = -height();
    } else {
      bg.move(0, BG_SCROLL_SPEED);
    }
  });

  return bg;
}

export default background;