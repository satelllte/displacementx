import {describe, expect, it} from 'vitest';
import {clsx} from './clsx';

describe('clsx', () => {
  it('returns a single class name', () => {
    expect(clsx('c1')).toBe('c1');
  });

  it('joins multiple class names with a space', () => {
    expect(clsx('c1', 'c2', 'c3')).toBe('c1 c2 c3');
  });

  it('ignores false values', () => {
    expect(clsx('c1', false, 'c2')).toBe('c1 c2');
  });

  it('ignores undefined values', () => {
    expect(clsx('c1', undefined, 'c2')).toBe('c1 c2');
  });

  it('ignores null values', () => {
    expect(clsx('c1', null, 'c2')).toBe('c1 c2');
  });

  it('ignores empty strings', () => {
    expect(clsx('c1', '', 'c2')).toBe('c1 c2');
  });

  it('returns an empty string when all arguments are falsy', () => {
    expect(clsx(false, undefined, null, '')).toBe('');
  });

  it('handles multiple consecutive falsy values', () => {
    expect(
      clsx('c1 c2', false && 'c3', false, undefined, null, true && 'c4'),
    ).toBe('c1 c2 c4');
  });

  it('preserves whitespace within a class name', () => {
    expect(clsx('c1 c2', 'c3')).toBe('c1 c2 c3');
  });
});
