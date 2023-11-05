'use client';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {alphaToGrayscaleColor} from '@/utils/alphaToGrayscaleColor';
import {randomInteger} from '@/utils/random';

const canvasWidth = 4096;
const canvasHeight = 4096;

export function CanvasSection() {
  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    const {width, height} = canvas;

    const {iterations, backgroundBrightness} = useStore.getState();

    let rafHandle: number | undefined;

    // 0. Clear canvas
    ctx2d.clearRect(0, 0, width, height);

    // 1. Fill background
    ctx2d.fillStyle = alphaToGrayscaleColor(backgroundBrightness);
    ctx2d.fillRect(0, 0, width, height);
    ///

    let step = 0;
    const rafCallback: FrameRequestCallback = () => {
      if (step++ > iterations && rafHandle) {
        cancelAnimationFrame(rafHandle);
        rafHandle = undefined;
        setIsRendering(false);
        return;
      }

      // 2. Draw boxes
      ctx2d.fillStyle = '#22668877';
      const boxWidth = Math.round(width / 8);
      const boxHeight = Math.round(height / 8);
      const x = randomInteger(0, width - boxWidth);
      const y = randomInteger(0, height - boxHeight);
      ctx2d.fillRect(x, y, boxWidth, boxHeight);
      ///

      requestAnimationFrame(rafCallback);
    };

    rafHandle = requestAnimationFrame(rafCallback);
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
    <>
      <div className='relative flex aspect-square w-full max-w-xl items-center justify-center border border-white'>
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
    </>
  );
}
