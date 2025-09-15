import React from 'react';

const TechnologyInsights2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Technology Insights 2025</h1>
          <p className="text-xl text-gray-700">
            Deep insights into emerging technologies and their impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-4">Analysis</h2>
            <p className="text-gray-600">
              In-depth analysis of technology trends and developments.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold mb-4">Insights</h2>
            <p className="text-gray-600">
              Key insights from industry experts and thought leaders.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">📈</div>
            <h2 className="text-2xl font-bold mb-4">Forecasts</h2>
            <p className="text-gray-600">
              Technology forecasts and future predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInsights2025;