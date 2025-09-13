import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center">
      <SEO 
        title="404 - Page Not Found | Zion Tech Group"
        description="The page you are looking for could not be found."
        keywords="404, page not found, error"
      />
      
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold mb-4 text-zion-cyan">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-white">Page Not Found</h2>
        <p className="text-lg text-zion-slate-light mb-8">
          The page you are looking for could not be found.
        </p>
        <Link 
          to="/" 
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;