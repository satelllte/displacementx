import {create} from 'zustand';

type Values = {
  iterations: number;
  backgroundBrightness: number;
};

type Actions = {
  setIterations: (iterations: Values['iterations']) => void;
  setBackgroundBrightness: (
    backgroundBrightness: Values['backgroundBrightness'],
  ) => void;
};

export const useStore = create<Values & Actions>((set) => ({
  iterations: 100,
  backgroundBrightness: 32,
  setIterations(iterations: Values['iterations']) {
    set(() => ({iterations}));
  },
  setBackgroundBrightness(
    backgroundBrightness: Values['backgroundBrightness'],
  ) {
    set(() => ({backgroundBrightness}));
  },
}));
