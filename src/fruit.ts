'use strict';

import Point from './point.js';
import RenderableAsset from './renderable_asset.js';

export default class Fruit implements RenderableAsset {
  location: Point;

  constructor(point: Point) {
    this.location = point;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(this.location.x, this.location.y, 10, 10);
  }
}