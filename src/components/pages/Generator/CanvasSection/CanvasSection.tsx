'use client';
import {Button} from '@/components/ui/Button';
import {Canvas} from '@/components/ui/Canvas';
import {useRef} from 'react';

export function CanvasSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const href = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = href;
    a.download = 'displacementx-gen.png';
    a.click();
  };

  return (
    <>
      <div className='relative flex aspect-square w-full max-w-xl items-center justify-center border border-white'>
        <Canvas canvasRef={canvasRef} />
      </div>
      <div className='pt-2'>
        <Button onClick={download}>Download</Button>
      </div>
    </>
  );
}
