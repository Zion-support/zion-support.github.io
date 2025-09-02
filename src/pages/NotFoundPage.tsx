<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
        >
          Go Back Home
        </Link>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
=======
>>>>>>> origin/main
