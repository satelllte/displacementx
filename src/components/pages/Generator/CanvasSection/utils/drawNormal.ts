import {getCanvasDimensions} from './getCanvasDimensions';

/**
 * Draws the normal map.
 * - "ctx2d" is the canvas context to read from.
 * - "ctx2dNormal" is the canvas context to write to.
 */
export const drawNormal = ({
  ctx2d,
  ctx2dNormal,
}: {
  ctx2d: CanvasRenderingContext2D;
  ctx2dNormal: CanvasRenderingContext2D;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  const source = ctx2d.getImageData(0, 0, w, h);
  const destination = ctx2dNormal.createImageData(w, h);

  for (let i = 0, l = w * h * 4; i < l; i += 4) {
    let x1;
    let x2;
    let y1;
    let y2;

    if (i % (w * 4) === 0) {
      x1 = source.data[i];
      x2 = source.data[i + 4];
    } else if (i % (w * 4) === (w - 1) * 4) {
      x1 = source.data[i - 4];
      x2 = source.data[i];
    } else {
      x1 = source.data[i - 4];
      x2 = source.data[i + 4];
    }

    if (i < h * 4) {
      y1 = source.data[i];
      y2 = source.data[i + h * 4];
    } else if (i > h * (h - 1) * 4) {
      y1 = source.data[i - h * 4];
      y2 = source.data[i];
    } else {
      y1 = source.data[i - h * 4];
      y2 = source.data[i + h * 4];
    }

    destination.data[i] = x1 - x2 + 127;
    destination.data[i + 1] = y1 - y2 + 127;
    destination.data[i + 2] = 255;
    destination.data[i + 3] = 255;
  }

  ctx2dNormal.putImageData(destination, 0, 0);
};
