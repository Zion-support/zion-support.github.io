import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
            Our Services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and computer vision.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-semibold mb-4">Quantum Computing</h3>
              <p className="text-gray-600">
                Next-generation quantum computing solutions for complex problem-solving 
                and optimization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold mb-4">IT Services</h3>
              <p className="text-gray-600">
                Comprehensive IT infrastructure management, cloud solutions, 
                and digital transformation services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-semibold mb-4">Blockchain</h3>
              <p className="text-gray-600">
                Secure and decentralized solutions for modern businesses with 
                smart contracts and DeFi platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-semibold mb-4">Neural Interfaces</h3>
              <p className="text-gray-600">
                Revolutionary brain-computer interface technology for enhanced 
                human-machine interaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Space Tech</h3>
              <p className="text-gray-600">
                Advanced space technology solutions for satellite systems, 
                space exploration, and aerospace innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;