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

  it('should works as expected for the specified number of iterations', () => {
    const iterations = 3;
    const callback = vi.fn();
    const onEnd = vi.fn();

    animate({iterations, callback, onEnd});

    // No ticks yet
    expect(callback).toHaveBeenCalledTimes(0);
    expect(onEnd).toHaveBeenCalledTimes(0);

    // Tick 1
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(onEnd).toHaveBeenCalledTimes(0);

    // Tick 2
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(onEnd).toHaveBeenCalledTimes(0);

    // Tick 3 (last one)
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(3);
    expect(onEnd).toHaveBeenCalledTimes(0);

    // Additional tick to cancel animation frame and trigger `onEnd` callback
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(3);
    expect(onEnd).toHaveBeenCalledTimes(1);

    // Check that no additional ticks occurred anymore
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(3);
    expect(onEnd).toHaveBeenCalledTimes(1);
  });
});
