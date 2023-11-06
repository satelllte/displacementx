import {create} from 'zustand';
import {
  iterationsMin,
  iterationsMax,
  iterationsDefault,
  backgroundBrightnessMin,
  backgroundBrightnessMax,
  backgroundBrightnessDefault,
  rectBrightnessMin,
  rectBrightnessMax,
  rectBrightnessDefault,
  rectAlphaMin,
  rectAlphaMax,
  rectAlphaDefault,
} from './constants';
import {randomInteger} from '@/utils/random';

type Values = {
  iterations: number;
  backgroundBrightness: number;
  rectBrightness: [number, number];
  rectAlpha: [number, number];
};

type Actions = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
  setRectBrightness: (rectBrightness: Values['rectBrightness']) => void;
  setRectAlpha: (rectAlpha: Values['rectAlpha']) => void;
  randomize: () => void;
};

export const useStore = create<Values & Actions>((set) => ({
  iterations: iterationsDefault,
  backgroundBrightness: backgroundBrightnessDefault,
  rectBrightness: rectBrightnessDefault,
  rectAlpha: rectAlphaDefault,
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
  randomize() {
    set(() => ({
      iterations: randomInteger(iterationsMin, iterationsMax),
      backgroundBrightness: randomInteger(
        backgroundBrightnessMin,
        backgroundBrightnessMax,
      ),
      rectBrightness: [
        randomInteger(rectBrightnessMin, rectBrightnessMax),
        randomInteger(rectBrightnessMin, rectBrightnessMax),
      ],
      rectAlpha: [
        randomInteger(rectAlphaMin, rectAlphaMax),
        randomInteger(rectAlphaMin, rectAlphaMax),
      ],
    }));
  },
}));
