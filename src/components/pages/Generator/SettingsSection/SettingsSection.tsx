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
  gridBrightness as gridBrightnessConst,
  gridAlpha as gridAlphaConst,
  gridScale as gridScaleConst,
  gridAmount as gridAmountConst,
  gridGap as gridGapConst,
  type SettingConstant,
  type SettingDualConstant,
} from '../constants';
import {type NumberDual} from '@/types';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);
  const rectBrightness = useStore((state) => state.rectBrightness);
  const rectAlpha = useStore((state) => state.rectAlpha);
  const rectScale = useStore((state) => state.rectScale);
  const gridBrightness = useStore((state) => state.gridBrightness);
  const gridAlpha = useStore((state) => state.gridAlpha);
  const gridScale = useStore((state) => state.gridScale);
  const gridAmount = useStore((state) => state.gridAmount);
  const gridGap = useStore((state) => state.gridGap);

  const setIterations = useStore((state) => state.setIterations);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );
  const setRectBrightness = useStore((state) => state.setRectBrightness);
  const setRectAlpha = useStore((state) => state.setRectAlpha);
  const setRectScale = useStore((state) => state.setRectScale);
  const setGridBrightness = useStore((state) => state.setGridBrightness);
  const setGridAlpha = useStore((state) => state.setGridAlpha);
  const setGridScale = useStore((state) => state.setGridScale);
  const setGridAmount = useStore((state) => state.setGridAmount);
  const setGridGap = useStore((state) => state.setGridGap);

  const randomize = useStore((state) => state.randomize);

  return (
    <section>
      <SectionTitle>Settings</SectionTitle>
      <SliderWrapper
        label='Iterations'
        value={iterations}
        setValue={setIterations}
        constant={iterationsConst}
      />
      <SliderWrapper
        label='Background brightness'
        value={backgroundBrightness}
        setValue={setBackgroundBrightness}
        constant={backgroundBrightnessConst}
      />
      <SliderDualWrapper
        label='Rect / Brightness'
        values={rectBrightness}
        setValues={setRectBrightness}
        constant={rectBrightnessConst}
      />
      <SliderDualWrapper
        label='Rect / Alpha'
        values={rectAlpha}
        setValues={setRectAlpha}
        constant={rectAlphaConst}
      />
      <SliderWrapper
        label='Rect / Scale'
        value={rectScale}
        setValue={setRectScale}
        constant={rectScaleConst}
      />
      <SliderDualWrapper
        label='Grid / Brightness'
        values={gridBrightness}
        setValues={setGridBrightness}
        constant={gridBrightnessConst}
      />
      <SliderDualWrapper
        label='Grid / Alpha'
        values={gridAlpha}
        setValues={setGridAlpha}
        constant={gridAlphaConst}
      />
      <SliderWrapper
        label='Grid / Scale'
        value={gridScale}
        setValue={setGridScale}
        constant={gridScaleConst}
      />
      <SliderDualWrapper
        label='Grid / Amount'
        values={gridAmount}
        setValues={setGridAmount}
        constant={gridAmountConst}
      />
      <SliderWrapper
        label='Grid / Gap'
        value={gridGap}
        setValue={setGridGap}
        constant={gridGapConst}
      />
      <div className='pt-2'>
        <Button onClick={randomize}>Randomize</Button>
      </div>
    </section>
  );
}

function SliderWrapper({
  label,
  value,
  setValue,
  constant,
}: {
  readonly label: string;
  readonly value: number;
  readonly setValue: (value: number) => void;
  readonly constant: SettingConstant;
}) {
  return (
    <Slider
      label={label}
      min={constant.min}
      max={constant.max}
      step={constant.step}
      value={value}
      setValue={setValue}
    />
  );
}

function SliderDualWrapper({
  label,
  values,
  setValues,
  constant,
}: {
  readonly label: string;
  readonly values: NumberDual;
  readonly setValues: (values: NumberDual) => void;
  readonly constant: SettingDualConstant;
}) {
  return (
    <Slider
      dual
      label={label}
      min={constant.min}
      max={constant.max}
      step={constant.step}
      values={values}
      setValues={setValues}
    />
  );
}
