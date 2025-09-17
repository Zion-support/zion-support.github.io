import React, { useState } from 'react';

const QuickNavigation2026: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { name: 'Advanced AI Systems', href: '/pages/AdvancedAISystems2026', icon: '🤖', color: 'from-purple-600 to-pink-600' },
    { name: 'Space Technology', href: '/pages/SpaceTechInnovation2026', icon: '🚀', color: 'from-cyan-600 to-blue-600' },
    { name: 'Biotechnology', href: '/pages/BiotechRevolution2026', icon: '🧬', color: 'from-emerald-600 to-teal-600' },
    { name: 'Quantum Computing', href: '/pages/AdvancedQuantumComputing2026', icon: '⚡', color: 'from-orange-600 to-red-600' },
    { name: 'Neural Interfaces', href: '/pages/NeuralInterfaceRevolution2026', icon: '🧠', color: 'from-violet-600 to-purple-600' },
    { name: 'Synthetic Intelligence', href: '/pages/SyntheticIntelligence2026', icon: '🤖', color: 'from-pink-600 to-rose-600' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <div className="text-2xl">
          {isOpen ? '✕' : '🚀'}
        </div>
      </button>

      {/* Quick Navigation Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Quick Navigation</h3>
            <p className="text-sm text-gray-600">Explore our 2026 technologies</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`bg-gradient-to-r ${link.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}
                onClick={() => setIsOpen(false)}
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <div className="text-sm font-semibold">{link.name}</div>
              </a>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <a
              href="/pages/ComprehensiveTechInsights2026"
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              View All Technologies
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickNavigation2026;