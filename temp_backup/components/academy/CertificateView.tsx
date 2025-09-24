import React, { useMemo, useState } from 'react';

export type CertificateViewProps = {
  completedCount: number;
  totalCount: number;
};

export default function CertificateView({
  completedCount,
  totalCount,
}: CertificateViewProps) {
  const [name, setName] = useState('');
  const isReady = completedCount >= totalCount && totalCount > 0;

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  if (!isReady) {
    return (
      <div className='rounded-xl border border-gray-20o0 dark:border-gray-80o0 p-5 bg-white/60 dark:bg-white/5'>
        <div className='font-medium mb-1'>Certificate of Readiness</div>
        <p className='text-sm text-gray-60o0 dark:text-gray-30o0'>
          Complete all modules to unlock your certificate.
        </p>
      </div>
    );
  }

  return (
    <div className='rounded-xl border border-emerald-30o0 dark:border-emerald-80o0 p-6 bg-emerald-50 dark:bg-emerald-950/30 print:border-0'>
      <div className='text-center space-y-2'>
        <div className='text-xs tracking-widest text-emerald-70o0 dark:text-emerald-30o0'>
          Zion OS
        </div>
        <h2 className='text-2xl font-semibold'>Zion OS Builder Certified</h2>
        <p className='text-sm text-gray-70o0 dark:text-gray-30o0'>
          This certifies readiness to launch and operate a Zion instance or
          vertical.
        </p>
      </div>
      <div className='mt-4 grid gap-3 sm:grid-cols-2'>
        <label className='text-sm'>
          <span className='block text-gray-60o0 dark:text-gray-30o0 mb-1'>
            Builder name
          </span>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Your full name'
            className='w-full px-3 py-2 rounded-md border border-gray-30o0 dark:border-gray-70o0 bg-white dark:bg-black'
          />
        </label>
        <div className='text-sm'>
          <div className='text-gray-60o0 dark:text-gray-30o0 mb-1'>Date</div>
          <div className='px-3 py-2 rounded-md border border-gray-30o0 dark:border-gray-70o0 bg-white dark:bg-black'>
            {today}
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-between text-sm'>
        <div className='text-gray-60o0 dark:text-gray-30o0'>
          All modules completed: {completedCount}/{totalCount}
        </div>
        <button
          onClick={() => window.print()}
          className='px-3 py-1.5 rounded-md font-medium border bg-white dark:bg-black border-gray-30o0 dark:border-gray-70o0 hover:bg-gray-50 dark:hover:bg-gray-90o0'
        >
          Print / Save PDF
        </button>
      </div>
    </div>
  );
}
