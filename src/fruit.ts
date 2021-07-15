'use strict';

import { Point } from './point';
import RenderableAsset from './renderable_asset';

class Fruit implements RenderableAsset {
  location: Point;

  render(ctx: CanvasRenderingContext2D) {
    var rectangle = ctx.rect(location.x, location.y, 10, 10);
  }
}

export default Fruit;