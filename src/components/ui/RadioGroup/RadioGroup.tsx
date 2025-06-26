import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import {useId} from 'react';

type RadioGroupProps<T> = {
  readonly 'aria-label': string;
  readonly items: Array<{
    value: T;
    label: string;
  }>;
  readonly value: T;
  readonly setValue: (value: T) => void;
};

export function RadioGroup<T extends string>({
  'aria-label': ariaLabel,
  items,
  value,
  setValue,
}: RadioGroupProps<T>) {
  return (
    <RadixRadioGroup.Root
      aria-label={ariaLabel}
      className='flex flex-col gap-1'
      value={value}
      onValueChange={setValue}
    >
      {items.map(({value, label}) => (
        <Item key={value} value={value} label={label} />
      ))}
    </RadixRadioGroup.Root>
  );
}

function Item({
  value,
  label,
}: {
  readonly value: string;
  readonly label: string;
}) {
  const id = useId();
  return (
    <div className='flex items-center'>
      <RadixRadioGroup.Item
        className='focus:shadow-sky h-4 w-4 cursor-default bg-white shadow-[0_2px_10px] shadow-black outline-hidden hover:bg-white/80 focus:shadow-[0_0_0_2px]'
        value={value}
        id={id}
      >
        <RadixRadioGroup.Indicator className="after:bg-pink relative flex h-full w-full items-center justify-center after:block after:h-3 after:w-3 after:content-['']" />
      </RadixRadioGroup.Item>
      <label className='pl-2 text-sm text-white' htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
