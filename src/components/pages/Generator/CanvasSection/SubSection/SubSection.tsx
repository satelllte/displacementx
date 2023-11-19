import clsx from 'clsx';

export function SubSection({
  disabled,
  title,
  children,
}: {
  readonly disabled?: boolean;
  readonly title: string;
  readonly children: React.ReactNode;
}) {
  return (
    <div className={clsx('pt-4', disabled && 'pointer-events-none opacity-50')}>
      <h2 className='pb-1'>{title}</h2>
      {children}
    </div>
  );
}
