import {getCanvasDimensions} from './getCanvasDimensions';

export const drawColor = ({
  ctx2d,
  ctx2dGradient,
}: {
  ctx2d: CanvasRenderingContext2D;
  ctx2dGradient: CanvasRenderingContext2D;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  const {w: wGradient} = getCanvasDimensions(ctx2dGradient);

  const source = ctx2d.getImageData(0, 0, w, h);
  const sourceGradient = ctx2dGradient.getImageData(0, 0, wGradient, 1);
  const destination = ctx2d.createImageData(w, h);

  const paletteR: number[] = [];
  const paletteG: number[] = [];
  const paletteB: number[] = [];

  for (let i = 0; i < wGradient * 4; i += 4) {
    paletteR.push(sourceGradient.data[i]);
    paletteG.push(sourceGradient.data[i + 1]);
    paletteB.push(sourceGradient.data[i + 2]);
  }

  for (let i = 0; i < source.data.length; i += 4) {
    destination.data[i] = paletteR[source.data[i]];
    destination.data[i + 1] = paletteG[source.data[i + 1]];
    destination.data[i + 2] = paletteB[source.data[i + 2]];
    destination.data[i + 3] = source.data[i + 3];
  }

  ctx2d.putImageData(destination, 0, 0);
};
