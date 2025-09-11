import React from 'react';

export const LanguageSelector: React.FC = () => {
  return (
    <div className='flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer'>
      <Globe className='w-4 h-4' />
      <span className='hidden sm:inline'>EN</span>
    </div>
  );
};
