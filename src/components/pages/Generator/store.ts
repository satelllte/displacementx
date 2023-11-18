import {create} from 'zustand';
import {
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
  spritesPacks,
  spritesRotationEnabled,
  type SettingConstant,
  type SettingDualConstant,
  type SpritesPack,
} from './constants';
import {randomBoolean, randomInteger} from '@/utils/random';
import {type NumberDual} from '@/types';

type Values = {
  iterations: number;
  backgroundBrightness: number;
  rectEnabled: boolean;
  rectBrightness: NumberDual;
  rectAlpha: NumberDual;
  rectScale: number;
  gridEnabled: boolean;
  gridBrightness: NumberDual;
  gridAlpha: NumberDual;
  gridScale: number;
  gridAmount: NumberDual;
  gridGap: number;
  colsEnabled: boolean;
  colsBrightness: NumberDual;
  colsAlpha: NumberDual;
  colsScale: number;
  colsAmount: NumberDual;
  colsGap: number;
  rowsEnabled: boolean;
  rowsBrightness: NumberDual;
  rowsAlpha: NumberDual;
  rowsScale: number;
  rowsAmount: NumberDual;
  rowsGap: number;
  linesEnabled: boolean;
  linesBrightness: NumberDual;
  linesAlpha: NumberDual;
  linesWidth: NumberDual;
  spritesEnabled: boolean;
  spritesPacks: SpritesPack[];
  spritesRotationEnabled: boolean;
};

type Setters = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
  setRectEnabled: (rectEnabled: Values['rectEnabled']) => void;
  setRectBrightness: (rectBrightness: Values['rectBrightness']) => void;
  setRectAlpha: (rectAlpha: Values['rectAlpha']) => void;
  setRectScale: (rectScale: Values['rectScale']) => void;
  setGridEnabled: (gridEnabled: Values['gridEnabled']) => void;
  setGridBrightness: (gridBrightness: Values['gridBrightness']) => void;
  setGridAlpha: (gridAlpha: Values['gridAlpha']) => void;
  setGridScale: (gridScale: Values['gridScale']) => void;
  setGridAmount: (gridAmount: Values['gridAmount']) => void;
  setGridGap: (gridGap: Values['gridGap']) => void;
  setColsEnabled: (colsEnabled: Values['colsEnabled']) => void;
  setColsBrightness: (colsBrightness: Values['colsBrightness']) => void;
  setColsAlpha: (colsAlpha: Values['colsAlpha']) => void;
  setColsScale: (colsScale: Values['colsScale']) => void;
  setColsAmount: (colsAmount: Values['colsAmount']) => void;
  setColsGap: (colsGap: Values['colsGap']) => void;
  setRowsEnabled: (rowsEnabled: Values['rowsEnabled']) => void;
  setRowsBrightness: (rowsBrightness: Values['rowsBrightness']) => void;
  setRowsAlpha: (rowsAlpha: Values['rowsAlpha']) => void;
  setRowsScale: (rowsScale: Values['rowsScale']) => void;
  setRowsAmount: (rowsAmount: Values['rowsAmount']) => void;
  setRowsGap: (rowsGap: Values['rowsGap']) => void;
  setLinesEnabled: (linesEnabled: Values['linesEnabled']) => void;
  setLinesBrightness: (linesBrightness: Values['linesBrightness']) => void;
  setLinesAlpha: (linesAlpha: Values['linesAlpha']) => void;
  setLinesWidth: (linesWidth: Values['linesWidth']) => void;
  setSpritesEnabled: (spritesEnabled: Values['spritesEnabled']) => void;
  setSpritesPacks: (spritesPacks: Values['spritesPacks']) => void;
  setSpritesRotationEnabled: (
    spritesRotationEnabled: Values['spritesEnabled'],
  ) => void;
};

type ComputedValues = {
  getSprites: () => HTMLImageElement[];
};

type Actions = {
  randomize: () => void;
};

