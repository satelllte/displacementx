import {animateWithSubIterations} from '@/utils/animationFrame';
import {grayscale} from '@/utils/colors';
import {randomInteger} from '@/utils/random';

export const draw = ({
  ctx2d,
  onEnd,
  props: {iterations, backgroundBrightness, rectBrightness, rectAlpha},
}: {
  ctx2d: CanvasRenderingContext2D;
  onEnd: (renderTimeMs: number) => void;
  props: {
    iterations: number;
    backgroundBrightness: number;
    rectBrightness: [number, number];
    rectAlpha: [number, number];
  };
}) => {
  const {width: w, height: h} = ctx2d.canvas;

  const renderStartTimeMs = performance.now();

  // 0. Clear canvas
  ctx2d.clearRect(0, 0, w, h);

  // 1. Fill background
  ctx2d.fillStyle = grayscale({brightnessAlpha: backgroundBrightness});
  ctx2d.fillRect(0, 0, w, h);

  animateWithSubIterations({
    iterations,
    iterationsPerFrame: 50,
    callback() {
      // 2. Draw rect
      ctx2d.fillStyle = grayscale({
        brightnessAlpha: randomInteger(...rectBrightness),
        opacity: randomInteger(...rectAlpha),
      });
      const rectW = randomInteger(Math.round(w / 16), Math.round(w / 8)); // TBD: randomize based on scale range
      const rectH = randomInteger(Math.round(w / 16), Math.round(w / 8)); // TBD: randomize based on scale range
      const x = randomInteger(
        Math.round(-rectW / 2),
        Math.round(w - rectW / 2),
      );
      const y = randomInteger(
        Math.round(-rectH / 2),
        Math.round(h - rectH / 2),
      );
      ctx2d.fillRect(x, y, rectW, rectH);
    },
    onEnd() {
      const renderTimeMs = performance.now() - renderStartTimeMs;
      onEnd(renderTimeMs);
    },
  });
};
