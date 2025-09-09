import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold">Looking for something specific?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Try searching for what you need or browse our main sections:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/services"
              className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors text-sm"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-gray-400 text-sm">
          <p>
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;