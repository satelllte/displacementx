import {type NumberDual} from '@/types';

// -------------------
// TYPES
// -------------------

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

// -------------------
// HELPER CONSTANTS
// -------------------

const _booleanTrue: SettingBooleanConstant = {default: true};
const _brightnessRange: SettingDualConstant = {
  min: 0,
  max: 255,
  default: [0, 255],
  step: 1,
};
const _alpha50to100: SettingDualConstant = {
  min: 0,
  max: 100,
  default: [50, 100],
  step: 1,
};
const _alpha80to100: SettingDualConstant = {
  min: 0,
  max: 100,
  default: [80, 100],
  step: 1,
};
const _scale20to200: SettingConstant = {
  min: 20,
  max: 200,
  default: 100,
  step: 1,
};
const _amount2to10: SettingDualConstant = {
  min: 2,
  max: 10,
  default: [2, 5],
  step: 1,
};
const _gap: SettingConstant = {
  min: 10,
  max: 1000,
  default: 100,
  step: 10,
};

// -------------------
// CONSTANTS
// -------------------

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

export const rectEnabled: SettingBooleanConstant = _booleanTrue;
export const rectBrightness: SettingDualConstant = _brightnessRange;
export const rectAlpha: SettingDualConstant = _alpha50to100;
export const rectScale: SettingConstant = _scale20to200;

export const gridEnabled: SettingBooleanConstant = _booleanTrue;
export const gridBrightness: SettingDualConstant = _brightnessRange;
export const gridAlpha: SettingDualConstant = _alpha80to100;
export const gridScale: SettingConstant = _scale20to200;
export const gridAmount: SettingDualConstant = _amount2to10;
export const gridGap: SettingConstant = _gap;

export const colsEnabled: SettingBooleanConstant = _booleanTrue;
export const colsBrightness: SettingDualConstant = _brightnessRange;
export const colsAlpha: SettingDualConstant = _alpha80to100;
export const colsScale: SettingConstant = _scale20to200;
export const colsAmount: SettingDualConstant = _amount2to10;
export const colsGap: SettingConstant = _gap;

export const rowsEnabled: SettingBooleanConstant = _booleanTrue;
export const rowsBrightness: SettingDualConstant = _brightnessRange;
export const rowsAlpha: SettingDualConstant = _alpha80to100;
export const rowsScale: SettingConstant = _scale20to200;
export const rowsAmount: SettingDualConstant = _amount2to10;
export const rowsGap: SettingConstant = _gap;
