'use strict';

import { Point } from './point';
import RenderableAsset from './renderable_asset';

export default class Fruit implements RenderableAsset {
  location: Point;

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.location.x, this.location.y, 10, 10);
  }
}