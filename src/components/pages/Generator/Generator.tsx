import {CanvasSection} from './CanvasSection';
import {SettingsSection} from './SettingsSection';

export function Generator() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <header className='p-4'>
        <h1 className='select-none text-2xl sm:text-3xl'>Displacement X</h1>
      </header>
      <main className='flex flex-col gap-8 px-4 pb-4 md:flex-row md:gap-4'>
        <div className='relative flex-[3]'>
          <CanvasSection />
        </div>
        <div className='relative flex-[2]'>
          <SettingsSection />
        </div>
      </main>
    </div>
  );
}
