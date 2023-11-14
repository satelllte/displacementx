import {getCanvasDimensions} from './getCanvasDimensions';

/**
 * Inverts canvas.
 */
export const drawInvert = (ctx2d: CanvasRenderingContext2D): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  const imageData = ctx2d.getImageData(0, 0, w, h);
  const {data} = imageData;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  ctx2d.putImageData(imageData, 0, 0);
};
