type CheckboxesGroupProps = {
  readonly title: string;
  readonly extra?: string;
  readonly children: React.ReactNode;
};

export function CheckboxesGroup({
  title,
  extra,
  children,
}: CheckboxesGroupProps) {
  return (
    <div>
      <div className='pb-1 text-sm'>{`${title}:`}</div>
      {extra && <div className='pb-1 text-xs text-pink'>{`(${extra})`}</div>}
      <div className='flex flex-wrap gap-2'>{children}</div>
    </div>
  );
}