export const useStore = create<Values & Setters & ComputedValues & Actions>(
  (set, get) => ({
    // Values
    // ---
    iterations: iterations.default,
    backgroundBrightness: backgroundBrightness.default,
    rectEnabled: rectEnabled.default,
    rectBrightness: rectBrightness.default,
    rectAlpha: rectAlpha.default,
    rectScale: rectScale.default,
    gridEnabled: gridEnabled.default,
    gridBrightness: gridBrightness.default,
    gridAlpha: gridAlpha.default,
    gridScale: gridScale.default,
    gridAmount: gridAmount.default,
    gridGap: gridGap.default,
    colsEnabled: colsEnabled.default,
    colsBrightness: colsBrightness.default,
    colsAlpha: colsAlpha.default,
    colsScale: colsScale.default,
    colsAmount: colsAmount.default,
    colsGap: colsGap.default,
    rowsEnabled: rowsEnabled.default,
    rowsBrightness: rowsBrightness.default,
    rowsAlpha: rowsAlpha.default,
    rowsScale: rowsScale.default,
    rowsAmount: rowsAmount.default,
    rowsGap: rowsGap.default,
    linesEnabled: linesEnabled.default,
    linesBrightness: linesBrightness.default,
    linesAlpha: linesAlpha.default,
    linesWidth: linesWidth.default,
    spritesEnabled: spritesEnabled.default,
    spritesPacks: spritesPacks.default,
    spritesRotationEnabled: spritesRotationEnabled.default,
    // Setters
    // ---
    setIterations(iterations: Values['iterations']) {
      set(() => ({iterations}));
    },
    setBackgroundBrightness(
      backgroundBrightness: Values['backgroundBrightness'],
    ) {
      set(() => ({backgroundBrightness}));
    },
    setRectEnabled(rectEnabled: Values['rectEnabled']) {
      set(() => ({rectEnabled}));
    },
    setRectBrightness(rectBrightness: Values['rectBrightness']) {
      set(() => ({rectBrightness}));
    },
    setRectAlpha(rectAlpha: Values['rectAlpha']) {
      set(() => ({rectAlpha}));
    },
    setRectScale(rectScale: Values['rectScale']) {
      set(() => ({rectScale}));
    },
    setGridEnabled(gridEnabled: Values['gridEnabled']) {
      set(() => ({gridEnabled}));
    },
    setGridBrightness(gridBrightness: Values['gridBrightness']) {
      set(() => ({gridBrightness}));
    },
    setGridAlpha(gridAlpha: Values['gridAlpha']) {
      set(() => ({gridAlpha}));
    },
    setGridScale(gridScale: Values['gridScale']) {
      set(() => ({gridScale}));
    },
    setGridAmount(gridAmount: Values['gridAmount']) {
      set(() => ({gridAmount}));
    },
    setGridGap(gridGap: Values['gridGap']) {
      set(() => ({gridGap}));
    },
    setColsEnabled(colsEnabled: Values['colsEnabled']) {
      set(() => ({colsEnabled}));
    },
    setColsBrightness(colsBrightness: Values['colsBrightness']) {
      set(() => ({colsBrightness}));
    },
    setColsAlpha(colsAlpha: Values['colsAlpha']) {
      set(() => ({colsAlpha}));
    },
    setColsScale(colsScale: Values['colsScale']) {
      set(() => ({colsScale}));
    },
    setColsAmount(colsAmount: Values['colsAmount']) {
      set(() => ({colsAmount}));
    },
    setColsGap(colsGap: Values['colsGap']) {
      set(() => ({colsGap}));
    },
    setRowsEnabled(rowsEnabled: Values['rowsEnabled']) {
      set(() => ({rowsEnabled}));
    },
    setRowsBrightness(rowsBrightness: Values['rowsBrightness']) {
      set(() => ({rowsBrightness}));
    },
    setRowsAlpha(rowsAlpha: Values['rowsAlpha']) {
      set(() => ({rowsAlpha}));
    },
    setRowsScale(rowsScale: Values['rowsScale']) {
      set(() => ({rowsScale}));
    },
    setRowsAmount(rowsAmount: Values['rowsAmount']) {
      set(() => ({rowsAmount}));
    },
    setRowsGap(rowsGap: Values['rowsGap']) {
      set(() => ({rowsGap}));
    },
    setLinesEnabled(linesEnabled: Values['linesEnabled']) {
      set(() => ({linesEnabled}));
    },
    setLinesBrightness(linesBrightness: Values['linesBrightness']) {
      set(() => ({linesBrightness}));
    },
    setLinesAlpha(linesAlpha: Values['linesAlpha']) {
      set(() => ({linesAlpha}));
    },
    setLinesWidth(linesWidth: Values['linesWidth']) {
      set(() => ({linesWidth}));
    },
    setSpritesEnabled(spritesEnabled: Values['spritesEnabled']) {
      set(() => ({spritesEnabled}));
    },
    setSpritesPacks(spritesPacks: Values['spritesPacks']) {
      set(() => ({spritesPacks}));
    },
    setSpritesRotationEnabled(
      spritesRotationEnabled: Values['spritesRotationEnabled'],
    ) {
      set(() => ({spritesRotationEnabled}));
    },
    // ComputedValues
    // ---
    getSprites() {
      const spritesBaseUrl = '/sprites';
      const {spritesPacks} = get();
      const sprites: HTMLImageElement[] = [];

      const hasClassic = spritesPacks.includes('classic');
      const hasBigdata = spritesPacks.includes('bigdata');
      const hasAggromaxx = spritesPacks.includes('aggromaxx');
      const hasCrappack = spritesPacks.includes('crappack');

      const addSprites = (pack: SpritesPack, n: number) => {
        for (let i = 1; i <= n; i++) {
          const sprite = new Image();
          sprite.src = `${spritesBaseUrl}/${pack}/${i}.svg`;
          sprites.push(sprite);
        }
      };

      if (hasClassic) addSprites('classic', 17);
      if (hasBigdata) addSprites('bigdata', 5);
      if (hasAggromaxx) addSprites('aggromaxx', 12);
      if (hasCrappack) addSprites('crappack', 27);

      return sprites;
    },
    // Actions
    // ---
    randomize() {
      set(() => ({
        iterations: randSetting(iterations),
        backgroundBrightness: randSetting(backgroundBrightness),
        rectEnabled: randomBoolean(),
        rectBrightness: randDualSetting(rectBrightness),
        rectAlpha: randDualSetting(rectAlpha),
        rectScale: randSetting(rectScale),
        gridEnabled: randomBoolean(),
        gridBrightness: randDualSetting(gridBrightness),
        gridAlpha: randDualSetting(gridAlpha),
        gridScale: randSetting(gridScale),
        gridAmount: randDualSetting(gridAmount),
        gridGap: randSetting(gridGap),
        colsEnabled: randomBoolean(),
        colsBrightness: randDualSetting(colsBrightness),
        colsAlpha: randDualSetting(colsAlpha),
        colsScale: randSetting(colsScale),
        colsAmount: randDualSetting(colsAmount),
        colsGap: randSetting(colsGap),
        rowsEnabled: randomBoolean(),
        rowsBrightness: randDualSetting(rowsBrightness),
        rowsAlpha: randDualSetting(rowsAlpha),
        rowsScale: randSetting(rowsScale),
        rowsAmount: randDualSetting(rowsAmount),
        rowsGap: randSetting(rowsGap),
        linesEnabled: randomBoolean(),
        linesBrightness: randDualSetting(linesBrightness),
        linesAlpha: randDualSetting(linesAlpha),
        linesWidth: randDualSetting(linesWidth),
        spritesEnabled: randomBoolean(),
        spritesPacks: randSpritesPacks(),
        spritesRotationEnabled: randomBoolean(),
      }));
    },
  }),
);

const randSetting = (setting: SettingConstant) =>
  randomInteger(setting.min, setting.max);

const randDualSetting = (setting: SettingDualConstant): NumberDual => [
  randomInteger(setting.min, setting.max),
  randomInteger(setting.min, setting.max),
];

const randSpritesPacks = (): SpritesPack[] => {
  const packs: SpritesPack[] = [];
  if (randomBoolean()) packs.push('classic');
  if (randomBoolean()) packs.push('bigdata');
  if (randomBoolean()) packs.push('aggromaxx');
  if (randomBoolean()) packs.push('crappack');
  return packs;
};
