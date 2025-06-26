import Link from 'next/link';
import {softwareVersion} from '@/constants/softwareVersion';
import {CanvasSection} from './CanvasSection';
import {SettingsSection} from './SettingsSection';

export function Generator() {
  return (
    <div className='mx-auto max-w-(--breakpoint-2xl)'>
      <header className='p-4'>
        <h1 className='select-none text-2xl sm:text-3xl'>Displacement X</h1>
        <span className='text-xs text-white/50'>{`v${softwareVersion}`}</span>
      </header>
      <main className='flex flex-col gap-8 px-4 pb-4 sm:flex-row sm:gap-6'>
        <div className='relative flex-1'>
          <CanvasSection />
        </div>
        <div className='relative flex-1 lg:flex-2'>
          <SettingsSection />
        </div>
      </main>
      <footer className='p-4 pt-12 text-sm'>
        <FooterRow>
          <span>
            Created by{' '}
            <FooterLink href='https://github.com/satelllte'>
              @satelllte
            </FooterLink>
          </span>
        </FooterRow>
        <FooterRow>
          <FooterLink href='https://github.com/satelllte/displacementx'>
            GitHub
          </FooterLink>
          <FooterLink href='https://github.com/satelllte/displacementx/releases'>
            Version History
          </FooterLink>
        </FooterRow>
      </footer>
    </div>
  );
}

function FooterRow({children}: {readonly children: React.ReactNode}) {
  return <div className='flex items-center gap-2'>{children}</div>;
}

function FooterLink({
  href,
  children,
}: {
  readonly href: string;
  readonly children: string;
}) {
  return (
    <Link
      className='underline focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky'
      target='_blank'
      href={href}
    >
      {children}
    </Link>
  );
}
