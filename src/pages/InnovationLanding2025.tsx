import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const InnovationLanding2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Innovation 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover the latest innovations and breakthrough technologies shaping the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Revolutionary Technologies</h3>
            <p className="text-gray-600">Explore cutting-edge innovations that are transforming industries</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">Innovation Solutions</h3>
            <p className="text-gray-600">Discover how our solutions can drive your business forward</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
            <p className="text-gray-600">See what the future holds with our innovative approach</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InnovationLanding2025;