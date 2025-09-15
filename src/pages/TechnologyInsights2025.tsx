import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const TechnologyInsights2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Technology Insights 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Deep insights into emerging technologies and their impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4">Market Analysis</h3>
            <p className="text-gray-600">Comprehensive analysis of technology markets</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4">Trend Forecasting</h3>
            <p className="text-gray-600">Predictive insights into future technology trends</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">Innovation Insights</h3>
            <p className="text-gray-600">Key insights into technological innovation</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologyInsights2025;