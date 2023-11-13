'use client';
import {useEffect} from 'react';

export default function WithRedirect() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = 'https://example.com/';
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <header className='flex flex-row items-center justify-between p-4'>
        <h1 className='select-none text-2xl sm:text-3xl'>
          OG test with redirect
        </h1>
      </header>
      <main className='flex flex-col gap-8 px-4 pb-4 md:flex-row md:gap-4'>
        Redirecting...
      </main>
    </div>
  );
}
