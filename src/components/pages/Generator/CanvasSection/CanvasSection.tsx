'use client';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {saveImage} from './utils/saveImage';
import {draw} from './utils/draw';

const canvasWidth = 4096;
const canvasHeight = 4096;

export function CanvasSection() {
  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderTimeMs, setRenderTimeMs] = useState<number | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasNormalRef = useRef<HTMLCanvasElement>(null);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);

    const canvas = canvasRef.current;
    const canvasNormal = canvasNormalRef.current;
    if (!canvas) return;
    if (!canvasNormal) return;

    const ctx2d = canvas.getContext('2d');
    const ctx2dNormal = canvasNormal.getContext('2d');
    if (!ctx2d) return;
    if (!ctx2dNormal) return;

    const {
      iterations,
      backgroundBrightness,
      rectBrightness,
      rectAlpha,
      rectScale,
    } = useStore.getState();

    draw({
      ctx2d,
      ctx2dNormal,
      props: {
        iterations,
        backgroundBrightness,
        rectBrightness,
        rectAlpha,
        rectScale,
      },
      onEnd(renderTimeMs) {
        // Set minumum "visible" render time to prevent very fast component updates (i.e., flickering)
        const minimumTimeBetweenUpdatesMs = 200;
        const update = () => {
          setRenderTimeMs(renderTimeMs);
          setIsRendering(false);
        };

        if (renderTimeMs < minimumTimeBetweenUpdatesMs) {
          setTimeout(update, minimumTimeBetweenUpdatesMs - renderTimeMs);
        } else {
          update();
        }
      },
    });
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    saveImage({canvas, fileName: 'displacementx-gen'});
  };

  const downloadNormal = () => {
    const canvas = canvasNormalRef.current;
    if (!canvas) return;

    saveImage({canvas, fileName: 'displacementx-gen-normal'});
  };

  return (
    <section>
      <SectionTitle>Output</SectionTitle>
      <div className='flex gap-1'>
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
        <div className='relative flex aspect-square w-full max-w-xl items-center justify-center border border-dashed border-white'>
          <canvas
            ref={canvasNormalRef}
            className='absolute inset-0 max-h-full max-w-full'
            width={canvasWidth}
            height={canvasHeight}
          >
            HTML canvas is not supported in this browser
          </canvas>
        </div>
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
      <div className='flex gap-1 pt-2'>
        <Button disabled={isRendering} onClick={render}>
          Render
        </Button>
        <Button disabled={isPristine || isRendering} onClick={download}>
          Download
        </Button>
        <Button disabled={isPristine || isRendering} onClick={downloadNormal}>
          Download (normal)
        </Button>
      </div>
    </section>
  );
}
