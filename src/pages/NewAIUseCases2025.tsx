import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NewAIUseCases2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            New AI Use Cases 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover innovative AI applications transforming industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4">Healthcare AI</h3>
            <p className="text-gray-600">AI-powered diagnostics and personalized medicine</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Industrial AI</h3>
            <p className="text-gray-600">Smart manufacturing and predictive maintenance</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Environmental AI</h3>
            <p className="text-gray-600">Climate modeling and sustainability solutions</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewAIUseCases2025;