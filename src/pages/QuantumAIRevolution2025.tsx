import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target, Shield, Globe, ArrowRight, Star, CheckCircle } from 'lucide-react';

const QuantumAIRevolution2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Quantum AI Revolution 2025 - The Future is Here</title>
        <meta name="description" content="Experience the quantum leap in AI technology. Discover how quantum computing is revolutionizing artificial intelligence and transforming industries." />
        <meta name="keywords" content="quantum AI, quantum computing, artificial intelligence, 2025, revolution" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-semibold mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Quantum AI Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum AI
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Revolution 2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Witness the convergence of quantum computing and artificial intelligence, 
              creating unprecedented possibilities for solving complex problems and 
              accelerating innovation across all industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Quantum AI
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>

            {/* Quantum Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Industries Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Quantum Operations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve problems that were previously impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Quantum Neural Networks",
                description: "Revolutionary neural networks that leverage quantum superposition for exponential learning capabilities.",
                color: "from-cyan-400 to-blue-500"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Quantum Processing Units",
                description: "Next-generation processors that can handle complex calculations in parallel universes.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quantum Speed Optimization",
                description: "Algorithms that operate at quantum speed, solving problems in microseconds.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Quantum Targeting",
                description: "Ultra-precise targeting systems that can predict outcomes with quantum accuracy.",
                color: "from-green-400 to-teal-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quantum Security",
                description: "Unbreakable quantum encryption that protects your data across all dimensions.",
                color: "from-red-400 to-pink-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Quantum Network",
                description: "Worldwide quantum communication network for instant global connectivity.",
                color: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum AI Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum AI is transforming industries and solving humanity's greatest challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Drug Discovery & Healthcare",
                description: "Quantum AI accelerates drug discovery by simulating molecular interactions at quantum scale, leading to breakthrough treatments for diseases like cancer and Alzheimer's.",
                benefits: [
                  "1000x faster drug discovery",
                  "99.9% accuracy in molecular simulation",
                  "Reduced development costs by 80%"
                ],
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Climate Change Solutions",
                description: "Quantum AI models complex climate systems to develop sustainable solutions and optimize renewable energy distribution across the globe.",
                benefits: [
                  "Real-time climate modeling",
                  "Optimized energy distribution",
                  "Carbon footprint reduction by 90%"
                ],
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Financial Risk Analysis",
                description: "Quantum AI processes vast amounts of financial data to predict market trends and manage risk with unprecedented accuracy.",
                benefits: [
                  "Real-time risk assessment",
                  "99.9% prediction accuracy",
                  "Reduced financial losses by 95%"
                ],
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Space Exploration",
                description: "Quantum AI optimizes space missions, navigates complex gravitational fields, and discovers new celestial phenomena.",
                benefits: [
                  "Optimized space trajectories",
                  "Advanced celestial mapping",
                  "Faster interstellar communication"
                ],
                color: "from-yellow-400 to-orange-500"
              }
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${application.color} text-white mb-6`}>
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Quantum Future Awaits
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and be part of the most significant technological advancement in human history.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Quantum Journey
                <ArrowRight className="inline-block ml-2 w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Research
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIRevolution2025;