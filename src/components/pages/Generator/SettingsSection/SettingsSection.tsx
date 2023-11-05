'use client';
import {useState} from 'react';
import {Slider} from '@/components/ui/Slider';

export function SettingsSection() {
  const [iterations, setIterations] = useState<number>(200);
  const [backgroundBrightness, setBackgroundBrightness] = useState<number>(32);

  return (
    <section>
      <h2 className='pb-4 text-lg'>🚧 Settings</h2>
      <Slider
        label='🚧 Iterations'
        min={10}
        max={2000}
        step={1}
        value={iterations}
        setValue={setIterations}
      />
      <Slider
        label='🚧 Background brightness'
        min={0}
        max={255}
        step={1}
        value={backgroundBrightness}
        setValue={setBackgroundBrightness}
      />
    </section>
  );
}
