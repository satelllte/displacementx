import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';
import {useId} from 'react';

type SwitchProps = {
  readonly textOff: string;
  readonly textOn: string;
  readonly isOn: boolean;
  readonly setIsOn: (checked: boolean) => void;
};

export function Switch({textOff, textOn, isOn, setIsOn}: SwitchProps) {
  const id = useId();
  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor={id} isActive={!isOn}>
        {textOff}
      </Label>
      <RadixSwitch.Root
        id={id}
        checked={isOn}
        className='relative h-4 w-8 cursor-default bg-sky-700 shadow-[0_2px_10px] shadow-black outline-none focus:shadow-[0_0_0_2px] focus:shadow-sky-700/50 data-[state=checked]:bg-red-700 focus:data-[state=checked]:shadow-red-700/50'
        onCheckedChange={setIsOn}
      >
        <RadixSwitch.Thumb className='block h-full w-4 bg-white shadow-[0_2px_2px] shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-full' />
      </RadixSwitch.Root>
      <Label htmlFor={id} isActive={isOn}>
        {textOn}
      </Label>
    </div>
  );
}

type LabelProps = {
  readonly htmlFor: string;
  readonly children: string;
  readonly isActive: boolean;
};

function Label({htmlFor, children, isActive}: LabelProps) {
  return (
    <label
      className={clsx(
        'text-sm leading-none',
        isActive ? 'text-white' : 'text-white/50',
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
