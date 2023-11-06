'use client';
import {Slider} from '@/components/ui/Slider';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {Button} from '@/components/ui/Button';
import {
  iterationsMin,
  iterationsMax,
  iterationsStep,
  backgroundBrightnessMin,
  backgroundBrightnessMax,
  backgroundBrightnessStep,
  rectBrightnessMin,
  rectBrightnessMax,
  rectBrightnessStep,
  rectAlphaMin,
  rectAlphaMax,
  rectAlphaStep,
} from '../constants';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const setIterations = useStore((state) => state.setIterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );
  const rectBrightness = useStore((state) => state.rectBrightness);
  const setRectBrightness = useStore((state) => state.setRectBrightness);
  const rectAlpha = useStore((state) => state.rectAlpha);
  const setRectAlpha = useStore((state) => state.setRectAlpha);

  const randomize = useStore((state) => state.randomize);

  return (
    <section>
      <SectionTitle>Settings</SectionTitle>
      <Slider
        label='Iterations'
        min={iterationsMin}
        max={iterationsMax}
        step={iterationsStep}
        value={iterations}
        setValue={setIterations}
      />
      <Slider
        label='Background brightness'
        min={backgroundBrightnessMin}
        max={backgroundBrightnessMax}
        step={backgroundBrightnessStep}
        value={backgroundBrightness}
        setValue={setBackgroundBrightness}
      />
      <Slider
        dual
        label='Rect / Brightness'
        min={rectBrightnessMin}
        max={rectBrightnessMax}
        step={rectBrightnessStep}
        values={rectBrightness}
        setValues={setRectBrightness}
      />
      <Slider
        dual
        label='Rect / Alpha'
        min={rectAlphaMin}
        max={rectAlphaMax}
        step={rectAlphaStep}
        values={rectAlpha}
        setValues={setRectAlpha}
      />
      <div className='pt-8'>
        <Button onClick={randomize}>Randomize</Button>
      </div>
    </section>
  );
}
