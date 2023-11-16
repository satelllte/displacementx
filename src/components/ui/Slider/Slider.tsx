import {useId} from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import {type NumberDual} from '@/types';

type SliderBaseProps = {
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly step: number;
};

type SliderSoloProps = SliderBaseProps & {
  readonly dual?: false;
  readonly value: number;
  readonly setValue: (value: number) => void;
};

type SliderDualProps = SliderBaseProps & {
  readonly dual: true;
  readonly values: NumberDual;
  readonly setValues: (values: NumberDual) => void;
};

type SliderProps = SliderSoloProps | SliderDualProps;

export function Slider({label, min, max, step, ...dynamicProps}: SliderProps) {
  const labelId = useId();
  const thumb0Id = useId();
  const thumb1Id = useId();
  return (
    <div className='w-full select-none text-sm'>
      <div className='flex items-center justify-between'>
        <label id={labelId}>{label}</label>
        <div>
          {dynamicProps.dual ? (
            <>
              <output htmlFor={thumb0Id}>{dynamicProps.values[0]}</output>
              <span>{` - `}</span>
              <output htmlFor={thumb1Id}>{dynamicProps.values[1]}</output>
            </>
          ) : (
            <output htmlFor={thumb0Id}>{dynamicProps.value}</output>
          )}
        </div>
      </div>
      <RadixSlider.Root
        className='relative flex h-[20px] items-center'
        min={min}
        max={max}
        step={step}
        value={dynamicProps.dual ? dynamicProps.values : [dynamicProps.value]}
        onValueChange={(values) => {
          if (dynamicProps.dual) {
            dynamicProps.setValues([values[0], values[1]]);
          } else {
            dynamicProps.setValue(values[0]);
          }
        }}
      >
        <RadixSlider.Track className='relative block h-1 grow rounded-full bg-white'>
          <RadixSlider.Range className='absolute h-full rounded-full bg-sky-700' />
        </RadixSlider.Track>
        <Thumb id={thumb0Id} labelledBy={labelId} />
        {dynamicProps.dual && <Thumb id={thumb1Id} labelledBy={labelId} />}
      </RadixSlider.Root>
    </div>
  );
}

type ThumbProps = {
  readonly id: string;
  readonly labelledBy: string;
};

function Thumb({id, labelledBy}: ThumbProps) {
  return (
    <RadixSlider.Thumb
      id={id}
      className='block h-3 w-3 bg-white hover:shadow-[0_0_0_2px] hover:shadow-sky-700 focus:shadow-[0_0_0_2px] focus:shadow-sky-700 focus:outline-none'
      aria-labelledby={labelledBy}
    />
  );
}
