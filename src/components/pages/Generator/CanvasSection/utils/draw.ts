import {type NumberDual} from '@/types';
import {animateWithSubIterations} from '@/utils/animationFrame';
import {xxx, xxxa} from '@/utils/colors';
import {randomInteger} from '@/utils/random';
import {getCanvasDimensions} from './getCanvasDimensions';
import {clearCanvas} from './clearCanvas';

export const draw = ({
  ctx2d,
  ctx2dNormal,
  onEnd,
  props: {
    iterations,
    backgroundBrightness,
    rectBrightness,
    rectAlpha,
    rectScale,
    gridBrightness,
    gridAlpha,
    gridScale,
    gridAmount,
    gridGap,
  },
}: {
  ctx2d: CanvasRenderingContext2D;
  ctx2dNormal: CanvasRenderingContext2D;
  onEnd: (renderTimeMs: number) => void;
  props: {
    iterations: number;
    backgroundBrightness: number;
    rectBrightness: NumberDual;
    rectAlpha: NumberDual;
    rectScale: number;
    gridBrightness: NumberDual;
    gridAlpha: NumberDual;
    gridScale: number;
    gridAmount: NumberDual;
    gridGap: number;
  };
}): void => {
  const renderStartTimeMs = performance.now();

  clearCanvas(ctx2d);
  clearCanvas(ctx2dNormal);

  drawBackground({ctx2d, backgroundBrightness});

  animateWithSubIterations({
    iterations,
    iterationsPerFrame: 50,
    callback() {
      switch (randomInteger(0, 1)) {
        case 0:
          drawRect({
            ctx2d,
            rectBrightness,
            rectAlpha,
            rectScale,
          });
          break;
        case 1:
          drawGrid({
            ctx2d,
            gridBrightness,
            gridAlpha,
            gridScale,
            gridAmount,
            gridGap,
          });
          break;
        default:
          break;
      }
    },
    onEnd() {
      drawNormal({ctx2d, ctx2dNormal});
      const renderTimeMs = performance.now() - renderStartTimeMs;
      onEnd(renderTimeMs);
    },
  });
};

const drawBackground = ({
  ctx2d,
  backgroundBrightness,
}: {
  ctx2d: CanvasRenderingContext2D;
  backgroundBrightness: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  ctx2d.fillStyle = xxx({x: backgroundBrightness});
  ctx2d.fillRect(0, 0, w, h);
};

const drawRect = ({
  ctx2d,
  rectBrightness,
  rectAlpha,
  rectScale,
}: {
  ctx2d: CanvasRenderingContext2D;
  rectBrightness: NumberDual;
  rectAlpha: NumberDual;
  rectScale: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  ctx2d.fillStyle = xxxa({
    x: randomInteger(...rectBrightness),
    a: randomInteger(...rectAlpha),
  });
  const rectW = Math.round(
    randomInteger(Math.round(w / 16), Math.round(w / 8)) * (rectScale / 100),
  );
  const rectH = Math.round(
    randomInteger(Math.round(w / 16), Math.round(w / 8)) * (rectScale / 100),
  );
  const x = randomInteger(Math.round(-rectW / 2), Math.round(w - rectW / 2));
  const y = randomInteger(Math.round(-rectH / 2), Math.round(h - rectH / 2));
  ctx2d.fillRect(x, y, rectW, rectH);
};

const drawGrid = ({
  ctx2d,
  gridBrightness,
  gridAlpha,
  gridScale,
  gridAmount,
  gridGap,
}: {
  ctx2d: CanvasRenderingContext2D;
  gridBrightness: NumberDual;
  gridAlpha: NumberDual;
  gridScale: number;
  gridAmount: NumberDual;
  gridGap: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  ctx2d.fillStyle = xxxa({
    x: randomInteger(...gridBrightness),
    a: randomInteger(...gridAlpha),
  });

  const x0 = randomInteger(Math.round(-w / 16), Math.round(w));
  const y0 = randomInteger(Math.round(-h / 16), Math.round(h));
  const xn = randomInteger(...gridAmount);
  const yn = randomInteger(...gridAmount);
  const scale = gridScale / 100;
  const gap = gridGap / 100;
  const size = Math.round(
    randomInteger(Math.round(w / 256), Math.round(w / 16)) * scale,
  );

  for (let i = 0, x = x0; i < xn; i++) {
    for (let j = 0, y = y0; j < yn; j++) {
      ctx2d.fillRect(x, y, size, size);
      y += size + Math.round(size * gap);
    }

    x += size + Math.round(size * gap);
  }
};

/**
 * Draws the normal map.
 * - "ctx2d" is the canvas context to read from.
 * - "ctx2dNormal" is the canvas context to write to.
 */
const drawNormal = ({
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
