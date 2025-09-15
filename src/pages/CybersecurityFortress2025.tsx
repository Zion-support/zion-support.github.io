import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const CybersecurityFortress2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Cybersecurity Fortress 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Advanced cybersecurity solutions to protect your digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Threat Protection</h3>
            <p className="text-gray-600">Advanced threat detection and prevention</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4">Data Encryption</h3>
            <p className="text-gray-600">End-to-end encryption and data protection</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4">Security Monitoring</h3>
            <p className="text-gray-600">24/7 security monitoring and incident response</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CybersecurityFortress2025;