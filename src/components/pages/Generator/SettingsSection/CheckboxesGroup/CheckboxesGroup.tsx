type CheckboxesGroupProps = {
  readonly title: string;
  readonly children: React.ReactNode;
};

export function CheckboxesGroup({title, children}: CheckboxesGroupProps) {
  return (
    <div>
      <div className='pb-1 text-sm'>{`${title}:`}</div>
      <div className='border-l border-l-white/80 pl-2'>{children}</div>
    </div>
  );
}
