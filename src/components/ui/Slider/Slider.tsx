import {useId} from 'react';

type SliderProps = {
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly value: number;
  readonly setValue: (value: number) => void;
};

export function Slider({label, min, max, step, value, setValue}: SliderProps) {
  const id = useId();
  return (
    <div className='w-full select-none text-sm'>
      <div className='flex items-center justify-between'>
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{value}</output>
      </div>
      <input
        className='w-full'
        id={id}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => {
          setValue(Number(event.target.value));
        }}
      />
    </div>
  );
}
