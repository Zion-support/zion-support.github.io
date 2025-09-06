import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and technology solutions."
        keywords="404, not found, page not found"
        url="/404"
      />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;