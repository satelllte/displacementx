import {type NumberDual} from '@/types';
import {animateWithSubIterations} from '@/utils/animationFrame';
import {xxx, xxxa} from '@/utils/colors';
import {randomInteger} from '@/utils/random';

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
  };
}): void => {
  const renderStartTimeMs = performance.now();

  // 0. Clear canvases
  clearCanvas(ctx2d);
  clearCanvas(ctx2dNormal);

  // 1. Fill background
  drawBackground({ctx2d, backgroundBrightness});

  animateWithSubIterations({
    iterations,
    iterationsPerFrame: 50,
    callback() {
      // 2. Draw rect
      drawRect({
        ctx2d,
        rectBrightness,
        rectAlpha,
        rectScale,
      });
    },
    onEnd() {
      drawNormal({ctx2d, ctx2dNormal});
      const renderTimeMs = performance.now() - renderStartTimeMs;
      onEnd(renderTimeMs);
    },
  });
};

const clearCanvas = (ctx2d: CanvasRenderingContext2D): void => {
  const {w, h} = getDimensions(ctx2d);
  ctx2d.clearRect(0, 0, w, h);
};

const drawBackground = ({
  ctx2d,
  backgroundBrightness,
}: {
  ctx2d: CanvasRenderingContext2D;
  backgroundBrightness: number;
}): void => {
  const {w, h} = getDimensions(ctx2d);
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
  const {w, h} = getDimensions(ctx2d);
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
  const {w, h} = getDimensions(ctx2d);

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

const getDimensions = (
  ctx2d: CanvasRenderingContext2D,
): {w: number; h: number} => ({w: ctx2d.canvas.width, h: ctx2d.canvas.height});
