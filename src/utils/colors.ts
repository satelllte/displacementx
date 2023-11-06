/**
 * Converts brightness alpha (0 - 255) and opacity (0 - 100) to RGBA color like `#FFFFFFFF`.
 */
export const grayscale = ({
  brightnessAlpha,
  opacity = 100,
}: {
  brightnessAlpha: number;
  opacity?: number;
}): string => {
  const x = alphaToHex(brightnessAlpha);
  const a = alphaToHex(Math.round((opacity / 100) * 255));
  return `#${x}${x}${x}${a}`;
};

/**
 * Converts alpha (0 - 255) to hex color like `#FF`.
 */
const alphaToHex = (alpha: number): string =>
  alpha.toString(16).padStart(2, '0');
