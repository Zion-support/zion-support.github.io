import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const EdgeAIandIoT2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Edge AI & IoT 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Intelligent edge computing and Internet of Things solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Edge Computing</h3>
            <p className="text-gray-600">Real-time processing at the edge of the network</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-4">IoT Devices</h3>
            <p className="text-gray-600">Connected devices with intelligent capabilities</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Smart Networks</h3>
            <p className="text-gray-600">Intelligent network infrastructure and protocols</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EdgeAIandIoT2025;