/**
 * A wrapper around requestAnimationFrame that allows the caller
 * to specify the total number of frames to run the animation loop for.
 */
export const animate = ({
  frames,
  callback,
  onEnd,
}: {
  frames: number;
  callback: (args: {time: number; frame: number}) => void;
  onEnd?: () => void;
}): void => {
  let handle: number | undefined;
  let frame = 0;

  const draw: FrameRequestCallback = (time) => {
    if (frame >= frames && handle) {
      cancelAnimationFrame(handle);
      handle = undefined;
      onEnd?.();
      return;
    }

    callback({time, frame});

    frame++;
    requestAnimationFrame(draw);
  };

  handle = requestAnimationFrame(draw);
};

/**
 * A wrapper around requestAnimationFrame that allows the caller
 * to specify the total number of iterations to run with their limit per frame.
 */
export const animateWithSubIterations = ({
  iterations,
  iterationsPerFrame,
  callback,
  onEnd,
}: {
  iterations: number;
  iterationsPerFrame: number;
  callback: (args: {time: number; frame: number; iteration: number}) => void;
  onEnd?: () => void;
}): void => {
  let iteration = 0;

  animate({
    frames: Math.ceil(iterations / iterationsPerFrame),
    callback({time, frame}) {
      for (let i = 0; i < iterationsPerFrame; i++) {
        callback({time, frame, iteration});
        iteration++;
        if (iteration >= iterations) {
          return;
        }
      }
    },
    onEnd,
  });
};
