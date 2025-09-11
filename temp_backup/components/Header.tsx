import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-xl font-bold text-gray-900'>
              Zion Holdings
            </Link>
          </div>
          <nav className='hidden md:flex space-x-8'>
            <Link to='/services' className='text-gray-600 hover:text-gray-900'>
              Services
            </Link>
            <Link to='/talent' className='text-gray-600 hover:text-gray-900'>
              Talent
            </Link>
            <Link to='/equipment' className='text-gray-600 hover:text-gray-900'>
              Equipment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
