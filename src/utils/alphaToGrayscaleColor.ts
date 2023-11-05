/**
 * Converts an alpha number in 0 - 255 range to grayscale HEX color.
 * Examples:
 * - 0 -> #000000
 * - 128 -> #808080
 * - 255 -> #ffffff
 */
export const alphaToGrayscaleColor = (alpha: number): string => {
  const hex = alpha.toString(16).padStart(2, '0');
  return `#${hex}${hex}${hex}`;
};
