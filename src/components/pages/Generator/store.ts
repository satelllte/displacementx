import {create} from 'zustand';
import {
  iterationsMin,
  iterationsMax,
  iterationsDefault,
  backgroundBrightnessMin,
  backgroundBrightnessMax,
  backgroundBrightnessDefault,
} from './constants';
import {randomInteger} from '@/utils/random';

type Values = {
  iterations: number;
  backgroundBrightness: number;
};

type Actions = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
  randomize: () => void;
};

export const useStore = create<Values & Actions>((set) => ({
  iterations: iterationsDefault,
  backgroundBrightness: backgroundBrightnessDefault,
  setIterations(iterations: Values['iterations']) {
    set(() => ({iterations}));
  },
  setBackgroundBrightness(
    backgroundBrightness: Values['backgroundBrightness'],
  ) {
    set(() => ({backgroundBrightness}));
  },
  randomize() {
    set(() => ({
      iterations: randomInteger(iterationsMin, iterationsMax),
      backgroundBrightness: randomInteger(
        backgroundBrightnessMin,
        backgroundBrightnessMax,
      ),
    }));
  },
}));
