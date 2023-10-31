'use client';

import {Drawer as VaulDrawer} from 'vaul';

type DrawerProps = {
  readonly trigger: React.ReactNode;
  readonly children: React.ReactNode;
};

export function Drawer({trigger, children}: DrawerProps) {
  return (
    <VaulDrawer.Root shouldScaleBackground>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className='fixed inset-0 bg-black/40' />
        <VaulDrawer.Content className='fixed inset-x-0 bottom-0 mt-24 flex h-[85%] flex-col rounded-t-[10px] bg-zinc-950'>
          <div className='flex-1 overflow-auto rounded-t-[10px] bg-zinc-950 p-4'>
            <div className='absolute inset-x-0 top-0 mx-auto flex h-8 items-center justify-center rounded-t-[10px] bg-zinc-950/80'>
              <div className='h-1.5 w-12 shrink-0 rounded-full bg-zinc-300' />
            </div>
            <div className='mx-auto mt-8'>{children}</div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}
