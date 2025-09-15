import React from 'react';

const CybersecurityFortress2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Cybersecurity Fortress 2025</h1>
          <p className="text-xl text-gray-700">
            Comprehensive cybersecurity solutions for maximum protection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold mb-4">Threat Protection</h2>
            <p className="text-gray-600">
              Advanced threat protection and detection systems.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600">
              Comprehensive data security and encryption solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔐</div>
            <h2 className="text-2xl font-bold mb-4">Access Control</h2>
            <p className="text-gray-600">
              Advanced access control and identity management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CybersecurityFortress2025;
