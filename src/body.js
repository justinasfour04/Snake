'use strict';

import Point from './point.js';

export default class Body {
  /**
   * Initializes new Body
   * @param {Point} location Location on the canvas
   */
  constructor(location) {
    /**
     * @type Point
     */
    this.location = location;

    /**
     * @type Body
     */
    this.next = null;
  }
}