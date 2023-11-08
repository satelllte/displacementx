'use client';
import {Slider} from '@/components/ui/Slider';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {Button} from '@/components/ui/Button';
import {
  iterations as iterationsConst,
  backgroundBrightness as backgroundBrightnessConst,
  rectBrightness as rectBrightnessConst,
  rectAlpha as rectAlphaConst,
  rectScale as rectScaleConst,
} from '../constants';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);
  const rectBrightness = useStore((state) => state.rectBrightness);
  const rectAlpha = useStore((state) => state.rectAlpha);
  const rectScale = useStore((state) => state.rectScale);

  const setIterations = useStore((state) => state.setIterations);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );
  const setRectBrightness = useStore((state) => state.setRectBrightness);
  const setRectAlpha = useStore((state) => state.setRectAlpha);
  const setRectScale = useStore((state) => state.setRectScale);

  const randomize = useStore((state) => state.randomize);

  return (
    <section>
      <SectionTitle>Settings</SectionTitle>
      <Slider
        label='Iterations'
        min={iterationsConst.min}
        max={iterationsConst.max}
        step={iterationsConst.step}
        value={iterations}
        setValue={setIterations}
      />
      <Slider
        label='Background brightness'
        min={backgroundBrightnessConst.min}
        max={backgroundBrightnessConst.max}
        step={backgroundBrightnessConst.step}
        value={backgroundBrightness}
        setValue={setBackgroundBrightness}
      />
      <Slider
        dual
        label='Rect / Brightness'
        min={rectBrightnessConst.min}
        max={rectBrightnessConst.max}
        step={rectBrightnessConst.step}
        values={rectBrightness}
        setValues={setRectBrightness}
      />
      <Slider
        dual
        label='Rect / Alpha'
        min={rectAlphaConst.min}
        max={rectAlphaConst.max}
        step={rectAlphaConst.step}
        values={rectAlpha}
        setValues={setRectAlpha}
      />
      <Slider
        label='Rect / Scale'
        min={rectScaleConst.min}
        max={rectScaleConst.max}
        step={rectScaleConst.step}
        value={rectScale}
        setValue={setRectScale}
      />
      <div className='pt-8'>
        <Button onClick={randomize}>Randomize</Button>
      </div>
    </section>
  );
}
