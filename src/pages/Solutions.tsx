import React from 'react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.
            </p>
            <Link to="/services/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-6">
              Complete IT infrastructure management, cloud migration, and cybersecurity solutions.
            </p>
            <Link to="/services/it-services" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-6">
              Scalable software-as-a-service solutions tailored to your specific business needs.
            </p>
            <Link to="/services/micro-saas" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;