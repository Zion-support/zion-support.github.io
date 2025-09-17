import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContentDiscovery2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🔍 NEW CONTENT DISCOVERY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Discover Revolutionary Content
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our latest collection of cutting-edge AI solutions, business transformation strategies, and revolutionary technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-800 to-teal-800 rounded-2xl p-8 border border-emerald-400 border-opacity-30">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Intelligent automation solutions that revolutionize business operations and drive unprecedented efficiency.
            </p>
            <a 
              href="/ai-automation-2025"
              className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black px-6 py-3 rounded-lg font-bold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 inline-block"
            >
              Explore AI Automation
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-800 to-cyan-800 rounded-2xl p-8 border border-teal-400 border-opacity-30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
            <p className="text-gray-300 mb-6">
              Advanced neural network architectures that enable breakthrough AI capabilities and cognitive computing.
            </p>
            <a 
              href="/neural-networks-2025"
              className="bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 inline-block"
            >
              Discover Neural AI
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-800 to-blue-800 rounded-2xl p-8 border border-cyan-400 border-opacity-30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions that unlock new possibilities in AI and computational power.
            </p>
            <a 
              href="/quantum-computing-2025"
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-6 py-3 rounded-lg font-bold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 inline-block"
            >
              Learn Quantum AI
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary AI solutions to achieve unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/content-discovery-2025"
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Start Discovery
            </a>
            <a
              href="/content-showcase-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Showcase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentDiscovery2025Banner;