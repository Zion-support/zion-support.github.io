import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-80 bg-gray-900 text-white z-40 hidden lg:block">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Navigation</h2>
        <nav className="space-y-4">
          <a href="/" className="block py-2 px-4 rounded hover:bg-gray-800">Home</a>
          <a href="/pages/RevolutionaryTech2026" className="block py-2 px-4 rounded hover:bg-gray-800">Revolutionary Tech 2026</a>
          <a href="/pages/NextGenInnovation2026" className="block py-2 px-4 rounded hover:bg-gray-800">Next-Gen Innovation</a>
          <a href="/pages/FutureTechShowcase2026" className="block py-2 px-4 rounded hover:bg-gray-800">Future Tech Showcase</a>
          <a href="/pages/SyntheticIntelligence2026" className="block py-2 px-4 rounded hover:bg-gray-800">Synthetic Intelligence</a>
          <a href="/pages/AdvancedQuantumComputing2026" className="block py-2 px-4 rounded hover:bg-gray-800">Quantum Computing</a>
          <a href="/pages/AdvancedNeuralInterface2026" className="block py-2 px-4 rounded hover:bg-gray-800">Neural Interface</a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;