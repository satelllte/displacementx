import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';
import {useId} from 'react';

type SwitchProps = {
  readonly isOn: boolean;
  readonly setIsOn: (checked: boolean) => void;
  readonly labels?: [string, string];
};

export function Switch({labels, isOn, setIsOn}: SwitchProps) {
  const id = useId();
  return (
    <div className='flex items-center gap-2'>
      {labels && (
        <Label htmlFor={id} isActive={!isOn}>
          {labels[0]}
        </Label>
      )}
      <RadixSwitch.Root
        id={id}
        checked={isOn}
        className='relative h-4 w-8 cursor-default bg-pink/50 shadow-[0_2px_10px] shadow-black outline-none focus:shadow-[0_0_0_2px] focus:shadow-sky data-[state=checked]:bg-pink'
        onCheckedChange={setIsOn}
      >
        <RadixSwitch.Thumb className='block h-full w-4 bg-white shadow-[0_2px_2px] shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-full' />
      </RadixSwitch.Root>
      {labels && (
        <Label htmlFor={id} isActive={isOn}>
          {labels[1]}
        </Label>
      )}
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
