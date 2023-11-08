import {create} from 'zustand';
import {
  iterations,
  backgroundBrightness,
  rectBrightness,
  rectAlpha,
  rectScale,
  type SettingConstant,
  type SettingDualConstant,
} from './constants';
import {randomInteger} from '@/utils/random';
import {type NumberRange} from '@/types';

type Values = {
  iterations: number;
  backgroundBrightness: number;
  rectBrightness: NumberRange;
  rectAlpha: NumberRange;
  rectScale: number;
};

type Actions = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
  setRectBrightness: (rectBrightness: Values['rectBrightness']) => void;
  setRectAlpha: (rectAlpha: Values['rectAlpha']) => void;
  setRectScale: (rectScale: Values['rectScale']) => void;
  randomize: () => void;
};

export const useStore = create<Values & Actions>((set) => ({
  iterations: iterations.default,
  backgroundBrightness: backgroundBrightness.default,
  rectBrightness: rectBrightness.default,
  rectAlpha: rectAlpha.default,
  rectScale: rectScale.default,
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
  randomize() {
    set(() => ({
      iterations: randSetting(iterations),
      backgroundBrightness: randSetting(backgroundBrightness),
      rectBrightness: randDualSetting(rectBrightness),
      rectAlpha: randDualSetting(rectAlpha),
      rectScale: randSetting(rectScale),
    }));
  },
}));

const randSetting = (setting: SettingConstant) =>
  randomInteger(setting.min, setting.max);

const randDualSetting = (setting: SettingDualConstant): NumberRange => [
  randomInteger(setting.min, setting.max),
  randomInteger(setting.min, setting.max),
];
