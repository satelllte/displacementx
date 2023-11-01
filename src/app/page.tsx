import {Button} from '@/components/ui/Button';
import {Canvas} from '@/components/ui/Canvas';
import {Drawer} from '@/components/ui/Drawer';

export default function Home() {
  return (
    <div
      className='fixed inset-0 mx-auto flex max-w-7xl flex-col'
      vaul-drawer-wrapper='' // eslint-disable-line react/no-unknown-property
    >
      <header className='px-2 py-4'>
        <h1 className='text-center text-2xl sm:text-3xl'>Displacement X</h1>
      </header>
      <main className='flex flex-1 gap-2 px-2 pb-2'>
        <div className='relative flex flex-1 flex-col justify-start'>
          <div className='relative flex aspect-square w-full max-w-xl items-center justify-center border border-white'>
            <Canvas />
          </div>
          <div className='pt-2'>
            <Button>🚧 Download 🚧</Button>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-center bg-pink-950 max-md:hidden'>
          <Settings />
        </div>
      </main>
      <div className='flex items-center justify-center px-2 pb-4 pt-2 md:hidden'>
        <Drawer trigger={<Button fullWidth>Start</Button>}>
          <Settings />
        </Drawer>
      </div>
    </div>
  );
}

function Settings() {
  return <>🚧 Settings 🚧</>;
}
