export default function WithoutRedirect() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <header className='flex flex-row items-center justify-between p-4'>
        <h1 className='select-none text-2xl sm:text-3xl'>
          OG test without redirect
        </h1>
      </header>
      <main className='flex flex-col gap-8 px-4 pb-4 md:flex-row md:gap-4'>
        Hello!
      </main>
    </div>
  );
}
