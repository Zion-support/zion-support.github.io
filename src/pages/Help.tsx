import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get help and support for our services
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guides and documentation for all our services
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600 mb-6">
                Get technical support and assistance from our expert team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h3>
              <p className="text-gray-600 mb-6">
                Find answers to frequently asked questions
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View FAQ
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;