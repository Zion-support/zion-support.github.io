import React, { useState } from 'react';
import { motion } from 'framer-motion';
const AdvancedTechInnovationHub2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const innovationCategories = {
    ai: {
      title: "Advanced AI Systems",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      innovations: [
        {
          name: "Conscious AI Networks",
          description: "Self-aware AI systems that collaborate and evolve together",
          status: "Active",
          impact: "Revolutionary"
        },
        {
          name: "Quantum AI Processing",
          description: "AI that leverages quantum computing for exponential performance",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Emotional AI Intelligence",
          description: "AI systems with genuine emotional understanding and empathy",
          status: "Development",
          impact: "Transformative"
        }
      ]
    },
    quantum: {
      title: "Quantum Technologies",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      innovations: [
        {
          name: "Quantum Internet",
          description: "Ultra-secure global quantum communication network",
          status: "Active",
          impact: "Revolutionary"
        },
        {
          name: "Quantum Computing Cloud",
          description: "Accessible quantum computing power for everyone",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Quantum AI Fusion",
          description: "Integration of quantum computing with artificial intelligence",
          status: "Development",
          impact: "Transformative"
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      innovations: [
        {
          name: "Direct Neural Upload",
          description: "Upload consciousness and memories to digital systems",
          status: "Research",
          impact: "Revolutionary"
        },
        {
          name: "Neural Enhancement",
          description: "Augment human cognitive abilities through neural interfaces",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Telepathic Communication",
          description: "Direct mind-to-mind communication via neural networks",
          status: "Development",
          impact: "Transformative"
        }
      ]
    },
    biotech: {
      title: "Biotech Revolution",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      innovations: [
        {
          name: "Genetic AI Optimization",
          description: "AI-powered genetic engineering for human enhancement",
          status: "Active",
          impact: "Revolutionary"
        },
        {
          name: "Synthetic Biology",
          description: "Creating artificial life forms for specific purposes",
          status: "Beta",
          impact: "Breakthrough"
        },
        {
          name: "Immortality Research",
          description: "Extending human lifespan through biotech breakthroughs",
          status: "Research",
          impact: "Transformative"
        }
      ]
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Advanced Tech Innovation Hub 2027
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              The epicenter of technological innovation where breakthrough discoveries shape the future of humanity. 
              Explore cutting-edge research, revolutionary prototypes, and next-generation technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Explore Innovations
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Join Research
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Innovation Tabs */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Innovation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest breakthroughs across all major technology sectors
            </p>
          </motion.div>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(innovationCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {innovationCategories[activeTab].innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    innovation.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {innovation.status}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {innovation.impact}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{innovation.name}</h3>
                <p className="text-gray-300 leading-relaxed">{innovation.description}</p>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Research Statistics */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-800/30 to-purple-800/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Research Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovations are transforming industries and creating new possibilities
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Research Projects", description: "Cutting-edge research across all technology sectors" },
              { number: "50+", label: "Breakthrough Patents", description: "Revolutionary technologies protected by patents" },
              { number: "1000+", label: "Research Scientists", description: "World-class researchers and innovators" },
              { number: "24/7", label: "Innovation Pipeline", description: "Continuous research and development cycle" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Join the Innovation Revolution
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Be part of the future. Collaborate with us on breakthrough technologies that will reshape the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Become a Researcher
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                Fund Research
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
export default AdvancedTechInnovationHub2027;