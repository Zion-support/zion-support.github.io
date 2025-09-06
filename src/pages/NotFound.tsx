<<<<<<< HEAD

import React from 'react';

=======
import React from 'react';
import { Link } from 'react-router-dom';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
<<<<<<< HEAD
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="btn-primary"
        >
          Go Home
        </a>
=======
        <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
export default NotFound;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
