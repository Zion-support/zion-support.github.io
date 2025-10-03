import React from 'react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServices: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Comprehensive Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and technology services designed to transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of AI-powered solutions and technology services designed to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-6">
                Custom AI implementations including machine learning models, natural language processing, and computer vision.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud infrastructure and deployment solutions for modern applications and services.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps Automation</li>
                <li>• Monitoring & Analytics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-6">
                Bespoke software development solutions tailored to your specific business requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• API Development</li>
                <li>• System Integration</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our comprehensive services can help transform your business
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServices;