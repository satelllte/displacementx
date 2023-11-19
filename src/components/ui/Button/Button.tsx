import clsx from 'clsx';
import {forwardRef} from 'react';

type NativeButtonProps = React.ComponentProps<'button'>;
type NativeButtonPropsToExtend = Omit<
  NativeButtonProps,
  'className' | 'type' | 'disabled' | 'aria-disabled'
>;
type ButtonProps = NativeButtonPropsToExtend & {
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({disabled, fullWidth, ...rest}, ref) => (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={clsx(
        disabled && 'opacity-80',
        fullWidth && 'w-full',
        'focus-visible:ring-sky focus-visible:ring-offset-sky inline-flex cursor-default select-none items-center justify-center border border-white px-2 py-1 text-sm text-white outline-none hover:bg-white/20 focus-visible:shadow-none focus-visible:ring-2 focus-visible:ring-offset-1 active:bg-white/30',
      )}
      {...rest}
    />
  ),
);

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
};
