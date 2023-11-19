import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Button} from '@/components/ui/Button';
import {rgb} from '@/utils/colors';
import {randomColorRGB} from '@/utils/random';
import {type ColorRGB} from '@/types';
import {getCtx2dFromRef} from '../utils/getCtx2dFromRef';
import {getCanvasDimensions} from '../utils/getCanvasDimensions';
import {ColorPicker} from './ColorPicker';

const colorsMin = 2;
const colorsMax = 20;
const colorsDefault: ColorRGB[] = [
  {r: 0, g: 255, b: 255},
  {r: 149, g: 0, b: 255},
  {r: 255, g: 229, b: 0},
];

export const Gradient = forwardRef<HTMLCanvasElement>((_, forwardedRef) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useImperativeHandle(forwardedRef, () => {
    if (!canvasRef.current) {
      throw new TypeError('Canvas ref is not set');
    }

    return canvasRef.current;
  });

  const [colors, setColors] = useState<ColorRGB[]>(colorsDefault);

  const addColor = () => {
    setColors([...colors, {r: 0, g: 0, b: 0}]);
  };

  const setColorForIndex = (index: number) => (newColor: ColorRGB) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const deleteColorForIndex = (index: number) => () => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  useEffect(() => {
    const ctx2d = getCtx2dFromRef(canvasRef);
    const {w, h} = getCanvasDimensions(ctx2d);

    ctx2d.clearRect(0, 0, w, h);

    const gradient = ctx2d.createLinearGradient(0, 0, w, 0);
    for (let i = 0; i < colors.length; i++) {
      gradient.addColorStop(i / Math.max(colors.length - 1, 1), rgb(colors[i]));
    }

    ctx2d.fillStyle = gradient;
    ctx2d.fillRect(0, 0, w, h);
  }, [colors]);

  const randomize = () => {
    setColors(colors.map(randomColorRGB));
  };

  return (
    <div className='flex flex-col gap-2 sm:flex-row'>
      <div className='pt-1'>
        <canvas
          ref={canvasRef}
          className='h-36 w-36 border border-dashed border-white'
          width={256}
          height={256}
        />
      </div>
      <div>
        <div className='flex flex-col gap-1 pt-1'>
          {colors.map((color, index) => (
            <div
              key={index} // eslint-disable-line react/no-array-index-key
              className='flex gap-2'
            >
              <ColorPicker color={color} setColor={setColorForIndex(index)} />
              <Button
                disabled={colors.length <= colorsMin}
                onClick={deleteColorForIndex(index)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div className='flex gap-1 pt-2'>
          <Button disabled={colors.length >= colorsMax} onClick={addColor}>
            Add stop
          </Button>
          <Button onClick={randomize}>Randomize</Button>
        </div>
      </div>
    </div>
  );
});
