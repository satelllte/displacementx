export default function Home() {
  return (
    <div className='absolute inset-0 flex flex-col'>
      <header className='px-2 py-4 md:py-6'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl'>
          Displacement X
        </h1>
      </header>
      <main className='flex flex-1 gap-2 px-2 pb-2'>
        <div className='flex flex-1 items-center justify-center bg-green-900'>
          1
        </div>
        <div className='flex flex-1 items-center justify-center bg-pink-900'>
          2
        </div>
      </main>
    </div>
  );
}
