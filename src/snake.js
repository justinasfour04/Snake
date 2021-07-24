'use strict';

import Fruit from './fruit.js';
import Point from './point.js';
import Controller from './controller.js';
import Keys from './keys.js';

const VELOCITY = 0.1;

export default class Snake {
  /**
   * Initializes new Snake
   * @param {Point} startingPoint Initial location on the map
   */
  constructor(startingPoint) {
    this.radius = 10;
    this.body = Array.from({length: 6}, (point, i) => new Point(startingPoint.x + i * (this.radius * 2), startingPoint.y));
    this.vx = 0;
    this.vy = 0;
  }

  /**
   * Render snake in 2d context
   * @param {CanvasRenderingContext2D} ctx 
   */
  render() {
    for (let i = 0; i < this.body.length; i++) {
      let point = this.body[i];
      if (i == this.body.length - 1) {
        ctx.fillStyle = '#297A4A';
      } else {
        ctx.fillStyle = '#000000';
      }
      ctx.beginPath();
      ctx.arc(point.x, point.y, this.radius, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }

  /**
   * Updates snake
   * @param {HTMLCanvasElement} canvas 
   * @param {Controller} controller
   */
  update(controller) {
    const { buttonPressed } = controller;
    if (this.vx === 0 && this.vy === 0) { // Not moving yet
      if (buttonPressed.has(Keys.UP)) { // Move up
        this.vx = 0;
        this.vy = -VELOCITY;
      } else if (buttonPressed.has(Keys.DOWN)) { // Move down
        this.vx = 0;
        this.vy = VELOCITY;
      } else if (buttonPressed.has(Keys.RIGHT)) { // Move right
        this.vy = 0;
        this.vx = VELOCITY;
      }
    } else {
      if (this.vx > 0 || this.vx < 0) { // moving to the right or left
        if (buttonPressed.has(Keys.UP)) { // Move up
          this.vx = 0;
          this.vy = -VELOCITY;
        } else if (buttonPressed.has(Keys.DOWN)) { // Move down
          this.vx = 0;
          this.vy = VELOCITY;
        }
      } else { // moving up or down
        if (buttonPressed.has(Keys.RIGHT)) { // Move up
          this.vy = 0;
          this.vx = VELOCITY;
        } else if (buttonPressed.has(Keys.LEFT)) { // Move down
          this.vy = 0;
          this.vx = -VELOCITY;
        }
      }
  
      this.move();
    }
  }

  move() {
    var head = this.body[this.body.length - 1];
    var tail = this.body.shift();
    tail.x = head.x + this.vx;
    tail.y = head.y + this.vy;

    if (this.vx > 0) { // moving right
      tail.x += (this.radius * 2);
    } else if (this.vx < 0) { // moving left
      tail.x -= (this.radius * 2);
    } else if (this.vy > 0) { // moving down
      tail.y += (this.radius * 2);
    } else if (this.vy < 0) { // moving up
      tail.y -= (this.radius * 2);
    }

    this.body.push(tail);
  }

  /**
   * Checks collisions with fruit
   * @param {Fruit} fruit the fruit
   * @returns {boolean} true if there was a collision else false
   */
  checkCollision(fruit) {
    const dx = this.body[this.body.length - 1].x - fruit.location.x;
    const dy = this.body[this.body.length - 1].y - fruit.location.y;
    const distance = Math.hypot(dx, dy);
    return distance < (this.radius) + (fruit.radius);
  }

  checkWallCollision() {
    let snakeHead = this.body[this.body.length - 1];
    if (snakeHead.x - this.radius <= 0) {
      snakeHead.x = canvas.width - this.radius;
    } else if (snakeHead.x + this.radius >= canvas.width) {
      snakeHead.x = this.radius;
    } else if (snakeHead.y - this.radius <= 0) {
      snakeHead.y = canvas.height - this.radius
    } else if (snakeHead.y + this.radius >= canvas.height) {
      snakeHead.y = this.radius;
    }
  }

  /**
   * Add another part to the body
   */
  grow() {
    var head = this.body[0];
    var newPart = new Point(head.x + this.vx + this.radius, head.y + this.vy + this.radius);
    this.body.unshift(newPart);
  }
}