import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const WhitePapers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              In-depth research and insights on technology trends
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  The Future of AI in Business
                </h3>
                <p className="text-gray-500 mb-4">January 2025</p>
                <p className="text-gray-600 mb-6">
                  An in-depth analysis of how artificial intelligence is transforming 
                  business operations and what companies need to know to stay competitive.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">15 min read</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Download PDF
                    <Download className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Cloud Security Best Practices
                </h3>
                <p className="text-gray-500 mb-4">December 2024</p>
                <p className="text-gray-600 mb-6">
                  A comprehensive guide to securing cloud infrastructure and protecting 
                  sensitive data in the cloud environment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">12 min read</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Download PDF
                    <Download className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Micro SaaS: The Future of Software
                </h3>
                <p className="text-gray-500 mb-4">November 2024</p>
                <p className="text-gray-600 mb-6">
                  Exploring the rise of micro SaaS solutions and how they're changing 
                  the software industry landscape.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">18 min read</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Download PDF
                    <Download className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Want More Insights?
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive the latest white papers 
                  and technology insights directly in your inbox.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Subscribe Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePapers;