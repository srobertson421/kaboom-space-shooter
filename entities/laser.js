import {
  add,
  sprite,
  origin,
  pos,
  body
} from '../engine.js'

function laser(x, y) {
  return add([
    sprite('laser'),
    origin('center'),
    pos(x, y),
    body(),
    'laser',
    'laserMove'
  ]);
}

export default laser;