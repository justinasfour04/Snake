'use strict';

import Point from './point.js';

export default class Body {
  location: Point;
  next: Body;

  constructor(location: Point) {
    this.location = location;
    this.next = null;
  }
}