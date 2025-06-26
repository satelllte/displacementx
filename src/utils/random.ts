import {type ColorRGB} from '../types';

/**
 * Results with random boolean value
 */
export const randomBoolean = (): boolean => Math.random() >= 0.5;

export const randomColorRGB = (): ColorRGB => ({
  r: randomInteger(0, 255),
  g: randomInteger(0, 255),
  b: randomInteger(0, 255),
});

/**
 * Results with random integer value in [min..max] range (inclusive)
 */
export const randomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Results with random item from array. If array is empty, returns `undefined`.
 */
export const randomItem = <T>(items: T[]): T | undefined =>
  items.length > 0 ? items[randomInteger(0, items.length - 1)] : undefined;
