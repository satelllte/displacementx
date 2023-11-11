/**
 * Results with random boolean value
 */
export const randomBoolean = (): boolean => Math.random() >= 0.5;

/**
 * Results with random integer value in [min..max] range (inclusive)
 */
export const randomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
