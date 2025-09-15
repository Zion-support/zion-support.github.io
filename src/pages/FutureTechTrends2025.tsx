import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const FutureTechTrends2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Future Tech Trends 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Explore the technology trends that will shape the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">AI-powered forecasting and trend analysis</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Global Connectivity</h3>
            <p className="text-gray-600">Worldwide internet and communication networks</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
            <p className="text-gray-600">Self-operating machines and intelligent automation</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FutureTechTrends2025;