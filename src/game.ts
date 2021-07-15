'use strict';

import Fruit from './fruit';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

(function () {
  function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    let fruit = new Fruit();
    fruit.render(ctx);
  }

  mainLoop();
})();