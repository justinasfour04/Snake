'use strict';

import Body from './body';
import { Point } from './point';
import RenderableAsset from './renderable_asset';

export default class Snake implements RenderableAsset {
  head: Body;

  constructor(startingPoint: Point) {
    this.head = new Body(startingPoint);
  }

  render(ctx: CanvasRenderingContext2D) {
    
  }
}