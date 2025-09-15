import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NewShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW SHOWCASE 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            New Showcase 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our latest innovations and cutting-edge technologies that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🌟</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous AI Systems</h3>
            <p className="text-gray-600 mb-6">
              Self-managing AI systems that operate independently and continuously evolve.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Self-learning capabilities</li>
              <li>• Autonomous decision making</li>
              <li>• Self-healing architecture</li>
              <li>• Continuous optimization</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Performance</h3>
            <p className="text-gray-600 mb-6">
              Ultra-fast processing and response times for mission-critical applications.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Microsecond responses</li>
              <li>• Real-time processing</li>
              <li>• Scalable architecture</li>
              <li>• High availability</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Ready Technology</h3>
            <p className="text-gray-600 mb-6">
              Next-generation solutions designed for the challenges of tomorrow.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Quantum-ready systems</li>
              <li>• Neural interface support</li>
              <li>• Advanced analytics</li>
              <li>• Predictive intelligence</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience the Future Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be among the first to experience our revolutionary new technologies and gain a competitive advantage.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started →
            </a>
            <a href="/pages/UltimateAIRevolution2027" className="border border-purple-600 text-purple-600 px-12 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
              Explore Ultimate AI →
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewShowcase2025;