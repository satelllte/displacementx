import {type NumberDual} from '@/types';
import {animateWithSubIterations} from '@/utils/animationFrame';
import {degreesToRadians} from '@/utils/math';
import {xxx, xxxa} from '@/utils/colors';
import {randomBoolean, randomInteger} from '@/utils/random';
import {getCanvasDimensions} from './getCanvasDimensions';
import {clearCanvas} from './clearCanvas';
import {type CompositionMode} from '../../constants';

export const draw = async ({
  ctx2d,
  onEnd,
  props: {
    iterations,
    backgroundBrightness,
    rectEnabled,
    rectBrightness,
    rectAlpha,
    rectScale,
    gridEnabled,
    gridBrightness,
    gridAlpha,
    gridScale,
    gridAmount,
    gridGap,
    colsEnabled,
    colsBrightness,
    colsAlpha,
    colsScale,
    colsAmount,
    colsGap,
    rowsEnabled,
    rowsBrightness,
    rowsAlpha,
    rowsScale,
    rowsAmount,
    rowsGap,
    linesEnabled,
    linesBrightness,
    linesAlpha,
    linesWidth,
    spritesEnabled,
    sprites: _sprites,
    spritesRotationEnabled,
    compositionModes,
  },
}: {
  ctx2d: CanvasRenderingContext2D;
  onEnd: (renderTimeMs: number) => void;
  props: {
    iterations: number;
    backgroundBrightness: number;
    rectEnabled: boolean;
    rectBrightness: NumberDual;
    rectAlpha: NumberDual;
    rectScale: number;
    gridEnabled: boolean;
    gridBrightness: NumberDual;
    gridAlpha: NumberDual;
    gridScale: number;
    gridAmount: NumberDual;
    gridGap: number;
    colsEnabled: boolean;
    colsBrightness: NumberDual;
    colsAlpha: NumberDual;
    colsScale: number;
    colsAmount: NumberDual;
    colsGap: number;
    rowsEnabled: boolean;
    rowsBrightness: NumberDual;
    rowsAlpha: NumberDual;
    rowsScale: number;
    rowsAmount: NumberDual;
    rowsGap: number;
    linesEnabled: boolean;
    linesBrightness: NumberDual;
    linesAlpha: NumberDual;
    linesWidth: NumberDual;
    spritesEnabled: boolean;
    sprites: HTMLImageElement[];
    spritesRotationEnabled: boolean;
    compositionModes: CompositionMode[];
  };
}): Promise<void> => {
  const renderStartTimeMs = performance.now();

  clearCanvas(ctx2d);

  drawBackground({ctx2d, backgroundBrightness});

  const originalCompositeOperation = ctx2d.globalCompositeOperation;

  const sprites = spritesEnabled ? await loadSprites(_sprites) : [];

  animateWithSubIterations({
    iterations,
    iterationsPerFrame: 50,
    callback() {
      if (compositionModes.length > 0) {
        ctx2d.globalCompositeOperation =
          compositionModes[randomInteger(0, compositionModes.length - 1)];
      }

      switch (randomInteger(0, 5)) {
        case 0:
          if (!rectEnabled) break;
          drawRect({
            ctx2d,
            rectBrightness,
            rectAlpha,
            rectScale,
          });
          break;
        case 1:
          if (!gridEnabled) break;
          drawGrid({
            ctx2d,
            gridBrightness,
            gridAlpha,
            gridScale,
            gridAmount,
            gridGap,
          });
          break;
        case 2:
          if (!colsEnabled) break;
          drawCols({
            ctx2d,
            colsBrightness,
            colsAlpha,
            colsScale,
            colsAmount,
            colsGap,
          });
          break;
        case 3:
          if (!rowsEnabled) break;
          drawRows({
            ctx2d,
            rowsBrightness,
            rowsAlpha,
            rowsScale,
            rowsAmount,
            rowsGap,
          });
          break;
        case 4:
          if (!linesEnabled) break;
          drawLines({
            ctx2d,
            linesBrightness,
            linesAlpha,
            linesWidth,
          });
          break;
        case 5:
          if (!spritesEnabled) break;
          drawSprite({
            ctx2d,
            sprites,
            spritesRotationEnabled,
          });
          break;
        default:
          break;
      }
    },
    onEnd() {
      ctx2d.globalCompositeOperation = originalCompositeOperation;
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

const drawCols = ({
  ctx2d,
  colsBrightness,
  colsAlpha,
  colsScale,
  colsAmount,
  colsGap,
}: {
  ctx2d: CanvasRenderingContext2D;
  colsBrightness: NumberDual;
  colsAlpha: NumberDual;
  colsScale: number;
  colsAmount: NumberDual;
  colsGap: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  ctx2d.fillStyle = xxxa({
    x: randomInteger(...colsBrightness),
    a: randomInteger(...colsAlpha),
  });

  const x0 = randomInteger(Math.round(-w / 16), Math.round(w));
  const y0 = randomInteger(Math.round(-h / 16), Math.round(h));
  const xn = randomInteger(...colsAmount);
  const scale = colsScale / 100;
  const gap = colsGap / 100;
  const sizeW = Math.round(
    randomInteger(Math.round(w / 256), Math.round(w / 16)) * scale,
  );
  const sizeH = Math.round(sizeW * randomInteger(1, 10));

  for (let i = 0, x = x0; i < xn; i++) {
    ctx2d.fillRect(x, y0, sizeW, sizeH);
    x += sizeW + Math.round(sizeW * gap);
  }
};

const drawRows = ({
  ctx2d,
  rowsBrightness,
  rowsAlpha,
  rowsScale,
  rowsAmount,
  rowsGap,
}: {
  ctx2d: CanvasRenderingContext2D;
  rowsBrightness: NumberDual;
  rowsAlpha: NumberDual;
  rowsScale: number;
  rowsAmount: NumberDual;
  rowsGap: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  ctx2d.fillStyle = xxxa({
    x: randomInteger(...rowsBrightness),
    a: randomInteger(...rowsAlpha),
  });

  const x0 = randomInteger(Math.round(-w / 16), Math.round(w));
  const y0 = randomInteger(Math.round(-h / 16), Math.round(h));
  const yn = randomInteger(...rowsAmount);
  const scale = rowsScale / 100;
  const gap = rowsGap / 100;
  const sizeH = Math.round(
    randomInteger(Math.round(w / 256), Math.round(w / 16)) * scale,
  );
  const sizeW = Math.round(sizeH * randomInteger(1, 10));

  for (let i = 0, y = y0; i < yn; i++) {
    ctx2d.fillRect(x0, y, sizeW, sizeH);
    y += sizeH + Math.round(sizeH * gap);
  }
};

const drawLines = ({
  ctx2d,
  linesBrightness,
  linesAlpha,
  linesWidth,
}: {
  ctx2d: CanvasRenderingContext2D;
  linesBrightness: NumberDual;
  linesAlpha: NumberDual;
  linesWidth: NumberDual;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);

  ctx2d.fillStyle = xxxa({
    x: randomInteger(...linesBrightness),
    a: randomInteger(...linesAlpha),
  });

  if (randomBoolean()) {
    // Horizontal
    const y = randomInteger(Math.round(-h / 16), Math.round(h));
    const thickness = Math.round(randomInteger(...linesWidth) * (h / 2500));
    ctx2d.fillRect(0, y, w, thickness);
  } else {
    // Vertical
    const x = randomInteger(Math.round(-w / 16), Math.round(w));
    const thickness = Math.round(randomInteger(...linesWidth) * (w / 2500));
    ctx2d.fillRect(x, 0, thickness, h);
  }
};

const drawSprite = ({
  ctx2d,
  sprites,
  spritesRotationEnabled,
}: {
  ctx2d: CanvasRenderingContext2D;
  sprites: HTMLImageElement[];
  spritesRotationEnabled: boolean;
}): void => {
  if (sprites.length <= 0) return;

  const sprite = sprites[randomInteger(0, sprites.length - 1)];
  if (!sprite.complete) return;

  const {w, h} = getCanvasDimensions(ctx2d);
  const size = randomInteger(Math.round(w / 32), Math.round(w / 2));
  const x = randomInteger(Math.round(-w / 16), Math.round(w));
  const y = randomInteger(Math.round(-h / 16), Math.round(h));
  const angleDegrees = randomInteger(0, 3) * 90;
  if (spritesRotationEnabled) rotate({ctx2d, angleDegrees});
  ctx2d.drawImage(sprite, x, y, size, size);
  if (spritesRotationEnabled) rotateEnd({ctx2d, angleDegrees});
};

const loadSprites = async (
  sprites: HTMLImageElement[],
): Promise<HTMLImageElement[]> => {
  const promises: Array<Promise<HTMLImageElement | undefined>> = [];
  sprites.forEach((sprite) => {
    promises.push(
      new Promise((resolve) => {
        if (sprite.complete) {
          resolve(sprite);
          return;
        }

        sprite.onload = () => {
          resolve(sprite);
        };

        sprite.onerror = () => {
          resolve(undefined);
        };
      }),
    );
  });
  const results = (await Promise.all(promises)).filter(Boolean);
  return results as HTMLImageElement[];
};

const rotate = ({
  ctx2d,
  angleDegrees,
}: {
  ctx2d: CanvasRenderingContext2D;
  angleDegrees: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  const wc = Math.round(w / 2);
  const hc = Math.round(h / 2);
  const angleRadians = degreesToRadians(angleDegrees);
  ctx2d.translate(wc, hc);
  ctx2d.rotate(angleRadians);
};

const rotateEnd = ({
  ctx2d,
  angleDegrees,
}: {
  ctx2d: CanvasRenderingContext2D;
  angleDegrees: number;
}): void => {
  const {w, h} = getCanvasDimensions(ctx2d);
  const wc = Math.round(w / 2);
  const hc = Math.round(h / 2);
  const angleRadians = degreesToRadians(angleDegrees);
  ctx2d.rotate(-angleRadians);
  ctx2d.translate(-wc, -hc);
};
