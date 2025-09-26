import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'>
      <div className='text-center max-w-2xl mx-auto px-6'>
        {/* 404 Illustration */}
        <div className='mb-8'>
          <div className='text-9xl font-bold text-blue-600 mb-4'>404</div>
          <div className='w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6'>
            <Search className='w-12 h-12 text-blue-600' />
          </div>
        </div>

        {/* Error Message */}
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Page Not Found
        </h1>
        <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
          Oops! The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, even the best explorers sometimes take a wrong turn.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2'
          >
            <Home className='w-5 h-5' />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2'
          >
            <ArrowLeft className='w-5 h-5' />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <p className='text-gray-600 mb-4'>Or explore our main sections:</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/services'
              className='text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'
            >
              Services
            </Link>
            <span className='text-gray-400'>•</span>
            <Link
              to='/contact'
              className='text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
