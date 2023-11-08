import {getCanvasDimensions} from './getCanvasDimensions';

export const clearCanvas = (ctx2d: CanvasRenderingContext2D): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  ctx2d.clearRect(0, 0, w, h);
};
