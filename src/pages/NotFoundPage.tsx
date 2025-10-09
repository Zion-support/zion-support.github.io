import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our AI and IT services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-9xl font-bold text-cyan-400 mb-4">404</div>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Popular Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  to="/services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  Our Services
                </Link>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  AI Services
                </Link>
                <Link
                  to="/about"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  Contact
                </Link>
                <Link
                  to="/case-studies"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  Case Studies
                </Link>
                <Link
                  to="/blog"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-slate-700"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4">Looking for something specific?</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;