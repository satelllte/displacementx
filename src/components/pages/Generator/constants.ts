import {type NumberRange} from '@/types';

export const iterationsMin = 10;
export const iterationsMax = 2000;
export const iterationsDefault = 100;
export const iterationsStep = 1;

export const backgroundBrightnessMin = 0;
export const backgroundBrightnessMax = 255;
export const backgroundBrightnessDefault = 32;
export const backgroundBrightnessStep = 1;

export const rectBrightnessMin = 0;
export const rectBrightnessMax = 255;
export const rectBrightnessDefault: NumberRange = [0, 255];
export const rectBrightnessStep = 1;

export const rectAlphaMin = 0;
export const rectAlphaMax = 100;
export const rectAlphaDefault: NumberRange = [50, 100];
export const rectAlphaStep = 1;

export const rectScaleMin = 20;
export const rectScaleMax = 200;
export const rectScaleDefault = 100;
export const rectScaleStep = 1;
