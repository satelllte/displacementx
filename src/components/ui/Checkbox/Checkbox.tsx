import {useId} from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import {CheckIcon} from '@radix-ui/react-icons';

type CheckboxProps = {
  readonly label: string;
  readonly isChecked: boolean;
  readonly setIsChecked: (checked: boolean) => void;
};

export function Checkbox({label, isChecked, setIsChecked}: CheckboxProps) {
  const id = useId();
  return (
    <div className='flex items-center'>
      <RadixCheckbox.Root
        required
        checked={isChecked}
        className='flex h-4 w-4 cursor-default appearance-none items-center justify-center bg-white outline-none hover:bg-white/80 focus:outline focus:ring-1 focus:ring-sky-700/90 focus:ring-offset-1 focus:ring-offset-sky-700/90'
        id={id}
        onCheckedChange={(checked) => {
          setIsChecked(checked === 'indeterminate' ? false : checked);
        }}
      >
        <RadixCheckbox.Indicator className='text-black'>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className='select-none pl-1 text-sm text-white' htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
