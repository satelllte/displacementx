export const saveImage = ({
  canvas,
  fileName,
}: {
  canvas: HTMLCanvasElement;
  fileName: string;
}): void => {
  const href = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = href;
  a.download = `${fileName}.png`;
  a.click();
};
