import React from 'react';
import { motion } from 'framer-motion';

const TechTrends2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📈 TECH TRENDS 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Technology Trends Shaping 2026
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most impactful technology trends that will define the future of innovation, business, and society
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top Trends Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Top Technology Trends 2026</h2>
            <p className="text-xl text-gray-300">The most significant trends reshaping our digital future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Artificial General Intelligence</h3>
              <p className="text-gray-300 mb-6">
                The emergence of AGI systems that can perform any intellectual task that a human can do
              </p>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li>• Human-level reasoning</li>
                <li>• Creative problem solving</li>
                <li>• Autonomous learning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Practical quantum computers solving real-world problems with exponential speedup
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Quantum supremacy achieved</li>
                <li>• Commercial applications</li>
                <li>• Cryptography revolution</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interfaces</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces enabling thought-controlled devices and cognitive enhancement
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Non-invasive BCI</li>
                <li>• Thought control</li>
                <li>• Memory enhancement</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Climate Tech</h3>
              <p className="text-gray-300 mb-6">
                Advanced technologies for carbon capture, renewable energy, and environmental restoration
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Carbon capture systems</li>
                <li>• Fusion energy</li>
                <li>• Climate modeling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6">
                Fully autonomous vehicles, drones, and robots operating independently in complex environments
              </p>
              <ul className="text-pink-200 space-y-2 text-sm">
                <li>• Self-driving vehicles</li>
                <li>• Autonomous drones</li>
                <li>• Smart cities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Web3 & Metaverse</h3>
              <p className="text-gray-300 mb-6">
                Decentralized internet and immersive virtual worlds transforming digital interactions
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Decentralized platforms</li>
                <li>• Virtual reality worlds</li>
                <li>• Digital ownership</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Transformations</h2>
            <p className="text-xl text-gray-300">How technology trends are reshaping major industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Healthcare Revolution</h3>
                  <p className="text-gray-300">AI-powered diagnostics, personalized medicine, and robotic surgery transforming patient care</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Manufacturing 4.0</h3>
                  <p className="text-gray-300">Smart factories with AI optimization, 3D printing, and autonomous production lines</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Education Evolution</h3>
                  <p className="text-gray-300">Personalized learning with AI tutors, VR classrooms, and adaptive curriculum systems</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Financial Services</h3>
                  <p className="text-gray-300">Blockchain banking, AI trading, and decentralized finance revolutionizing money management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚗</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transportation</h3>
                  <p className="text-gray-300">Autonomous vehicles, flying cars, and hyperloop systems transforming mobility</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Agriculture</h3>
                  <p className="text-gray-300">Precision farming with AI, drones, and vertical agriculture ensuring food security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Predictions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Future Predictions</h2>
            <p className="text-xl text-gray-300">What to expect in the coming years</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">2027-2030</h3>
              <p className="text-gray-300 text-center">
                Widespread adoption of AGI, quantum computing becomes mainstream, and neural interfaces enter consumer markets
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">2030-2035</h3>
              <p className="text-gray-300 text-center">
                Mars colonization begins, fusion energy powers cities, and human-AI collaboration becomes seamless
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">2035+</h3>
              <p className="text-gray-300 text-center">
                Interstellar travel becomes possible, climate change is reversed, and humanity becomes a multi-planetary species
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-xl mb-8 opacity-90">
              Get insights on the latest technology trends and prepare your organization for the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechTrends2026;