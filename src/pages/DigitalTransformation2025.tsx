import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const DigitalTransformation2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Digital Transformation 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Complete digital transformation solutions for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
            <p className="text-gray-600">Comprehensive digital transformation strategy</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
            <p className="text-gray-600">Automating business processes for efficiency</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-4">Digital Platforms</h3>
            <p className="text-gray-600">Modern digital platform development</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalTransformation2025;