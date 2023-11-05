/**
 * A wrapper around requestAnimationFrame that allows the caller
 * to specify the number of frames to run the animation loop for.
 */
export const animate = ({
  frames,
  callback,
  onEnd,
}: {
  frames: number;
  callback: (args: {time: number; frame: number}) => void;
  onEnd?: () => void;
}) => {
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
