import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Pricing</h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the perfect plan for your business needs.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg">
              Flexible pricing options designed to scale with your business 
              and provide maximum value for your investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;