/**
 * A wrapper around requestAnimationFrame that allows the caller
 * to specify the number of iterations to run the animation frame loop for.
 */
export const animate = ({
  iterations,
  callback,
  onEnd,
}: {
  iterations: number;
  callback: FrameRequestCallback;
  onEnd?: () => void;
}) => {
  let handle: number | undefined;
  let step = 0;

  const draw: FrameRequestCallback = (time) => {
    if (step++ >= iterations && handle) {
      cancelAnimationFrame(handle);
      handle = undefined;
      onEnd?.();
      return;
    }

    callback(time);

    requestAnimationFrame(draw);
  };

  handle = requestAnimationFrame(draw);
};
