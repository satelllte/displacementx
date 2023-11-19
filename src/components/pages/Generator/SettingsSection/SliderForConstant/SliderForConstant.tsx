import {Slider} from '@/components/ui/Slider';
import {type SettingDualConstant, type SettingConstant} from '../../constants';
import {type NumberDual} from '@/types';

type SliderForConstantCommonProps = {
  readonly label: string;
};

type SliderForConstantSingleProps = {
  dual?: false;
  readonly value: number;
  readonly setValue: (value: number) => void;
  readonly constant: SettingConstant;
};

type SliderForConstantDualProps = {
  dual: true;
  readonly values: NumberDual;
  readonly setValues: (values: NumberDual) => void;
  readonly constant: SettingDualConstant;
};

type SliderForConstantProps = SliderForConstantCommonProps &
  (SliderForConstantSingleProps | SliderForConstantDualProps);

export function SliderForConstant(props: SliderForConstantProps) {
  if (props.dual) {
    const {label, constant, values, setValues} = props;
    return (
      <Slider
        dual
        label={label}
        min={constant.min}
        max={constant.max}
        step={constant.step}
        values={values}
        setValues={setValues}
      />
    );
  }

  const {label, constant, value, setValue} = props;
  return (
    <Slider
      label={label}
      min={constant.min}
      max={constant.max}
      step={constant.step}
      value={value}
      setValue={setValue}
    />
  );
}
