import {Checkbox} from '@/components/ui/Checkbox';

type CheckboxesProps<T> = {
  items: Array<{
    label: string;
    value: T;
  }>;
  values: T[];
  setValues: (values: T[]) => void;
};

export const Checkboxes = <T extends string>({
  items,
  values,
  setValues,
}: CheckboxesProps<T>) => {
  const setIsChecked = (item: T) => (value: boolean) => {
    setValues([...values.filter((i) => i !== item), ...(value ? [item] : [])]);
  };

  return items.map(({label, value}) => (
    <Checkbox
      key={value}
      label={label}
      isChecked={isChecked(values, value)}
      setIsChecked={setIsChecked(value)}
    />
  ));
};

const isChecked = <T,>(values: T[], value: T): boolean =>
  values.includes(value);
