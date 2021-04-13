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

export function addBackground(x, y) {
  return add([
    sprite('bg'),
    scale(width() / 240, height() / 240),
		origin("topleft"),
    pos(x, y),
    'bgScroll'
  ]);
}

export function backgroundActions() {
  action('bgScroll', (bg) => {
    if(bg.pos.y >= height()) {
      bg.pos.y = -height();
    } else {
      bg.move(0, BG_SCROLL_SPEED);
    }
  });
}