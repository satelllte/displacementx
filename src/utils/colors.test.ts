import {describe, expect, it} from 'vitest';
import {rgb, rgba, rgbToHex, xxx, xxxa} from './colors';

describe('colors', () => {
  describe('rgb', () => {
    it('works', () => {
      expect(rgb({r: 0, g: 0, b: 0})).toBe('rgb(0,0,0)');
      expect(rgb({r: 125, g: 24, b: 255})).toBe('rgb(125,24,255)');
    });
  });

  describe('rgba', () => {
    it('works', () => {
      expect(rgba({r: 0, g: 0, b: 0, a: 0})).toBe('rgb(0,0,0,0)');
      expect(rgba({r: 12, g: 0, b: 11, a: 50})).toBe('rgb(12,0,11,0.5)');
      expect(rgba({r: 12, g: 0, b: 11, a: 75})).toBe('rgb(12,0,11,0.75)');
      expect(rgba({r: 12, g: 0, b: 11, a: 100})).toBe('rgb(12,0,11,1)');
    });
  });

  describe('rgbToHex', () => {
    it('works', () => {
      expect(rgbToHex({r: 0, g: 0, b: 0})).toBe('#000000');
      expect(rgbToHex({r: 12, g: 0, b: 0})).toBe('#0c0000');
      expect(rgbToHex({r: 16, g: 132, b: 0})).toBe('#108400');
      expect(rgbToHex({r: 0, g: 192, b: 255})).toBe('#00c0ff');
      expect(rgbToHex({r: 255, g: 254, b: 10})).toBe('#fffe0a');
    });
  });

  describe('xxx', () => {
    it('works', () => {
      expect(xxx({x: 0})).toBe('rgb(0,0,0)');
      expect(xxx({x: 124})).toBe('rgb(124,124,124)');
    });
  });

  describe('xxxa', () => {
    it('works', () => {
      expect(xxxa({x: 0, a: 0})).toBe('rgb(0,0,0,0)');
      expect(xxxa({x: 12, a: 50})).toBe('rgb(12,12,12,0.5)');
      expect(xxxa({x: 13, a: 75})).toBe('rgb(13,13,13,0.75)');
      expect(xxxa({x: 255, a: 100})).toBe('rgb(255,255,255,1)');
    });
  });
});
