'use strict';

import Body from './body.js';
import Point from './point.js';

export default class Snake {
  /**
   * Initializes new Snake
   * @param {Point} startingPoint Initial location on the map
   */
  constructor(startingPoint) {
    this.head = new Body(startingPoint);
  }

  /**
   * Render snake in 2d context
   * @param {CanvasRenderingContext2D} ctx 
   */
  render(ctx) {
    
  }

  /**
   * Updates snake
   * @param {HTMLCanvasElement} canvas 
   */
  update(canvas) {
    
  }
}