'use client';
import {useRef, useState} from 'react';
import {useStore} from '../store';
import {Button} from '@/components/ui/Button';
import {RadioGroup} from '@/components/ui/RadioGroup';
import {SectionTitle} from '../SectionTitle';
import {Canvas} from './Canvas';
import {Gradient} from './Gradient';
import {SubSection} from './SubSection';
import {draw} from './utils/draw';
import {drawNormal} from './utils/drawNormal';
import {drawColor} from './utils/drawColor';
import {drawInvert} from './utils/drawInvert';
import {saveImage} from './utils/saveImage';
import {getCtx2dFromRef} from './utils/getCtx2dFromRef';
import {getCanvasDimensions} from './utils/getCanvasDimensions';

type Resolution = '1024' | '2048' | '4096' | '8192';
type PreviewType = 'original' | 'normal' | 'color';

export function CanvasSection() {
  const [resolution, setResolution] = useState<Resolution>('2048');
  const width = Number(resolution);
  const height = Number(resolution);

  const [isPristine, setIsPristine] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [previewType, setPreviewType] = useState<PreviewType>('original');
  const [renderTimeMs, setRenderTimeMs] = useState<number | undefined>();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasOriginalPreviewDataUrl = useRef<string | undefined>(undefined);
  const gradientCanvasRef = useRef<HTMLCanvasElement>(null);

  const render = () => {
    setIsPristine(false);
    setIsRendering(true);
    setPreviewType('original');

    const ctx2d = getCtx2dFromRef(canvasRef);

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
      spritesEnabled,
      spritesRotationEnabled,
      getSprites,
      compositionModes,
      tilingEnabled,
    } = useStore.getState();

    const sprites = getSprites();

    void draw({
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
        spritesEnabled,
        spritesRotationEnabled,
        sprites,
        compositionModes,
        tilingEnabled,
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

  const quickRender = (callback: () => void) => {
    const renderTimeStartMs: number = performance.now();
    setIsRendering(true);

    // Put a small timeout to allow the UI to update before canvas takes the main thread over
    setTimeout(() => {
      callback();
      setIsRendering(false);
      setRenderTimeMs(performance.now() - renderTimeStartMs);
    }, 20);
  };

  const invert = () => {
    quickRender(() => {
      const ctx2d = getCtx2dFromRef(canvasRef);
      drawInvert(ctx2d);
    });
  };

  const togglePreviewFor = (type: PreviewType) => () => {
    quickRender(() => {
      const shouldDrawNonOriginal = previewType === 'original';

      const ctx2d = getCtx2dFromRef(canvasRef);
      const ctx2dGradient = getCtx2dFromRef(gradientCanvasRef);

      if (shouldDrawNonOriginal) {
        // Save original preview
        canvasOriginalPreviewDataUrl.current = ctx2d.canvas.toDataURL();
        // Draw preview based on type
        switch (type) {
          case 'normal':
            drawNormal(ctx2d);
            break;
          case 'color':
            drawColor({ctx2d, ctx2dGradient});
            break;
          default:
            break;
        }
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

      setPreviewType(shouldDrawNonOriginal ? type : 'original');
    });
  };

  const invertDisabled = isPristine || previewType !== 'original';
  const normalDisabled =
    isPristine || (previewType !== 'normal' && previewType !== 'original');
  const colorDisabled =
    isPristine || (previewType !== 'color' && previewType !== 'original');

  return (
    <section>
      <SectionTitle>Output</SectionTitle>
      <div className='flex gap-1'>
        <Canvas
          ref={canvasRef}
          width={width}
          height={height}
          isRendering={isRendering}
        />
      </div>
      <div>
        <output className='text-sm opacity-80'>
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
      <SubSection title='Resolution'>
        <RadioGroup<Resolution>
          aria-label='Resolution'
          items={[
            {value: '1024', label: '1024x1024'},
            {value: '2048', label: '2048x2048'},
            {value: '4096', label: '4096x4096'},
            {value: '8192', label: '8192x8192'},
          ]}
          value={resolution}
          setValue={setResolution}
        />
        <span className='text-xs text-pink italic'>
          Please note that changing the resolution resets canvas!
        </span>
      </SubSection>
      <SubSection title='Inversion' disabled={invertDisabled}>
        <Button disabled={isRendering || invertDisabled} onClick={invert}>
          Invert
        </Button>
      </SubSection>
      <SubSection title='Normal' disabled={normalDisabled}>
        <Button
          disabled={isRendering || normalDisabled}
          onClick={togglePreviewFor('normal')}
        >
          Preview {previewType === 'normal' ? 'original' : 'normal'}
        </Button>
      </SubSection>
      <SubSection title='Color' disabled={colorDisabled}>
        <Button
          disabled={isRendering || colorDisabled}
          onClick={togglePreviewFor('color')}
        >
          Preview {previewType === 'color' ? 'original' : 'color'}
        </Button>
        <Gradient ref={gradientCanvasRef} />
      </SubSection>
    </section>
  );
}
