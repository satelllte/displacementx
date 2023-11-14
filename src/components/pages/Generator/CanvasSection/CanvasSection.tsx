'use client';
import clsx from 'clsx';
import {useRef, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {saveImage} from './utils/saveImage';
import {draw} from './utils/draw';
import {Switch} from '@/components/ui/Switch';
import {getCanvasDimensions} from './utils/getCanvasDimensions';
import {clearCanvas} from './utils/clearCanvas';
import {drawNormal} from './utils/drawNormal';
import {drawInvert} from './utils/drawInvert';

export function CanvasSection() {
  const [is8k, setIs8k] = useState<boolean>(false);
  const width = is8k ? 8192 : 4096;
  const height = is8k ? 8192 : 4096;

  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [isNormalPreview, setIsNormalPreview] = useState<boolean>(false);
  const [renderTimeMs, setRenderTimeMs] = useState<number | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasOriginalPreviewDataUrl = useRef<string | undefined>(undefined);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);
    setIsNormalPreview(false);

    const ctx2d = getCtx2d(canvasRef);

    const {
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
    } = useStore.getState();

    draw({
      ctx2d,
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

    const dateTimeString = (): string => {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const d = String(now.getDate()).padStart(2, '0');
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      return `${y}-${m}-${d}-${hh}${mm}${ss}`;
    };

    saveImage({
      canvas,
      fileName: `DisplacementX_${width}x${height}_${dateTimeString()}`,
    });
  };

  const onIs8kChange = (is8k: boolean) => {
    const ctx2d = getCtx2d(canvasRef);

    clearCanvas(ctx2d);

    setIsPristine(true);
    setIsNormalPreview(false);
    setRenderTimeMs(undefined);
    setIs8k(is8k);
  };

  const invert = () => {
    const renderTimeStartMs: number = performance.now();
    setIsRendering(true);
    setIsNormalPreview(false);

    const updateCanvas = () => {
      const ctx2d = getCtx2d(canvasRef);
      drawInvert(ctx2d);
    };

    // Put a small timeout to allow the UI to update before canvas takes the main thread over
    setTimeout(() => {
      updateCanvas();
      setIsRendering(false);
      setRenderTimeMs(performance.now() - renderTimeStartMs);
    }, 20);
  };

  const toggleNormalPreview = () => {
    const isNormalPreviewNew = !isNormalPreview;
    const renderTimeStartMs: number = performance.now();
    setIsRendering(true);

    const updateCanvas = () => {
      const ctx2d = getCtx2d(canvasRef);

      if (isNormalPreviewNew) {
        // Draw normal preview
        canvasOriginalPreviewDataUrl.current = ctx2d.canvas.toDataURL();
        drawNormal(ctx2d);
      } else {
        // Restore original preview
        const dataUrl = canvasOriginalPreviewDataUrl.current;
        if (dataUrl) {
          const {w, h} = getCanvasDimensions(ctx2d);
          const img = new Image();
          img.src = dataUrl;
          img.onload = () => {
            ctx2d.clearRect(0, 0, w, h);
            ctx2d.drawImage(img, 0, 0, w, h);
            canvasOriginalPreviewDataUrl.current = undefined;
          };
        }
      }
    };

    // Put a small timeout to allow the UI to update before canvas takes the main thread over
    setTimeout(() => {
      updateCanvas();
      setIsNormalPreview(isNormalPreviewNew);
      setIsRendering(false);
      setRenderTimeMs(performance.now() - renderTimeStartMs);
    }, 20);
  };

  return (
    <section>
      <SectionTitle>Output</SectionTitle>
      <Switch isOn={is8k} setIsOn={onIs8kChange} labels={['4K', '8K']} />
      <div className='flex gap-1 pt-3'>
        <Canvas
          canvasRef={canvasRef}
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
      <div className='flex flex-wrap gap-1 pt-2'>
        <Button disabled={isRendering} onClick={render}>
          Render
        </Button>
        <Button disabled={isPristine || isRendering} onClick={download}>
          Download
        </Button>
      </div>
      <div className='flex flex-wrap gap-1 pt-2'>
        <Button
          disabled={isPristine || isRendering || isNormalPreview}
          onClick={invert}
        >
          Invert
        </Button>
        <Button
          disabled={isPristine || isRendering}
          onClick={toggleNormalPreview}
        >
          Preview {isNormalPreview ? 'original' : 'normal'}
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
