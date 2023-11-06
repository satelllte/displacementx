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
} from '../constants';
import {useState} from 'react';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);
  const setIterations = useStore((state) => state.setIterations);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );
  const randomize = useStore((state) => state.randomize);

  const [values, setValues] = useState<[number, number]>([40, 60]);

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
        label='Dual (TEST)'
        min={0}
        max={100}
        step={1}
        values={values}
        setValues={setValues}
      />
      <div className='pt-8'>
        <Button onClick={randomize}>Randomize</Button>
      </div>
    </section>
  );
}
