export const getCtx2dFromRef = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
): CanvasRenderingContext2D => {
  const canvas = canvasRef.current;
  if (!canvas) throw new TypeError('Canvas not found in ref');

  const ctx2d = canvas.getContext('2d');
  if (!ctx2d) throw new TypeError('Error getting 2d context from canvas');

  return ctx2d;
};
