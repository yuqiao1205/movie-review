'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='min-h-[60vh] px-4 flex items-center justify-center'>
      <div className='glass glass-border max-w-lg w-full rounded-[2.5rem] overflow-hidden'>
        <div className='px-6 py-12 text-center'>
          <div className='mx-auto mb-4 h-12 w-12 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-2xl'>
            ⚠️
          </div>
          <h1 className='text-2xl font-semibold text-current'>Something went wrong</h1>
          <p className='mt-2 text-current/70'>Please try again in a moment.</p>
          <div className='mt-6 flex items-center justify-center gap-3'>
            <button className='btn-primary px-6' onClick={() => reset()}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
