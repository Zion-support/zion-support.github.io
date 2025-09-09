import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = memo(() => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-white mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-blue-200 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;