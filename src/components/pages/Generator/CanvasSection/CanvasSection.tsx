'use client';
import clsx from 'clsx';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {saveImage} from './utils/saveImage';
import {draw} from './utils/draw';
import {Switch} from '@/components/ui/Switch';
import {clearCanvas} from './utils/clearCanvas';

export function CanvasSection() {
  const [is8k, setIs8k] = useState<boolean>(false);
  const width = is8k ? 8192 : 4096;
  const height = is8k ? 8192 : 4096;

  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderTimeMs, setRenderTimeMs] = useState<number | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasNormalRef = useRef<HTMLCanvasElement>(null);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);

    const ctx2d = getCtx2d(canvasRef);
    const ctx2dNormal = getCtx2d(canvasNormalRef);

    const {
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
        gridBrightness,
        gridAlpha,
        gridScale,
        gridAmount,
        gridGap,
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

  const onIs8kChange = (is8k: boolean) => {
    const ctx2d = getCtx2d(canvasRef);
    const ctx2dNormal = getCtx2d(canvasNormalRef);

    clearCanvas(ctx2d);
    clearCanvas(ctx2dNormal);

    setIsPristine(true);
    setRenderTimeMs(undefined);
    setIs8k(is8k);
  };

  return (
    <section>
      <SectionTitle>Output</SectionTitle>
      <div className='flex gap-1'>
        <Canvas
          canvasRef={canvasRef}
          width={width}
          height={height}
          isRendering={isRendering}
        />
        <Canvas
          canvasRef={canvasNormalRef}
          width={width}
          height={height}
          isRendering={isRendering}
        />
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
      <div className='pt-1'>
        <Switch isOn={is8k} setIsOn={onIs8kChange} textOff='4K' textOn='8K' />
      </div>
      <div className='flex flex-wrap gap-1 pt-3'>
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

type CanvasProps = {
  readonly canvasRef: React.RefObject<HTMLCanvasElement>;
  readonly width: number;
  readonly height: number;
  readonly isRendering: boolean;
};

function Canvas({canvasRef, width, height, isRendering}: CanvasProps) {
  return (
    <div
      className={clsx(
        'relative flex aspect-square w-full max-w-xl items-center justify-center border border-dashed',
        isRendering ? 'border-red-700' : 'border-white',
      )}
    >
      <canvas
        ref={canvasRef}
        className='absolute inset-0 max-h-full max-w-full'
        width={width}
        height={height}
      >
        HTML canvas is not supported in this browser
      </canvas>
      <div
        className={clsx(
          'absolute flex h-full w-full items-center justify-center bg-black/50 text-lg uppercase text-red-700',
          !isRendering && 'hidden',
        )}
      >
        Rendering
      </div>
    </div>
  );
}

const getCtx2d = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
): CanvasRenderingContext2D => {
  const canvas = canvasRef.current;
  if (!canvas) throw new TypeError('Canvas not found in ref');

  const ctx2d = canvas.getContext('2d');
  if (!ctx2d) throw new TypeError('Error getting 2d context from canvas');

  return ctx2d;
};
