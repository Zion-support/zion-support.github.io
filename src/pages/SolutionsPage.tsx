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
          <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
          <p className="text-gray-300 text-lg mb-12">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Services</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI solutions including chatbots, content generation, and data analytics.
              </p>
              <a href="/ai-services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
              <p className="text-gray-300 mb-4">
                Complete IT services including web development, mobile apps, and cloud solutions.
              </p>
              <a href="/it-services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions including penetration testing and compliance.
              </p>
              <a href="/cybersecurity" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Cloud migration, optimization, and management services for modern businesses.
              </p>
              <a href="/cloud-services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-4">
                AI-powered data analytics and business intelligence solutions.
              </p>
              <a href="/data-analytics" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">DevOps</h3>
              <p className="text-gray-300 mb-4">
                Complete DevOps solutions for continuous integration and deployment.
              </p>
              <a href="/devops" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;