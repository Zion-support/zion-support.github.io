import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/', description: 'Return to homepage' },
    { name: 'Services', path: '/services', description: 'Explore our services' },
    { name: 'About', path: '/about', description: 'Learn about us' },
    { name: 'Contact', path: '/contact', description: 'Get in touch' },
    { name: 'Pricing', path: '/pricing', description: 'View pricing plans' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories' }
  ];

  const serviceCategories = [
    { name: 'AI Solutions', path: '/services/ai-autonomous-systems', description: 'AI & Machine Learning' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud & DevOps', path: '/cloud-devops', description: 'Infrastructure & Operations' },
    { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Next-gen Computing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>
        </div>

        {/* Main Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, we've got plenty of amazing content for you to explore.
        </p>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, solutions..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-blue-500 transition-all duration-200"
              >
                <div className="text-blue-400 group-hover:text-blue-300 font-medium">
                  {page.name}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">
                  {page.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Explore Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-green-500 transition-all duration-200"
              >
                <div className="text-green-400 group-hover:text-green-300 font-medium">
                  {service.name}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Contact Support */}
        <div className="mt-12 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
