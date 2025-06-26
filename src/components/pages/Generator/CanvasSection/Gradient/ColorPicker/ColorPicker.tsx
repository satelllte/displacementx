import {useCallback, useRef, useState} from 'react';
// import {useOnClickOutside} from 'usehooks-ts'; // TODO: figure out why the import doesn't work
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
  // useOnClickOutside(popoverRef, closePopover); // TODO: figure out why the import doesn't work

  return (
    <div className='flex items-center gap-2'>
      <div
        className='rounded-xs relative h-8 w-8 border border-white'
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
      <span className='w-16 text-sm text-white'>{colorHex}</span>
    </div>
  );
}
