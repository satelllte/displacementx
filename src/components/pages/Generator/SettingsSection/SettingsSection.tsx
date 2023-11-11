'use client';
import {Slider} from '@/components/ui/Slider';
import {Button} from '@/components/ui/Button';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
import {type NumberDual} from '@/types';
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
  colsBrightness as colsBrightnessConst,
  colsAlpha as colsAlphaConst,
  colsScale as colsScaleConst,
  colsAmount as colsAmountConst,
  colsGap as colsGapConst,
  type SettingConstant,
  type SettingDualConstant,
} from '../constants';
import {Group} from './Group';

export function SettingsSection() {
  const iterations = useStore((state) => state.iterations);
  const backgroundBrightness = useStore((state) => state.backgroundBrightness);

  const rectEnabled = useStore((state) => state.rectEnabled);
  const rectBrightness = useStore((state) => state.rectBrightness);
  const rectAlpha = useStore((state) => state.rectAlpha);
  const rectScale = useStore((state) => state.rectScale);

  const gridEnabled = useStore((state) => state.gridEnabled);
  const gridBrightness = useStore((state) => state.gridBrightness);
  const gridAlpha = useStore((state) => state.gridAlpha);
  const gridScale = useStore((state) => state.gridScale);
  const gridAmount = useStore((state) => state.gridAmount);
  const gridGap = useStore((state) => state.gridGap);

  const colsEnabled = useStore((state) => state.colsEnabled);
  const colsBrightness = useStore((state) => state.colsBrightness);
  const colsAlpha = useStore((state) => state.colsAlpha);
  const colsScale = useStore((state) => state.colsScale);
  const colsAmount = useStore((state) => state.colsAmount);
  const colsGap = useStore((state) => state.colsGap);

  const setIterations = useStore((state) => state.setIterations);
  const setBackgroundBrightness = useStore(
    (state) => state.setBackgroundBrightness,
  );

  const setRectEnabled = useStore((state) => state.setRectEnabled);
  const setRectBrightness = useStore((state) => state.setRectBrightness);
  const setRectAlpha = useStore((state) => state.setRectAlpha);
  const setRectScale = useStore((state) => state.setRectScale);

  const setGridEnabled = useStore((state) => state.setGridEnabled);
  const setGridBrightness = useStore((state) => state.setGridBrightness);
  const setGridAlpha = useStore((state) => state.setGridAlpha);
  const setGridScale = useStore((state) => state.setGridScale);
  const setGridAmount = useStore((state) => state.setGridAmount);
  const setGridGap = useStore((state) => state.setGridGap);

  const setColsEnabled = useStore((state) => state.setColsEnabled);
  const setColsBrightness = useStore((state) => state.setColsBrightness);
  const setColsAlpha = useStore((state) => state.setColsAlpha);
  const setColsScale = useStore((state) => state.setColsScale);
  const setColsAmount = useStore((state) => state.setColsAmount);
  const setColsGap = useStore((state) => state.setColsGap);

  const randomize = useStore((state) => state.randomize);

  return (
    <section>
      <SectionTitle>Settings</SectionTitle>
      <div className='flex flex-col gap-4'>
        <Group title='Basics'>
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
        </Group>
        <Group
          withSwitch
          title='Rect'
          enabled={rectEnabled}
          setEnabled={setRectEnabled}
        >
          <SliderDualWrapper
            label='Brightness'
            values={rectBrightness}
            setValues={setRectBrightness}
            constant={rectBrightnessConst}
          />
          <SliderDualWrapper
            label='Alpha'
            values={rectAlpha}
            setValues={setRectAlpha}
            constant={rectAlphaConst}
          />
          <SliderWrapper
            label='Scale'
            value={rectScale}
            setValue={setRectScale}
            constant={rectScaleConst}
          />
        </Group>
        <Group
          withSwitch
          title='Grid'
          enabled={gridEnabled}
          setEnabled={setGridEnabled}
        >
          <SliderDualWrapper
            label='Brightness'
            values={gridBrightness}
            setValues={setGridBrightness}
            constant={gridBrightnessConst}
          />
          <SliderDualWrapper
            label='Alpha'
            values={gridAlpha}
            setValues={setGridAlpha}
            constant={gridAlphaConst}
          />
          <SliderWrapper
            label='Scale'
            value={gridScale}
            setValue={setGridScale}
            constant={gridScaleConst}
          />
          <SliderDualWrapper
            label='Amount'
            values={gridAmount}
            setValues={setGridAmount}
            constant={gridAmountConst}
          />
          <SliderWrapper
            label='Gap'
            value={gridGap}
            setValue={setGridGap}
            constant={gridGapConst}
          />
        </Group>
        <Group
          withSwitch
          title='Cols'
          enabled={colsEnabled}
          setEnabled={setColsEnabled}
        >
          <SliderDualWrapper
            label='Brightness'
            values={colsBrightness}
            setValues={setColsBrightness}
            constant={colsBrightnessConst}
          />
          <SliderDualWrapper
            label='Alpha'
            values={colsAlpha}
            setValues={setColsAlpha}
            constant={colsAlphaConst}
          />
          <SliderWrapper
            label='Scale'
            value={colsScale}
            setValue={setColsScale}
            constant={colsScaleConst}
          />
          <SliderDualWrapper
            label='Amount'
            values={colsAmount}
            setValues={setColsAmount}
            constant={colsAmountConst}
          />
          <SliderWrapper
            label='Gap'
            value={colsGap}
            setValue={setColsGap}
            constant={colsGapConst}
          />
        </Group>
      </div>
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
