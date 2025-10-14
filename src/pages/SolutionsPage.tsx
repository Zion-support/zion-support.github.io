import React from 'react';
import { Helmet } from 'react-helmet-async';

const SolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
            <section className="mb-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="h-12 w-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
                  <p className="text-gray-300 mb-4">
                    Advanced artificial intelligence solutions for automation and optimization.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Machine Learning</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Contact us today to discuss your specific requirements.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/demo"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Request Demo
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
