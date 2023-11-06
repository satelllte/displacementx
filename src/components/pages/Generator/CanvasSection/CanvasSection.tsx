'use client';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {draw} from './draw';

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

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    const {iterations, backgroundBrightness, rectBrightness, rectAlpha} =
      useStore.getState();

    draw({
      ctx2d,
      props: {
        iterations,
        backgroundBrightness,
        rectBrightness,
        rectAlpha,
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
      </div>
    </section>
  );
}
