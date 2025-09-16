import React from 'react';

const SpaceTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Space Technology Revolution 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore the future of space technology with revolutionary innovations in propulsion, 
            exploration, and space-based infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Advanced Propulsion Systems</h3>
            <p className="text-gray-600 mb-6">
              Next-generation propulsion technologies enabling faster and more efficient space travel.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Ion propulsion systems</li>
              <li>• Nuclear thermal propulsion</li>
              <li>• Antimatter propulsion research</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛰️</div>
            <h3 className="text-2xl font-bold mb-4">Space Infrastructure</h3>
            <p className="text-gray-600 mb-6">
              Building sustainable infrastructure in space for long-term exploration and habitation.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Space stations and habitats</li>
              <li>• Orbital manufacturing</li>
              <li>• Space-based solar power</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Space Research</h3>
            <p className="text-gray-600 mb-6">
              Cutting-edge research in space science, astronomy, and planetary exploration.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Exoplanet discovery</li>
              <li>• Asteroid mining</li>
              <li>• Mars colonization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SpaceTechRevolution2026;
