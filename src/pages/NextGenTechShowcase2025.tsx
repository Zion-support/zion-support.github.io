import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-gray-900 mb-6"
          >
            Next-Gen Technology Showcase 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Discover the revolutionary technologies that are reshaping industries and transforming the way we work, live, and innovate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Get Started
            </a>
            <a href="/services" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Revolutionary Technologies</h2>
            <p className="text-xl text-gray-600">Cutting-edge innovations transforming industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Advanced AI systems that learn, adapt, and optimize business processes in real-time.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Neural Networks</li>
                <li>• Deep Learning</li>
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">Revolutionary computing power that solves complex problems exponentially faster.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quantum Algorithms</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Simulation</li>
                <li>• Quantum Optimization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
              <p className="text-gray-600 mb-4">Direct brain-computer interfaces that enhance human capabilities and accessibility.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Brain-Computer Interfaces</li>
                <li>• Neural Prosthetics</li>
                <li>• Cognitive Enhancement</li>
                <li>• Medical Applications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Web3 & Blockchain</h3>
              <p className="text-gray-600 mb-4">Decentralized technologies that create trust, transparency, and new economic models.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Smart Contracts</li>
                <li>• DeFi Protocols</li>
                <li>• NFT Marketplaces</li>
                <li>• DAO Governance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Biotechnology</h3>
              <p className="text-gray-600 mb-4">Life sciences innovations that revolutionize healthcare and sustainability.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Gene Editing</li>
                <li>• Synthetic Biology</li>
                <li>• Personalized Medicine</li>
                <li>• Biofuels</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600">Our proven methodology for successful technology integration</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Assessment</h3>
              <p className="text-gray-600 text-sm text-center">Evaluate current systems and identify optimization opportunities</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Planning</h3>
              <p className="text-gray-600 text-sm text-center">Develop comprehensive technology integration roadmap</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Implementation</h3>
              <p className="text-gray-600 text-sm text-center">Deploy next-generation technologies with minimal disruption</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Optimization</h3>
              <p className="text-gray-600 text-sm text-center">Continuous improvement and scaling of technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🏢</div>
                <h3 className="text-xl font-bold mb-3 text-center">Fortune 500 Transformation</h3>
                <p className="text-gray-600 text-center">
                  "Our AI transformation increased productivity by 400% and reduced operational costs by 60%. The results exceeded all expectations."
                </p>
                <div className="text-sm text-orange-600 font-semibold text-center mt-4">- CEO, Global Corporation</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-center">Healthcare Revolution</h3>
                <p className="text-gray-600 text-center">
                  "Neural interfaces helped our patients recover 3x faster. This technology is truly life-changing for medical rehabilitation."
                </p>
                <div className="text-sm text-orange-600 font-semibold text-center mt-4">- Dr. Smith, Medical Director</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-center">Space Exploration</h3>
                <p className="text-gray-600 text-center">
                  "Quantum computing enabled us to solve complex space navigation problems that were impossible with classical computers."
                </p>
                <div className="text-sm text-orange-600 font-semibold text-center mt-4">- Dr. Johnson, Space Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Embrace the Future</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the technological revolution and transform your business with our next-generation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </a>
              <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextGenTechShowcase2025;