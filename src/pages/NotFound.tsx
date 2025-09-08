import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-blue-200 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
