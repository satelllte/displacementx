import * as RadixSwitch from '@radix-ui/react-switch';

type SwitchProps = {
  readonly isOn: boolean;
  readonly setIsOn: (checked: boolean) => void;
};

export function Switch({isOn, setIsOn}: SwitchProps) {
  return (
    <RadixSwitch.Root
      checked={isOn}
      className='relative h-4 w-8 cursor-default bg-pink/50 shadow-[0_2px_10px] shadow-black outline-hidden focus:shadow-[0_0_0_2px] focus:shadow-sky data-[state=checked]:bg-pink'
      onCheckedChange={setIsOn}
    >
      <RadixSwitch.Thumb className='block h-full w-4 bg-white shadow-[0_2px_2px] shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-full' />
    </RadixSwitch.Root>
  );
}
