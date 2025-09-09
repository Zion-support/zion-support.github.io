import React from 'react';
import { Helmet } from 'react-helmet-async';

const Pricing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, IT, and Micro SaaS services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for our technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>Basic IT support</li>
                <li>Email support</li>
                <li>Monthly reports</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-semibold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>Advanced AI solutions</li>
                <li>Priority support</li>
                <li>Weekly reports</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li>Full AI suite</li>
                <li>24/7 support</li>
                <li>Real-time monitoring</li>
                <li>Custom development</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;