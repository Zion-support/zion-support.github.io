import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8">
      <div className="text-center max-w-xl">
        <div className="text-7xl font-bold mb-4">404</div>
        <h1 className="text-3xl font-semibold mb-3">Page Not Found</h1>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link className="px-5 py-2 rounded bg-blue-600" to="/">Back Home</Link>
          <Link className="px-5 py-2 rounded border border-white/30" to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;