import {useCallback, useRef, useState} from 'react';
import {useOnClickOutside} from 'usehooks-ts';
import {rgbToHex} from '@/utils/colors';
import {type ColorRGB} from '@/types';
import {RgbColorPicker} from 'react-colorful';

type ColorPickerProps = {
  readonly color: ColorRGB;
  readonly setColor: (newColor: ColorRGB) => void;
};

export function ColorPicker({color, setColor}: ColorPickerProps) {
  const colorHex = rgbToHex(color);

  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);
  useOnClickOutside(popoverRef, closePopover);

  return (
    <div className='flex items-center gap-2'>
      <div
        className='relative h-8 w-8 rounded-sm border border-white'
        style={{backgroundColor: colorHex}}
        onClick={() => {
          setPopoverOpen(true);
        }}
      >
        {popoverOpen && (
          <div ref={popoverRef} className='absolute bottom-full left-0 z-10'>
            <RgbColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </div>
      <span className='w-16 text-sm text-white/75'>{colorHex}</span>
    </div>
  );
}
