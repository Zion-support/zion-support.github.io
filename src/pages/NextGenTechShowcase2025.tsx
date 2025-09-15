import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECH SHOWCASE • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Next-Gen Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most comprehensive showcase of next-generation technologies that are reshaping our world
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#technologies" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
                Explore Technologies →
              </a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <section id="technologies" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technologies</h2>
            <p className="text-xl text-orange-200">Discover the future of technology innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous Systems</h3>
              <p className="text-orange-100 mb-6 text-center">
                Self-operating systems that make intelligent decisions and adapt to changing environments
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Autonomous vehicles</li>
                <li>• Smart robotics</li>
                <li>• Self-healing systems</li>
                <li>• Adaptive algorithms</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Metaverse Platforms</h3>
              <p className="text-purple-100 mb-6 text-center">
                Immersive virtual worlds with persistent digital experiences and social interaction
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Virtual reality environments</li>
                <li>• Augmented reality integration</li>
                <li>• Digital twin technology</li>
                <li>• Social VR platforms</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">☁️</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Edge Computing</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Distributed computing that brings processing power closer to data sources
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Real-time processing</li>
                <li>• Reduced latency</li>
                <li>• Bandwidth optimization</li>
                <li>• Local AI inference</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Biotechnology</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Advanced biotech solutions for healthcare, agriculture, and environmental sustainability
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Gene editing technology</li>
                <li>• Synthetic biology</li>
                <li>• Personalized medicine</li>
                <li>• Bio-manufacturing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Predictive Analytics</h3>
              <p className="text-violet-100 mb-6 text-center">
                Advanced analytics that predict future trends and optimize decision-making
              </p>
              <ul className="text-violet-200 space-y-2 text-sm">
                <li>• Machine learning models</li>
                <li>• Time series forecasting</li>
                <li>• Risk assessment</li>
                <li>• Optimization algorithms</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Green Technology</h3>
              <p className="text-rose-100 mb-6 text-center">
                Sustainable technologies that reduce environmental impact and promote clean energy
              </p>
              <ul className="text-rose-200 space-y-2 text-sm">
                <li>• Renewable energy systems</li>
                <li>• Carbon capture technology</li>
                <li>• Smart grid solutions</li>
                <li>• Sustainable materials</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-gradient-to-r from-orange-800/50 to-red-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Innovation Areas</h2>
            <p className="text-xl text-orange-200">Leading the transformation across industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
              <p className="text-orange-200">Medical technology and digital health</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
              <p className="text-orange-200">Smart factories and Industry 4.0</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-2">Transportation</h3>
              <p className="text-orange-200">Autonomous vehicles and smart mobility</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-2">Smart Cities</h3>
              <p className="text-orange-200">Connected urban infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🔮 Future Vision</h2>
            <p className="text-xl text-orange-200">Shaping the world of tomorrow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">2030</h3>
              <p className="text-orange-200">Quantum Supremacy Achieved</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-2">2027</h3>
              <p className="text-orange-200">Neural Interface Mainstream</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-2">2029</h3>
              <p className="text-orange-200">Global Metaverse Platform</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">2035</h3>
              <p className="text-orange-200">Autonomous Everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Join us in building the next generation of technology that will transform how we live, work, and interact
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Innovation Journey →
            </a>
            <a href="/pages/InnovationLanding2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              Explore All Innovations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextGenTechShowcase2025;