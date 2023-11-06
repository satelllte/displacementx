import {saveImage} from './saveImage';

export const saveImageNormal = ({
  canvas,
  fileName,
}: {
  canvas: HTMLCanvasElement;
  fileName: string;
}): void => {
  const ctx2d = canvas.getContext('2d');
  if (!ctx2d) return;

  const {width, height} = canvas;

  const canvasNormal = document.createElement('canvas');
  canvasNormal.width = width;
  canvasNormal.height = height;

  const ctx2dNormal = canvasNormal.getContext('2d');
  if (!ctx2dNormal) return;

  const source = ctx2d.getImageData(0, 0, width, height);
  const destination = ctx2dNormal.createImageData(width, height);

  for (let i = 0, l = width * height * 4; i < l; i += 4) {
    let x1;
    let x2;
    let y1;
    let y2;

    if (i % (width * 4) === 0) {
      x1 = source.data[i];
      x2 = source.data[i + 4];
    } else if (i % (width * 4) === (width - 1) * 4) {
      x1 = source.data[i - 4];
      x2 = source.data[i];
    } else {
      x1 = source.data[i - 4];
      x2 = source.data[i + 4];
    }

    if (i < height * 4) {
      y1 = source.data[i];
      y2 = source.data[i + height * 4];
    } else if (i > height * (height - 1) * 4) {
      y1 = source.data[i - height * 4];
      y2 = source.data[i];
    } else {
      y1 = source.data[i - height * 4];
      y2 = source.data[i + height * 4];
    }

    destination.data[i] = x1 - x2 + 127;
    destination.data[i + 1] = y1 - y2 + 127;
    destination.data[i + 2] = 255;
    destination.data[i + 3] = 255;
  }

  ctx2dNormal.putImageData(destination, 0, 0);

  saveImage({canvas: canvasNormal, fileName});
};
