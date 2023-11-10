import {create} from 'zustand';
import {
  iterations,
  backgroundBrightness,
  rectBrightness,
  rectAlpha,
  rectScale,
  gridBrightness,
  gridAlpha,
  gridScale,
  gridAmount,
  gridGap,
  type SettingConstant,
  type SettingDualConstant,
} from './constants';
import {randomInteger} from '@/utils/random';
import {type NumberDual} from '@/types';

type Values = {
  iterations: number;
  backgroundBrightness: number;
  rectBrightness: NumberDual;
  rectAlpha: NumberDual;
  rectScale: number;
  gridBrightness: NumberDual;
  gridAlpha: NumberDual;
  gridScale: number;
  gridAmount: NumberDual;
  gridGap: number;
};

type Actions = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
  setRectBrightness: (rectBrightness: Values['rectBrightness']) => void;
  setRectAlpha: (rectAlpha: Values['rectAlpha']) => void;
  setRectScale: (rectScale: Values['rectScale']) => void;
  setGridBrightness: (gridBrightness: Values['gridBrightness']) => void;
  setGridAlpha: (gridAlpha: Values['gridAlpha']) => void;
  setGridScale: (gridScale: Values['gridScale']) => void;
  setGridAmount: (gridAmount: Values['gridAmount']) => void;
  setGridGap: (gridGap: Values['gridGap']) => void;
  randomize: () => void;
};

export const useStore = create<Values & Actions>((set) => ({
  iterations: iterations.default,
  backgroundBrightness: backgroundBrightness.default,
  rectBrightness: rectBrightness.default,
  rectAlpha: rectAlpha.default,
  rectScale: rectScale.default,
  gridBrightness: gridBrightness.default,
  gridAlpha: gridAlpha.default,
  gridScale: gridScale.default,
  gridAmount: gridAmount.default,
  gridGap: gridGap.default,
  setIterations(iterations: Values['iterations']) {
    set(() => ({iterations}));
  },
  setBackgroundBrightness(
    backgroundBrightness: Values['backgroundBrightness'],
  ) {
    set(() => ({backgroundBrightness}));
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
  randomize() {
    set(() => ({
      iterations: randSetting(iterations),
      backgroundBrightness: randSetting(backgroundBrightness),
      rectBrightness: randDualSetting(rectBrightness),
      rectAlpha: randDualSetting(rectAlpha),
      rectScale: randSetting(rectScale),
      gridBrightness: randDualSetting(gridBrightness),
      gridAlpha: randDualSetting(gridAlpha),
      gridScale: randSetting(gridScale),
      gridAmount: randDualSetting(gridAmount),
      gridGap: randSetting(gridGap),
    }));
  },
}));

const randSetting = (setting: SettingConstant) =>
  randomInteger(setting.min, setting.max);

const randDualSetting = (setting: SettingDualConstant): NumberDual => [
  randomInteger(setting.min, setting.max),
  randomInteger(setting.min, setting.max),
];
