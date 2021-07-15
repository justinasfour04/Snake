'use strict';

import { Point } from './point';

export default class Body {
  location: Point;
  next: Body;

  constructor(location: Point) {
    this.location = location;
    this.next = null;
  }
}