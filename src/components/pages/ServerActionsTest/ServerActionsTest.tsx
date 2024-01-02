export function ServerActionsTest() {
  const act = async () => {
    'use server';
    console.log('act (begin)');
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    console.log('act (end)');
  };

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <header className='p-4'>
        <h1 className='select-none text-2xl sm:text-3xl'>
          Test server actions
        </h1>
      </header>
      <form action={act}>
        <button type='submit'>Act</button>
      </form>
    </div>
  );
}
