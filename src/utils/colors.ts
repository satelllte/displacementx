/**
 * Converts RGB (0 - 255) numbers to string color in `rgb(r,g,b)` format.
 */
export const rgb = ({r, g, b}: {r: number; g: number; b: number}): string =>
  `rgb(${r},${g},${b})`;

/**
 * Converts RGB (0 - 255) + A (0 - 100) numbers to string color in `rgb(r,g,b,a)` format.
 */
export const rgba = ({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a: number;
}): string => `rgb(${r},${g},${b},${a / 100})`;

/**
 * Converts X (0 - 255) number to grayscale string color in `rgb(x,x,x)` format.
 */
export const xxx = ({x}: {x: number}): string => rgb({r: x, g: x, b: x});

/**
 * Converts X (0 - 255) + A (0 - 100) numbers to grayscale string color in `rgb(x,x,x,a)` format.
 */
export const xxxa = ({x, a}: {x: number; a: number}): string =>
  rgba({r: x, g: x, b: x, a});
