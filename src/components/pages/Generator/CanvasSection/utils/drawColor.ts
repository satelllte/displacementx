import {getCanvasDimensions} from './getCanvasDimensions';

// Hardcode the colors for now for a test
const fromR = 2;
const fromG = 255;
const fromB = 210;
const toR = 0;
const toG = 0;
const toB = 184;

// Just for now, using linear "mix" function.
// In the future, we'll want to put a custom gradient generator.
const mix = (from: number, to: number, ratio: number): number =>
  Math.round(from + (to - from) * (ratio / 255));

export const drawColor = (ctx2d: CanvasRenderingContext2D): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  const source = ctx2d.getImageData(0, 0, w, h);
  const destination = ctx2d.createImageData(w, h);

  for (let i = 0; i < source.data.length; i += 4) {
    destination.data[i] = mix(fromR, toR, source.data[i]);
    destination.data[i + 1] = mix(fromG, toG, source.data[i + 1]);
    destination.data[i + 2] = mix(fromB, toB, source.data[i + 2]);
    destination.data[i + 3] = source.data[i + 3];
  }

  ctx2d.putImageData(destination, 0, 0);
};
