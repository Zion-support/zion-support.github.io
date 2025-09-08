import React from 'react';

const AIAutonomousVentureCapitalist: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Venture Capitalist
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform investment decisions with AI-powered autonomous venture capital 
            that identifies opportunities, analyzes markets, and optimizes portfolios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Opportunity Discovery</h3>
            <p className="text-gray-300">
              AI-driven screening of startups and investment opportunities using 
              market analysis, financial modeling, and growth potential assessment.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Portfolio Optimization</h3>
            <p className="text-gray-300">
              Intelligent portfolio management that balances risk, return, and 
              diversification while adapting to market conditions and trends.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Market Intelligence</h3>
            <p className="text-gray-300">
              Real-time market analysis and trend prediction that identifies 
              emerging sectors and investment themes before they become mainstream.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Start AI Investing
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousVentureCapitalist;