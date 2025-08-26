import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  const popularPages = [
    { path: '/', label: 'Home', description: 'Return to our homepage' },
    { path: '/services', label: 'Services', description: 'Explore our technology solutions' },
    { path: '/about', label: 'About Us', description: 'Learn more about our company' },
    { path: '/contact', label: 'Contact', description: 'Get in touch with our team' }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to our homepage or explore our services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">404</span>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Page Not
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                {" "}Found
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track to exploring our technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Go Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">
                Popular Pages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {page.label}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-300 mb-6">
                If you're looking for something specific or need assistance, 
                our team is here to help you find what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300"
                >
                  Email Us
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
