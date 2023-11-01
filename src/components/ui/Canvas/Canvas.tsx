'use client';

import {useEffect, useImperativeHandle, useRef} from 'react';

const canvasWidth = 4096;
const canvasHeight = 4096;

type CanvasProps = {
  readonly canvasRef: React.RefObject<HTMLCanvasElement | undefined>;
};

export function Canvas({canvasRef: forwardedCanvasRef}: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(forwardedCanvasRef, () => canvasRef.current ?? undefined);

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
