import React from 'react';

const FutureTechTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Future Tech Trends 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest innovations and breakthrough technologies that will shape the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold mb-4">AI Revolution</h2>
            <p className="text-gray-300 mb-6">
              Artificial Intelligence continues to evolve with new breakthroughs in machine learning, 
              natural language processing, and autonomous systems.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Neural Networks</li>
              <li>• Quantum AI Computing</li>
              <li>• Autonomous Systems</li>
              <li>• AI-Powered Healthcare</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-4">Quantum Computing</h2>
            <p className="text-gray-300 mb-6">
              Quantum computing is reaching new milestones with practical applications 
              in cryptography, optimization, and scientific research.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Internet</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🧬</div>
            <h2 className="text-2xl font-bold mb-4">Biotechnology</h2>
            <p className="text-gray-300 mb-6">
              Revolutionary advances in biotechnology are transforming healthcare, 
              agriculture, and environmental sustainability.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Gene Editing (CRISPR)</li>
              <li>• Synthetic Biology</li>
              <li>• Personalized Medicine</li>
              <li>• Bio-Engineering</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Emerging Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Metaverse</h3>
              <p className="text-sm text-gray-300">Virtual and augmented reality convergence</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Space Tech</h3>
              <p className="text-sm text-gray-300">Commercial space exploration and colonization</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold mb-2">Green Tech</h3>
              <p className="text-sm text-gray-300">Sustainable energy and environmental solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
              <p className="text-sm text-gray-300">Decentralized systems and Web3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;