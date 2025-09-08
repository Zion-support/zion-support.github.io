import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center text-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-holographic-gradient bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-zion-blue-light hover:bg-zion-blue text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-blue-light focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
          >
            Go Home
          </Link>
          
          <div className="text-zion-slate-light">
            <p>Or try one of these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/services" className="text-zion-blue-light hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-zion-blue-light hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-zion-blue-light hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;