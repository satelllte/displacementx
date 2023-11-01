'use client';

import {useEffect, useRef} from 'react';

const canvasWidth = 4096;
const canvasHeight = 4096;

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    ctx2d.fillStyle = '#ffffff22';

    const steps = 50;
    let step = 0;
    const rafCallback: FrameRequestCallback = () => {
      if (step++ > steps && rafHandle) {
        cancelAnimationFrame(rafHandle);
        rafHandle = undefined;
        return;
      }

      const x = (step / (steps + 1)) * canvas.width;
      const y = (step / (steps + 1)) * canvas.height;
      ctx2d.fillRect(x, y, canvasWidth / 4, canvasHeight / 4);
      requestAnimationFrame(rafCallback);
    };

    let rafHandle: number | undefined = requestAnimationFrame(rafCallback);

    return () => {
      if (rafHandle) {
        cancelAnimationFrame(rafHandle);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 max-h-full max-w-full'
      width={canvasWidth}
      height={canvasHeight}
    >
      HTML canvas is not supported in this browser
    </canvas>
  );
}
