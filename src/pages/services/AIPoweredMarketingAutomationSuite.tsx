import React from 'react';

const AIPoweredMarketingAutomationSuite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            AI-Powered Marketing Automation Suite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent marketing that learns and optimizes automatically
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Platform Demo
              </button>
          </div>
        </div>
      </div>
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This AI-powered marketing automation suite is being developed. 
            Please check back soon or contact us for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredMarketingAutomationSuite;