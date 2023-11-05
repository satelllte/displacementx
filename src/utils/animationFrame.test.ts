// @vitest-environment happy-dom

import {describe, it, expect, vi, beforeAll, afterAll} from 'vitest';
import {animate} from './animationFrame';

describe('animate', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should works as expected for the specified number of frames', () => {
    const frames = 3;
    const callback = vi.fn();
    const onEnd = vi.fn();

    const anyNumber: number = expect.any(Number); // eslint-disable-line @typescript-eslint/no-unsafe-assignment

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
