'use strict';

export default interface RenderableAsset {
  render(ctx: CanvasRenderingContext2D): any;
}