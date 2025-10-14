import React from 'react';
import { Helmet } from 'react-helmet-async';

const SolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Our Solutions</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-4">Advanced AI solutions to automate and optimize your business processes.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Predictive Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">Scalable and secure cloud solutions for modern businesses.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Cloud Migration</li>
                  <li>• Container Orchestration</li>
                  <li>• Serverless Architecture</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">Comprehensive security solutions to protect your digital assets.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Threat Detection</li>
                  <li>• Data Encryption</li>
                  <li>• Compliance Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;