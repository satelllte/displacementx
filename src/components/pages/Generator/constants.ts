import {type NumberDual} from '@/types';

export type SettingConstant = {
  min: number;
  max: number;
  default: number;
  step: number;
};

export type SettingDualConstant = {
  min: number;
  max: number;
  default: NumberDual;
  step: number;
};

export const iterations: SettingConstant = {
  min: 10,
  max: 2000,
  default: 100,
  step: 1,
};

export const backgroundBrightness: SettingConstant = {
  min: 0,
  max: 255,
  default: 32,
  step: 1,
};

export const rectBrightness: SettingDualConstant = {
  min: 0,
  max: 255,
  default: [0, 255],
  step: 1,
};

export const rectAlpha: SettingDualConstant = {
  min: 0,
  max: 100,
  default: [50, 100],
  step: 1,
};

export const rectScale: SettingConstant = {
  min: 20,
  max: 200,
  default: 100,
  step: 1,
};
