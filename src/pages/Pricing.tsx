import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Pricing Plans
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-4">$99/month</p>
            <ul className="text-gray-300 space-y-2">
              <li>Basic AI services</li>
              <li>Email support</li>
              <li>Standard features</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Professional</h3>
            <p className="text-3xl font-bold mb-4">$299/month</p>
            <ul className="text-gray-300 space-y-2">
              <li>Advanced AI services</li>
              <li>Priority support</li>
              <li>Premium features</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <ul className="text-gray-300 space-y-2">
              <li>Custom AI solutions</li>
              <li>24/7 support</li>
              <li>All features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;