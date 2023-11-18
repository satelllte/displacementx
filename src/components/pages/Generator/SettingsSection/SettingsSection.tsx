'use client';
import {Slider} from '@/components/ui/Slider';
import {Button} from '@/components/ui/Button';
import {Checkbox} from '@/components/ui/Checkbox';
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
  rowsBrightness as rowsBrightnessConst,
  rowsAlpha as rowsAlphaConst,
  rowsScale as rowsScaleConst,
  rowsAmount as rowsAmountConst,
  rowsGap as rowsGapConst,
  linesBrightness as linesBrightnessConst,
  linesAlpha as linesAlphaConst,
  linesWidth as linesWidthConst,
  type SettingConstant,
  type SettingDualConstant,
  type SpritesPack,
  type CompositionMode,
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

  const rowsEnabled = useStore((state) => state.rowsEnabled);
  const rowsBrightness = useStore((state) => state.rowsBrightness);
  const rowsAlpha = useStore((state) => state.rowsAlpha);
  const rowsScale = useStore((state) => state.rowsScale);
  const rowsAmount = useStore((state) => state.rowsAmount);
  const rowsGap = useStore((state) => state.rowsGap);

  const linesEnabled = useStore((state) => state.linesEnabled);
  const linesBrightness = useStore((state) => state.linesBrightness);
  const linesAlpha = useStore((state) => state.linesAlpha);
  const linesWidth = useStore((state) => state.linesWidth);

  const spritesEnabled = useStore((state) => state.spritesEnabled);
  const spritesPacks = useStore((state) => state.spritesPacks);
  const spritesRotationEnabled = useStore(
    (state) => state.spritesRotationEnabled,
  );

  const compositionModes = useStore((state) => state.compositionModes);

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

  const setRowsEnabled = useStore((state) => state.setRowsEnabled);
  const setRowsBrightness = useStore((state) => state.setRowsBrightness);
  const setRowsAlpha = useStore((state) => state.setRowsAlpha);
  const setRowsScale = useStore((state) => state.setRowsScale);
  const setRowsAmount = useStore((state) => state.setRowsAmount);
  const setRowsGap = useStore((state) => state.setRowsGap);

  const setLinesEnabled = useStore((state) => state.setLinesEnabled);
  const setLinesBrightness = useStore((state) => state.setLinesBrightness);
  const setLinesAlpha = useStore((state) => state.setLinesAlpha);
  const setLinesWidth = useStore((state) => state.setLinesWidth);

  const setSpritesEnabled = useStore((state) => state.setSpritesEnabled);
  const setSpritesPacks = useStore((state) => state.setSpritesPacks);
  const setSpritesPackEnabled = (pack: SpritesPack) => (value: boolean) => {
    setSpritesPacks([
      ...spritesPacks.filter((p) => p !== pack),
      ...(value ? [pack] : []),
    ]);
  };

  const setCompositionModes = useStore((state) => state.setCompositionModes);
  const setCompositionMode = (mode: CompositionMode) => (value: boolean) => {
    setCompositionModes([
      ...compositionModes.filter((m) => m !== mode),
      ...(value ? [mode] : []),
    ]);
  };

  const setSpritesRotationEnabled = useStore(
    (state) => state.setSpritesRotationEnabled,
  );

  const randomize = useStore((state) => state.randomize);

  return (
    <section>
      <div className='flex items-center justify-between'>
        <SectionTitle>Settings</SectionTitle>
        <Button onClick={randomize}>Randomize</Button>
      </div>
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
        <Group
          withSwitch
          title='Rows'
          enabled={rowsEnabled}
          setEnabled={setRowsEnabled}
        >
          <SliderDualWrapper
            label='Brightness'
            values={rowsBrightness}
            setValues={setRowsBrightness}
            constant={rowsBrightnessConst}
          />
          <SliderDualWrapper
            label='Alpha'
            values={rowsAlpha}
            setValues={setRowsAlpha}
            constant={rowsAlphaConst}
          />
          <SliderWrapper
            label='Scale'
            value={rowsScale}
            setValue={setRowsScale}
            constant={rowsScaleConst}
          />
          <SliderDualWrapper
            label='Amount'
            values={rowsAmount}
            setValues={setRowsAmount}
            constant={rowsAmountConst}
          />
          <SliderWrapper
            label='Gap'
            value={rowsGap}
            setValue={setRowsGap}
            constant={rowsGapConst}
          />
        </Group>
        <Group
          withSwitch
          title='Lines'
          enabled={linesEnabled}
          setEnabled={setLinesEnabled}
        >
          <SliderDualWrapper
            label='Brightness'
            values={linesBrightness}
            setValues={setLinesBrightness}
            constant={linesBrightnessConst}
          />
          <SliderDualWrapper
            label='Alpha'
            values={linesAlpha}
            setValues={setLinesAlpha}
            constant={linesAlphaConst}
          />
          <SliderDualWrapper
            label='Width'
            values={linesWidth}
            setValues={setLinesWidth}
            constant={linesWidthConst}
          />
        </Group>
        <Group
          withSwitch
          title='Sprites'
          enabled={spritesEnabled}
          setEnabled={setSpritesEnabled}
        >
          <div>
            <div className='pb-1 text-sm'>Packs:</div>
            <div className='border-l border-l-white/80 pl-2'>
              <Checkbox
                label='Classic'
                isChecked={spritesPackEnabled(spritesPacks, 'classic')}
                setIsChecked={setSpritesPackEnabled('classic')}
              />
              <Checkbox
                label='Big data'
                isChecked={spritesPackEnabled(spritesPacks, 'bigdata')}
                setIsChecked={setSpritesPackEnabled('bigdata')}
              />
              <Checkbox
                label='Aggromaxx'
                isChecked={spritesPackEnabled(spritesPacks, 'aggromaxx')}
                setIsChecked={setSpritesPackEnabled('aggromaxx')}
              />
              <Checkbox
                label='Crap pack'
                isChecked={spritesPackEnabled(spritesPacks, 'crappack')}
                setIsChecked={setSpritesPackEnabled('crappack')}
              />
            </div>
          </div>
          <div>
            <div className='pb-1 text-sm'>Other options:</div>
            <div className='border-l border-l-white/80 pl-2'>
              <Checkbox
                label='Rotate'
                isChecked={spritesRotationEnabled}
                setIsChecked={setSpritesRotationEnabled}
              />
            </div>
          </div>
        </Group>
        <Group title='Other'>
          <div>
            <div className='pb-1 text-sm'>Composition modes:</div>
            <div className='border-l border-l-white/80 pl-2'>
              {(
                [
                  'color-burn',
                  'color-dodge',
                  'darken',
                  'difference',
                  'exclusion',
                  'hard-light',
                  'lighten',
                  'lighter',
                  'luminosity',
                  'multiply',
                  'overlay',
                  'screen',
                  'soft-light',
                  'source-atop',
                  'source-over',
                  'xor',
                ] as const
              ).map((mode) => (
                <Checkbox
                  key={mode}
                  label={mode}
                  isChecked={compositionModeEnabled(compositionModes, mode)}
                  setIsChecked={setCompositionMode(mode)}
                />
              ))}
            </div>
          </div>
        </Group>
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

const spritesPackEnabled = (packs: SpritesPack[], pack: SpritesPack): boolean =>
  packs.includes(pack);

const compositionModeEnabled = (
  modes: CompositionMode[],
  mode: CompositionMode,
): boolean => modes.includes(mode);
