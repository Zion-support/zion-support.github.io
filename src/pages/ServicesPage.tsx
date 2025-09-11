import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive services including AI automation, micro SaaS development, enterprise IT solutions, and digital transformation." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business grow, innovate, and stay competitive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">AI-Powered Automation</h2>
              <p className="text-gray-600 mb-4">Leverage artificial intelligence to automate tasks and improve efficiency.</p>
              <ul className="space-y-2">
                <li>• Machine Learning Models</li>
                <li>• Process Automation</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Micro SaaS Development</h2>
              <p className="text-gray-600 mb-4">Build focused, scalable software solutions for specific business problems.</p>
              <ul className="space-y-2">
                <li>• Custom SaaS Applications</li>
                <li>• API Development</li>
                <li>• Cloud Integration</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Enterprise IT Solutions</h2>
              <p className="text-gray-600 mb-4">Comprehensive IT services for your business infrastructure needs.</p>
              <ul className="space-y-2">
                <li>• Cloud Migration</li>
                <li>• Security Implementation</li>
                <li>• System Integration</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Digital Transformation</h2>
              <p className="text-gray-600 mb-4">Transform your business with modern technology solutions.</p>
              <ul className="space-y-2">
                <li>• Process Optimization</li>
                <li>• Technology Strategy</li>
                <li>• Change Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;