import {Drawer} from '@/components/ui/Drawer';

export default function Home() {
  return (
    <div
      className='fixed inset-0 flex flex-col'
      vaul-drawer-wrapper='' // eslint-disable-line react/no-unknown-property
    >
      <header className='px-2 py-4 md:py-6'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl'>
          Displacement X
        </h1>
      </header>
      <main className='flex flex-1 gap-2 px-2 pb-2'>
        <div className='relative flex flex-1 items-start bg-green-900 max-md:justify-center'>
          <div className='flex aspect-square w-full max-w-2xl items-center justify-center bg-green-700'>
            Canvas
          </div>
        </div>
        <div className='flex flex-1 items-center justify-center bg-pink-900 max-md:hidden'>
          <Settings />
        </div>
      </main>
      <div className='flex items-center justify-center px-2 pb-4 pt-2 md:hidden'>
        <Drawer trigger={<button type='button'>Start</button>}>
          <Settings />
        </Drawer>
      </div>
    </div>
  );
}

function Settings() {
  return <div className='bg-pink-800 p-4'>{`< Settings >`}</div>;
}
