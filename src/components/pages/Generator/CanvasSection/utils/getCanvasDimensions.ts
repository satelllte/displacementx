export const getCanvasDimensions = (
  ctx2d: CanvasRenderingContext2D,
): {w: number; h: number} => ({w: ctx2d.canvas.width, h: ctx2d.canvas.height});
