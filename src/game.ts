'use strict';

import Fruit from './fruit.js';
import Point from './point.js';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

(function () {
  function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    let fruit = new Fruit(new Point(50, 50));
    fruit.render(ctx);
  }

  mainLoop();
})();