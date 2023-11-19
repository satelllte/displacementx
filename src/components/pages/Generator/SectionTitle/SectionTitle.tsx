type SectionTitleProps = {
  readonly children: string;
};

export function SectionTitle({children}: SectionTitleProps) {
  return <h2 className='pb-2 text-lg'>{children}</h2>;
}
