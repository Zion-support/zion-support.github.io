import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ComprehensiveServices2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Services 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Complete technology solutions for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-4">Development Services</h3>
            <p className="text-gray-600">Custom software development and technical solutions</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
            <p className="text-gray-600">Data analysis and business intelligence services</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-4">Support & Maintenance</h3>
            <p className="text-gray-600">Ongoing support and system maintenance</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComprehensiveServices2025;