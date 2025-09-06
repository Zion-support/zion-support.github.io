import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$99/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>Basic AI features</li>
              <li>Email support</li>
              <li>5GB storage</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$299/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>Advanced AI features</li>
              <li>Priority support</li>
              <li>50GB storage</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$999/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>Full AI suite</li>
              <li>24/7 support</li>
              <li>Unlimited storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;