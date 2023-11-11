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

export type SettingBooleanConstant = {
  default: boolean;
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

export const rectEnabled: SettingBooleanConstant = {
  default: true,
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

export const gridEnabled: SettingBooleanConstant = {
  default: true,
};

export const gridBrightness: SettingDualConstant = {
  min: 0,
  max: 255,
  default: [0, 255],
  step: 1,
};

export const gridAlpha: SettingDualConstant = {
  min: 0,
  max: 100,
  default: [80, 100],
  step: 1,
};

export const gridScale: SettingConstant = {
  min: 20,
  max: 200,
  default: 100,
  step: 1,
};

export const gridAmount: SettingDualConstant = {
  min: 2,
  max: 10,
  default: [2, 5],
  step: 1,
};

export const gridGap: SettingConstant = {
  min: 10,
  max: 1000,
  default: 100,
  step: 10,
};
