// @vitest-environment happy-dom

import {describe, it, expect, vi, beforeAll, afterAll} from 'vitest';
import {animate, animateWithSubIterations} from './animationFrame';

describe('animationFrame', () => {
  const anyNumber: number = expect.any(Number); // eslint-disable-line @typescript-eslint/no-unsafe-assignment

  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('animate', () => {
    it('should work as expected for the specified number of frames', () => {
      const frames = 3;
      const callback = vi.fn();
      const onEnd = vi.fn();

      animate({frames, callback, onEnd});

      // No frames yet
      expect(callback).toHaveBeenCalledTimes(0);
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Frame 0
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({
        time: anyNumber,
        frame: 0,
      });
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Frame 1
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith({
        time: anyNumber,
        frame: 1,
      });
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Frame 2 (last one)
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(3);
      expect(callback).toHaveBeenCalledWith({
        time: anyNumber,
        frame: 2,
      });
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Additional frame to cancel animation loop and trigger `onEnd` callback
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(3);
      expect(callback).toHaveBeenCalledWith({
        time: anyNumber,
        frame: 2,
      });
      expect(onEnd).toHaveBeenCalledTimes(1);

      // Check that the animation loop is cancelled
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(3);
      expect(onEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('animateWithSubIterations', () => {
    it('should work as expected for the specified number of iterations', () => {
      const iterations = 3;
      const iterationsPerFrame = 2;
      const callback = vi.fn();
      const onEnd = vi.fn();

      animateWithSubIterations({
        iterations,
        iterationsPerFrame,
        callback,
        onEnd,
      });

      // No frames yet
      expect(callback).toHaveBeenCalledTimes(0);
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Frame 0
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenNthCalledWith(1, {
        time: anyNumber,
        frame: 0,
        iteration: 0,
      });
      expect(callback).toHaveBeenNthCalledWith(2, {
        time: anyNumber,
        frame: 0,
        iteration: 1,
      });
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Frame 1
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(3);
      expect(callback).toHaveBeenNthCalledWith(3, {
        time: anyNumber,
        frame: 1,
        iteration: 2,
      });
      expect(onEnd).toHaveBeenCalledTimes(0);

      // Additional frame to cancel animation loop and trigger `onEnd` callback
      vi.advanceTimersToNextTimer();
      expect(onEnd).toHaveBeenCalledTimes(1);

      // Check that the animation loop is cancelled
      vi.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(3);
      expect(onEnd).toHaveBeenCalledTimes(1);
    });
  });
});
