'use strict';

import Body from './body.js';
import Point from './point.js';
import RenderableAsset from './renderable_asset.js';

export default class Snake implements RenderableAsset {
  head: Body;

  constructor(startingPoint: Point) {
    this.head = new Body(startingPoint);
  }

  render(ctx: CanvasRenderingContext2D) {
    
  }
}