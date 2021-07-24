'use strict';

import Fruit from './fruit.js';
import Point from './point.js';
import Snake from './snake.js';
import Controller from './controller.js';

/**
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
window.ctx = ctx;
window.canvas = canvas;

(() => {
  const fruit = new Fruit(new Point(Math.random() * canvas.width, Math.random() * canvas.height));
  const snake = new Snake(new Point(canvas.height / 2, canvas.width / 2));
  const controller = new Controller();
  const fps = 15;
  let gameStarted = true;
  let fpsInterval, now, then, elapsed;

  function mainLoop(frameTime) {
    window.requestAnimationFrame(mainLoop);
    now = frameTime;
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      if (gameStarted) {
        if (snake.checkCollision(fruit)) {
          snake.grow();
          fruit.update();
        }

        snake.checkWallCollision();
  
        fruit.render();
        snake.update(controller);
        snake.render();
      }
    }
  }

  fpsInterval = 1000 / fps;
  then = window.performance.now();
  mainLoop();
})();