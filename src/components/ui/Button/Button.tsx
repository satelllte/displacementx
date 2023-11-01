import clsx from 'clsx';
import {forwardRef} from 'react';

type NativeButtonProps = React.ComponentProps<'button'>;
type NativeButtonPropsToExtend = Omit<NativeButtonProps, 'className' | 'type'>;
type ButtonProps = NativeButtonPropsToExtend & {
  readonly fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({fullWidth, ...rest}, ref) => (
    <button
      ref={ref}
      type='button'
      className={clsx(
        fullWidth && 'w-full',
        'inline-flex cursor-default items-center justify-center border border-white px-2 py-1 text-sm text-white hover:bg-zinc-800 focus:outline-none focus:ring-blue-500 focus:ring-offset-0 focus-visible:ring-2 active:bg-zinc-700',
      )}
      {...rest}
    />
  ),
);

Button.displayName = 'Button';

Button.defaultProps = {
  fullWidth: false,
};
