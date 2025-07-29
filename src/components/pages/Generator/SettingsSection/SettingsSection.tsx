'use client';
import {Button} from '@/components/ui/Button';
import {Checkbox} from '@/components/ui/Checkbox';
import {useStore} from '../store';
import {SectionTitle} from '../SectionTitle';
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
  type SpritesPack,
  type CompositionMode,
} from '../constants';
import {Group} from './Group';
import {CheckboxesGroup} from './CheckboxesGroup';
import {Checkboxes} from './Checkboxes';
import {SliderForConstant} from './SliderForConstant';
import {SlidersGroup} from './SlidersGroup';

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

  const setCompositionModes = useStore((state) => state.setCompositionModes);
  const setSpritesRotationEnabled = useStore(
    (state) => state.setSpritesRotationEnabled,
  );

  const randomize = useStore((state) => state.randomize);
  const randomizeRect = useStore((state) => state.randomizeRect);
  const randomizeGrid = useStore((state) => state.randomizeGrid);
  const randomizeCols = useStore((state) => state.randomizeCols);
  const randomizeRows = useStore((state) => state.randomizeRows);
  const randomizeLines = useStore((state) => state.randomizeLines);
  const randomizeSprites = useStore((state) => state.randomizeSprites);
  const randomizeCompositionModes = useStore(
    (state) => state.randomizeCompositionModes,
  );

  return (
    <section>
      <div className='flex items-center justify-between'>
        <SectionTitle>Settings</SectionTitle>
        <Button onClick={randomize}>Randomize all</Button>
      </div>
      <div className='flex flex-col gap-4'>
        <Group title='Basics'>
          <SlidersGroup>
            <SliderForConstant
              label='Iterations'
              value={iterations}
              setValue={setIterations}
              constant={iterationsConst}
            />
            <SliderForConstant
              label='Background brightness'
              value={backgroundBrightness}
              setValue={setBackgroundBrightness}
              constant={backgroundBrightnessConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Rect'
          enabled={rectEnabled}
          setEnabled={setRectEnabled}
        >
          <RandomizeButton onClick={randomizeRect} />
          <SlidersGroup>
            <SliderForConstant
              dual
              label='Brightness'
              values={rectBrightness}
              setValues={setRectBrightness}
              constant={rectBrightnessConst}
            />
            <SliderForConstant
              dual
              label='Alpha'
              values={rectAlpha}
              setValues={setRectAlpha}
              constant={rectAlphaConst}
            />
            <SliderForConstant
              label='Scale'
              value={rectScale}
              setValue={setRectScale}
              constant={rectScaleConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Grid'
          enabled={gridEnabled}
          setEnabled={setGridEnabled}
        >
          <RandomizeButton onClick={randomizeGrid} />
          <SlidersGroup>
            <SliderForConstant
              dual
              label='Brightness'
              values={gridBrightness}
              setValues={setGridBrightness}
              constant={gridBrightnessConst}
            />
            <SliderForConstant
              dual
              label='Alpha'
              values={gridAlpha}
              setValues={setGridAlpha}
              constant={gridAlphaConst}
            />
            <SliderForConstant
              label='Scale'
              value={gridScale}
              setValue={setGridScale}
              constant={gridScaleConst}
            />
            <SliderForConstant
              dual
              label='Amount'
              values={gridAmount}
              setValues={setGridAmount}
              constant={gridAmountConst}
            />
            <SliderForConstant
              label='Gap'
              value={gridGap}
              setValue={setGridGap}
              constant={gridGapConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Cols'
          enabled={colsEnabled}
          setEnabled={setColsEnabled}
        >
          <RandomizeButton onClick={randomizeCols} />
          <SlidersGroup>
            <SliderForConstant
              dual
              label='Brightness'
              values={colsBrightness}
              setValues={setColsBrightness}
              constant={colsBrightnessConst}
            />
            <SliderForConstant
              dual
              label='Alpha'
              values={colsAlpha}
              setValues={setColsAlpha}
              constant={colsAlphaConst}
            />
            <SliderForConstant
              label='Scale'
              value={colsScale}
              setValue={setColsScale}
              constant={colsScaleConst}
            />
            <SliderForConstant
              dual
              label='Amount'
              values={colsAmount}
              setValues={setColsAmount}
              constant={colsAmountConst}
            />
            <SliderForConstant
              label='Gap'
              value={colsGap}
              setValue={setColsGap}
              constant={colsGapConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Rows'
          enabled={rowsEnabled}
          setEnabled={setRowsEnabled}
        >
          <RandomizeButton onClick={randomizeRows} />
          <SlidersGroup>
            <SliderForConstant
              dual
              label='Brightness'
              values={rowsBrightness}
              setValues={setRowsBrightness}
              constant={rowsBrightnessConst}
            />
            <SliderForConstant
              dual
              label='Alpha'
              values={rowsAlpha}
              setValues={setRowsAlpha}
              constant={rowsAlphaConst}
            />
            <SliderForConstant
              label='Scale'
              value={rowsScale}
              setValue={setRowsScale}
              constant={rowsScaleConst}
            />
            <SliderForConstant
              dual
              label='Amount'
              values={rowsAmount}
              setValues={setRowsAmount}
              constant={rowsAmountConst}
            />
            <SliderForConstant
              label='Gap'
              value={rowsGap}
              setValue={setRowsGap}
              constant={rowsGapConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Lines'
          enabled={linesEnabled}
          setEnabled={setLinesEnabled}
        >
          <RandomizeButton onClick={randomizeLines} />
          <SlidersGroup>
            <SliderForConstant
              dual
              label='Brightness'
              values={linesBrightness}
              setValues={setLinesBrightness}
              constant={linesBrightnessConst}
            />
            <SliderForConstant
              dual
              label='Alpha'
              values={linesAlpha}
              setValues={setLinesAlpha}
              constant={linesAlphaConst}
            />
            <SliderForConstant
              dual
              label='Width'
              values={linesWidth}
              setValues={setLinesWidth}
              constant={linesWidthConst}
            />
          </SlidersGroup>
        </Group>
        <Group
          withSwitch
          title='Sprites'
          enabled={spritesEnabled}
          setEnabled={setSpritesEnabled}
        >
          <RandomizeButton onClick={randomizeSprites} />
          <CheckboxesGroup title='Packs' extra='Powered by JSplacement'>
            <Checkboxes<SpritesPack>
              items={[
                {label: 'Classic', value: 'classic'},
                {label: 'Big data', value: 'bigdata'},
                {label: 'Aggromaxx', value: 'aggromaxx'},
                {label: 'Crap pack', value: 'crappack'},
              ]}
              values={spritesPacks}
              setValues={setSpritesPacks}
            />
          </CheckboxesGroup>
          <CheckboxesGroup title='Other options'>
            <Checkbox
              label='Rotate'
              isChecked={spritesRotationEnabled}
              setIsChecked={setSpritesRotationEnabled}
            />
          </CheckboxesGroup>
        </Group>
        <Group title='Other'>
          <RandomizeButton onClick={randomizeCompositionModes} />
          <CheckboxesGroup title='Composition modes'>
            <Checkboxes<CompositionMode>
              items={[
                {label: 'color-burn', value: 'color-burn'},
                {label: 'color-dodge', value: 'color-dodge'},
                {label: 'darken', value: 'darken'},
                {label: 'difference', value: 'difference'},
                {label: 'exclusion', value: 'exclusion'},
                {label: 'hard-light', value: 'hard-light'},
                {label: 'lighten', value: 'lighten'},
                {label: 'lighter', value: 'lighter'},
                {label: 'luminosity', value: 'luminosity'},
                {label: 'multiply', value: 'multiply'},
                {label: 'overlay', value: 'overlay'},
                {label: 'screen', value: 'screen'},
                {label: 'soft-light', value: 'soft-light'},
                {label: 'source-atop', value: 'source-atop'},
                {label: 'source-over', value: 'source-over'},
                {label: 'xor', value: 'xor'},
              ]}
              values={compositionModes}
              setValues={setCompositionModes}
            />
          </CheckboxesGroup>
        </Group>
      </div>
    </section>
  );
}

function RandomizeButton({onClick}: {readonly onClick: () => void}) {
  return (
    <div>
      <Button size='sm' onClick={onClick}>
        Randomize
      </Button>
    </div>
  );
}
