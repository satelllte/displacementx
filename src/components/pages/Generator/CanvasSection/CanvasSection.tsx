'use client';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {alphaToGrayscaleColor} from '@/utils/alphaToGrayscaleColor';
import {randomInteger} from '@/utils/random';
import {animateWithSubIterations} from '@/utils/animationFrame';
import {SectionTitle} from '../SectionTitle';

const canvasWidth = 4096;
const canvasHeight = 4096;

export function CanvasSection() {
  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderTimeMs, setRenderTimeMs] = useState<number | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);

    const renderStartTimeMs = performance.now();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    const {width, height} = canvas;

    const {iterations, backgroundBrightness} = useStore.getState();

    // 0. Clear canvas
    ctx2d.clearRect(0, 0, width, height);

    // 1. Fill background
    ctx2d.fillStyle = alphaToGrayscaleColor(backgroundBrightness);
    ctx2d.fillRect(0, 0, width, height);

    animateWithSubIterations({
      iterations,
      iterationsPerFrame: 50,
      callback() {
        // 2. Draw boxes
        ctx2d.fillStyle = '#22668810';
        const boxWidth = Math.round(width / 8);
        const boxHeight = Math.round(height / 8);
        const x = randomInteger(
          -Math.round(boxWidth / 2),
          Math.round(width - boxWidth / 2),
        );
        const y = randomInteger(
          -Math.round(boxHeight / 2),
          Math.round(height - boxHeight / 2),
        );
        ctx2d.fillRect(x, y, boxWidth, boxHeight);
      },
      onEnd() {
        // Set minumum "visible" render time to 0.2s to prevent very fast component updates (i.e., flickering)
        const minimumTimeBetweenUpdatesMs = 200;
        const renderTimeMs = performance.now() - renderStartTimeMs;
        const update = () => {
          setRenderTimeMs(renderTimeMs);
          setIsRendering(false);
        };

        if (renderTimeMs < minimumTimeBetweenUpdatesMs) {
          setTimeout(update, minimumTimeBetweenUpdatesMs);
        } else {
          update();
        }
      },
    });
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const href = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = href;
    a.download = 'displacementx-gen.png';
    a.click();
  };

  return (
    <section>
      <SectionTitle>Output</SectionTitle>
      <div className='relative flex aspect-square w-full max-w-xl items-center justify-center border border-dashed border-white'>
        <canvas
          ref={canvasRef}
          className='absolute inset-0 max-h-full max-w-full'
          width={canvasWidth}
          height={canvasHeight}
        >
          HTML canvas is not supported in this browser
        </canvas>
      </div>
      <div className='flex gap-1 pt-2'>
        <Button disabled={isRendering} onClick={render}>
          Render
        </Button>
        <Button disabled={isPristine || isRendering} onClick={download}>
          Download
        </Button>
      </div>
      <div>
        <output className='text-sm text-gray-400'>
          Last render:{' '}
          <span>
            {!isRendering && renderTimeMs
              ? `${(renderTimeMs * 0.001).toFixed(3)}s`
              : `_____`}
          </span>
        </output>
      </div>
    </section>
  );
}
