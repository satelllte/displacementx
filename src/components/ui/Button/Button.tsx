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
  readonly size?: 'md' | 'sm';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({disabled = false, fullWidth = false, size = 'md', ...rest}, ref) => (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={clsx(
        disabled && 'opacity-80',
        fullWidth && 'w-full',
        size === 'sm' && 'text-xs',
        'inline-flex cursor-default items-center justify-center border border-white px-2 py-1 text-sm text-white outline-hidden select-none hover:bg-white/20 focus-visible:shadow-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-1 focus-visible:ring-offset-sky active:bg-white/30',
      )}
      {...rest}
    />
  ),
);

Button.displayName = 'Button';
