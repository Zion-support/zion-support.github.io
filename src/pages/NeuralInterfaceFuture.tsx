import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NeuralInterfaceFuture: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 NEURAL INTERFACE FUTURE
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Neural Interface Future
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Explore the future of neural interfaces and brain-computer communication technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brain-Computer Interface</h3>
            <p className="text-gray-600 mb-6">
              Direct communication between the brain and computers for enhanced capabilities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Thought-controlled devices</li>
              <li>• Neural signal processing</li>
              <li>• Cognitive enhancement</li>
              <li>• Medical applications</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
            <p className="text-gray-600 mb-6">
              Ultra-fast neural signal processing for instantaneous responses.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Millisecond response times</li>
              <li>• Continuous monitoring</li>
              <li>• Adaptive learning</li>
              <li>• Seamless integration</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Applications</h3>
            <p className="text-gray-600 mb-6">
              Revolutionary applications across healthcare, education, and entertainment.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Medical rehabilitation</li>
              <li>• Enhanced learning</li>
              <li>• Virtual reality</li>
              <li>• Gaming innovation</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of neural interface technology and human-computer interaction.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started →
            </a>
            <a href="/pages/NeuralInterfaceRevolution2025" className="border border-emerald-600 text-emerald-600 px-12 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
              Learn More →
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NeuralInterfaceFuture;