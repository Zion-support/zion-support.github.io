import React from 'react';
import { SEO } from '../../components/SEO';

const Sustainability: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sustainability Solutions - Zion Tech Group"
        description="Sustainable technology solutions for environmental responsibility. Green IT, carbon-neutral cloud services, and sustainable development practices."
        keywords="sustainability, green IT, carbon neutral, environmental responsibility, sustainable technology, green cloud, eco-friendly solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Sustainability Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a sustainable future with our environmentally responsible technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Green Cloud Computing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Green Cloud Computing</h3>
              <p className="text-gray-300 mb-4">
                Carbon-neutral cloud services powered by renewable energy sources.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Renewable energy powered</li>
                <li>• Carbon offset programs</li>
                <li>• Energy-efficient infrastructure</li>
                <li>• Sustainability reporting</li>
              </ul>
            </div>

            {/* Energy Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy Management</h3>
              <p className="text-gray-300 mb-4">
                Smart energy management systems to optimize power consumption and reduce waste.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart grid integration</li>
                <li>• Energy monitoring</li>
                <li>• Load optimization</li>
                <li>• Renewable integration</li>
              </ul>
            </div>

            {/* Waste Reduction */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">♻️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Waste Reduction</h3>
              <p className="text-gray-300 mb-4">
                Digital solutions to minimize waste and promote circular economy practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Digital transformation</li>
                <li>• Paperless processes</li>
                <li>• E-waste management</li>
                <li>• Circular economy tools</li>
              </ul>
            </div>

            {/* Carbon Tracking */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Carbon Tracking</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive carbon footprint tracking and reduction strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Carbon footprint analysis</li>
                <li>• Emission monitoring</li>
                <li>• Reduction strategies</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>

            {/* Sustainable Development */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Development</h3>
              <p className="text-gray-300 mb-4">
                Technology solutions aligned with UN Sustainable Development Goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• SDG alignment</li>
                <li>• Impact measurement</li>
                <li>• Stakeholder engagement</li>
                <li>• Progress tracking</li>
              </ul>
            </div>

            {/* Green AI */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Green AI</h3>
              <p className="text-gray-300 mb-4">
                Energy-efficient AI solutions that minimize environmental impact.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Efficient algorithms</li>
                <li>• Optimized models</li>
                <li>• Green computing</li>
                <li>• Sustainable training</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Committed to a Sustainable Future
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Join us in building a more sustainable world through technology. Let's work together to reduce environmental impact and create positive change.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Sustainability Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainability;