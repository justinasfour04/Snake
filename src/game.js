'use strict';

import Fruit from './fruit.js';
import Point from './point.js';
import Snake from './snake.js';

/**
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

(() => {
  const fruit = new Fruit(new Point(Math.random() * canvas.width, Math.random() * canvas.height));
  const snake = new Snake(new Point(canvas.height / 2, canvas.width / 2));

  function init() {
    fruit.render(ctx);
    snake.render(ctx);
  }

  function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('keydown', (event) => {
    console.log(event.code);
  })

  init();
  mainLoop();
})();