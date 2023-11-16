import {type ColorRGB, type ColorRGBA} from '@/types';

export const rgb = ({r, g, b}: ColorRGB): string => `rgb(${r},${g},${b})`;

export const rgba = ({r, g, b, a}: ColorRGBA): string =>
  `rgb(${r},${g},${b},${a / 100})`;

export const rgbToHex = ({r, g, b}: ColorRGB): string => {
  const toHex = (x: number): string => x.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const xxx = ({x}: {x: number}): string => rgb({r: x, g: x, b: x});

export const xxxa = ({x, a}: {x: number; a: number}): string =>
  rgba({r: x, g: x, b: x, a});
