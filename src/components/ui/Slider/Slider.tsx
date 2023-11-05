import {useId} from 'react';
import * as RadixSlider from '@radix-ui/react-slider';

type SliderProps = {
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly value: number;
  readonly setValue: (value: number) => void;
};

export function Slider({label, min, max, step, value, setValue}: SliderProps) {
  const labelId = useId();
  const thumbId = useId();
  return (
    <div className='w-full select-none text-sm'>
      <div className='flex items-center justify-between'>
        <label id={labelId}>{label}</label>
        <output htmlFor={thumbId}>{value}</output>
      </div>
      <RadixSlider.Root
        className='relative flex h-[20px] items-center'
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([value]) => {
          setValue(value);
        }}
      >
        <RadixSlider.Track className='relative block h-1 grow rounded-full bg-white'>
          <RadixSlider.Range className='absolute h-full rounded-full bg-pink-700' />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          id={thumbId}
          className='block h-3 w-3 bg-white hover:shadow-[0_0_0_2px] hover:shadow-pink-700 focus:shadow-[0_0_0_2px] focus:shadow-pink-700 focus:outline-none'
          aria-labelledby={labelId}
        />
      </RadixSlider.Root>
    </div>
  );
}
