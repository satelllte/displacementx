import clsx from 'clsx';
import {Switch} from '@/components/ui/Switch';

type GroupCommonProps = {
  readonly title: string;
  readonly children: React.ReactNode;
};

type GroupBaseProps = GroupCommonProps & {
  withSwitch?: false;
};

type GroupWithSwitchProps = GroupCommonProps & {
  withSwitch: true;
  readonly enabled: boolean;
  readonly setEnabled: (enabled: boolean) => void;
};

type GroupProps = GroupBaseProps | GroupWithSwitchProps;

export function Group(props: GroupProps) {
  return (
    <div>
      <div className='flex flex-row items-center justify-between gap-4 pb-2'>
        <div
          className={clsx(
            'text-sm',
            props.withSwitch && !props.enabled && 'opacity-50',
          )}
        >
          {props.title}
        </div>
        {props.withSwitch && (
          <Switch isOn={props.enabled} setIsOn={props.setEnabled} />
        )}
      </div>
      <div
        className={clsx(
          'grid grid-cols-2 gap-2 border-l border-white pl-2',
          props.withSwitch &&
            !props.enabled &&
            'pointer-events-none opacity-50',
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
