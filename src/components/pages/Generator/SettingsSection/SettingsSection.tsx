'use client';
import {Slider} from '@/components/ui/Slider';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);
  const setIterations = useStore((state) => state.setIterations);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );

  return (
    <section>
      <SectionTitle>Settings</SectionTitle>
      <Slider
        label='Iterations'
        min={10}
        max={2000}
        step={1}
        value={iterations}
        setValue={setIterations}
      />
      <Slider
        label='Background brightness'
        min={0}
        max={255}
        step={1}
        value={backgroundBrightness}
        setValue={setBackgroundBrightness}
      />
    </section>
  );
}
