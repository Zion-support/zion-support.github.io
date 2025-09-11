import React from 'react';
import { SEO } from '../components/SEO';

const NewServicesShowcase2025: React.FC = () => {
  return (
    <>
      <SEO 
        title="New Services Showcase 2025 - Zion Tech Group"
        description="Discover our new and innovative technology services for 2025. Latest AI solutions, cloud services, and digital transformation offerings."
        keywords="new services 2025, innovative technology, AI solutions, cloud services, digital transformation, latest offerings"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              New Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Introducing our latest and most innovative technology services for the new year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Advanced AI Solutions */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Next-generation artificial intelligence services powered by the latest models and technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• GPT-4 integration services</li>
                <li>• Custom AI model training</li>
                <li>• Real-time AI decision making</li>
                <li>• AI-powered automation</li>
              </ul>
            </div>

            {/* Edge Computing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge Computing</h3>
              <p className="text-gray-300 mb-4">
                Bring computing power closer to your data sources for faster processing and reduced latency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Edge AI deployment</li>
                <li>• Real-time data processing</li>
                <li>• IoT edge solutions</li>
                <li>• 5G edge computing</li>
              </ul>
            </div>

            {/* Quantum-Ready Security */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">Q</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum-Ready Security</h3>
              <p className="text-gray-300 mb-4">
                Future-proof your security infrastructure with quantum-resistant encryption and protocols.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Post-quantum cryptography</li>
                <li>• Quantum key distribution</li>
                <li>• Advanced threat detection</li>
                <li>• Zero-trust architecture</li>
              </ul>
            </div>

            {/* Sustainable Technology */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Technology</h3>
              <p className="text-gray-300 mb-4">
                Green technology solutions that reduce environmental impact while maintaining performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Carbon-neutral cloud services</li>
                <li>• Energy-efficient computing</li>
                <li>• Sustainable data centers</li>
                <li>• Green AI algorithms</li>
              </ul>
            </div>

            {/* Metaverse Solutions */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Metaverse Solutions</h3>
              <p className="text-gray-300 mb-4">
                Build immersive virtual experiences and digital worlds for your business.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Virtual office spaces</li>
                <li>• AR/VR applications</li>
                <li>• Digital twin technology</li>
                <li>• Virtual event platforms</li>
              </ul>
            </div>

            {/* Autonomous Systems */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">A</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-4">
                Self-managing systems that operate independently with minimal human intervention.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Self-healing infrastructure</li>
                <li>• Autonomous monitoring</li>
                <li>• Predictive maintenance</li>
                <li>• Intelligent automation</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Experience the Future Today
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Don't wait for the future to arrive. Start implementing these cutting-edge solutions today and stay ahead of the competition.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Explore New Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewServicesShowcase2025;