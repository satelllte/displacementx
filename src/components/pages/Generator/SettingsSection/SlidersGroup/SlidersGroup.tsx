type SlidersGroupProps = {
  readonly children: React.ReactNode;
};

export function SlidersGroup({children}: SlidersGroupProps) {
  return (
    <div className='grid grid-cols-1 gap-2 lg:grid-cols-3'>{children}</div>
  );
}
