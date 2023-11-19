import Link from 'next/link';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import {softwareVersion} from '@/constants/softwareVersion';
import {CanvasSection} from './CanvasSection';
import {SettingsSection} from './SettingsSection';

export function Generator() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <header className='flex flex-row items-start justify-between p-4'>
        <div>
          <h1 className='select-none text-2xl sm:text-3xl'>Displacement X</h1>
          <span className='text-xs text-white/50'>{`v${softwareVersion}`}</span>
        </div>
        <Link
          className='outline-none focus-visible:ring-2 focus-visible:ring-sky'
          href='https://github.com/satelllte/displacementx'
          target='_blank'
        >
          <GitHubLogoIcon
            aria-label='GitHub repository'
            width={20}
            height={20}
          />
        </Link>
      </header>
      <main className='flex flex-col gap-8 px-4 pb-4 sm:flex-row sm:gap-6'>
        <div className='relative flex-1'>
          <CanvasSection />
        </div>
        <div className='relative flex-1 lg:flex-[2]'>
          <SettingsSection />
        </div>
      </main>
    </div>
  );
}
