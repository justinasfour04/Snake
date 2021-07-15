'use strict';



const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

(function () {
  function mainLoop() {
    window.requestAnimationFrame(mainLoop);
  }

  mainLoop();
})();