'use strict';

import Point from './point.js';

export default class Fruit {
  /**
   * Initializes new Fruit
   * @param {Point} startingPoint Starting point where it spawns
   */
  constructor(startingPoint) {
    /**
     * @type Point
     */
    this.location = startingPoint;
    this.radius = 10;
  }

  render() {
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.location.x = Math.random() * canvas.width;
    this.location.y = Math.random() * canvas.height;
  }
}