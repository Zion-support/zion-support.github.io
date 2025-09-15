import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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

      {/* Technologies Section */}
      <section id="technologies" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technologies</h2>
            <p className="text-xl text-orange-200">Discover the future of technology innovation</p>
          </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECHNOLOGY • 2025
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Next-Gen Tech Showcase 2025
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Explore the most advanced technologies that are reshaping our world and creating unprecedented opportunities for innovation.
            </p>
          </motion.div>
        </div>
      </section>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432

      {/* Technology Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Revolutionary Technologies</h2>
            <p className="text-xl text-gray-600">Cutting-edge innovations transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-managing systems that operate independently and adapt to changing conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Self-driving vehicles</li>
                <li>• Autonomous drones</li>
                <li>• Smart infrastructure</li>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
              </ul>
            </motion.div>

            <motion.div
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">5G & Edge Computing</h3>
              <p className="text-gray-600 mb-6">
                Ultra-fast connectivity and distributed computing for real-time applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 5G networks</li>
                <li>• Edge processing</li>
                <li>• IoT connectivity</li>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
              </ul>
            </motion.div>

            <motion.div
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Biotechnology</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary biological technologies for healthcare and sustainability.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Gene editing</li>
                <li>• Synthetic biology</li>
                <li>• Personalized medicine</li>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
              </ul>
            </motion.div>

            <motion.div
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Tech</h3>
              <p className="text-gray-600 mb-6">
                Technologies addressing climate change and environmental sustainability.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Carbon capture</li>
                <li>• Renewable energy</li>
                <li>• Green materials</li>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
              </ul>
            </motion.div>

            <motion.div
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Extended Reality</h3>
              <p className="text-gray-600 mb-6">
                Immersive technologies blending physical and digital worlds.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Virtual reality</li>
                <li>• Augmented reality</li>
                <li>• Mixed reality</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Advanced security technologies protecting digital infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Zero-trust security</li>
                <li>• AI-powered threat detection</li>
                <li>• Quantum encryption</li>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
=======

      {/* Innovation Showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Innovation Showcase</h2>
            <p className="text-xl text-gray-600">Real-world applications of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Smart Healthcare</h3>
                  <p className="text-gray-600 mb-4">AI-powered diagnostics, robotic surgery, and personalized treatment plans</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• AI medical imaging</li>
                        <li>• Robotic surgery systems</li>
                        <li>• Wearable health monitors</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Smart Manufacturing</h3>
                  <p className="text-gray-600 mb-4">Automated production lines with predictive maintenance and quality control</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Industrial IoT</li>
                    <li>• Predictive analytics</li>
                    <li>• Quality automation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Sustainable Cities</h3>
                  <p className="text-gray-600 mb-4">Smart city infrastructure with renewable energy and efficient resource management</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Smart grids</li>
                    <li>• Traffic optimization</li>
                    <li>• Waste management</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Education Revolution</h3>
                  <p className="text-gray-600 mb-4">Immersive learning experiences with AI tutors and virtual classrooms</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• VR learning environments</li>
                    <li>• AI personalized tutoring</li>
                    <li>• Interactive simulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⏰ Technology Timeline</h2>
            <p className="text-xl opacity-90">The evolution of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2023</div>
              <h3 className="text-xl font-bold mb-2">Foundation</h3>
              <p className="text-orange-100">Basic AI and IoT infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2024</div>
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-orange-100">5G deployment and edge computing</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2025</div>
              <h3 className="text-xl font-bold mb-2">Revolution</h3>
              <p className="text-orange-100">Quantum computing and neural interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2026+</div>
              <h3 className="text-xl font-bold mb-2">Transformation</h3>
              <p className="text-orange-100">Full ecosystem integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Technology Impact</h2>
            <p className="text-xl text-gray-600">Measurable benefits of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">$15T</div>
              <div className="text-lg text-gray-600">Global Market Value</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">50M</div>
              <div className="text-lg text-gray-600">Jobs Created</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-lg text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-lg text-gray-600">Adoption Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔮 Future Vision</h2>
            <p className="text-xl opacity-90">The world we're building together</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Connected World</h3>
              <p className="text-orange-100">Seamlessly connected global infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Human-AI Collaboration</h3>
              <p className="text-orange-100">Enhanced human capabilities through AI</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">♻️</div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Future</h3>
              <p className="text-orange-100">Technology-driven environmental solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Embrace the Future?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in shaping the next generation of technology and creating a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Innovation Journey
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
    </div>
  );
};

export default NextGenTechShowcase2025;