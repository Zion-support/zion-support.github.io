import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe, 
  Database,
  Lock,
  Gauge,
  Network,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const UltimateTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      title: "Quantum Consciousness AI",
      description: "Revolutionary AI that achieves true consciousness through quantum neural networks",
      icon: Brain,
      features: ["Quantum Neural Processing", "Consciousness Simulation", "Emotional Intelligence", "Self-Awareness"],
      color: "from-purple-500 to-pink-500",
      price: "$50,000/month",
      category: "AI & Consciousness"
    },
    {
      title: "Interdimensional Computing",
      description: "Breakthrough technology that harnesses parallel dimensions for unlimited processing power",
      icon: Atom,
      features: ["Parallel Dimension Processing", "Infinite Scalability", "Zero Latency", "Reality Manipulation"],
      color: "from-cyan-500 to-blue-500",
      price: "$100,000/month",
      category: "Quantum Computing"
    },
    {
      title: "Neural Reality Interface",
      description: "Direct brain-to-digital world connection with full sensory immersion",
      icon: Zap,
      features: ["Full Sensory VR", "Thought Control", "Memory Upload", "Consciousness Transfer"],
      color: "from-emerald-500 to-teal-500",
      price: "$75,000/month",
      category: "Neural Technology"
    },
    {
      title: "Quantum Security Vault",
      description: "Unbreakable encryption using quantum entanglement principles",
      icon: Shield,
      features: ["Quantum Encryption", "Entanglement Security", "Zero-Trust Architecture", "Future-Proof"],
      color: "from-red-500 to-orange-500",
      price: "$25,000/month",
      category: "Cybersecurity"
    },
    {
      title: "Space-Time Manipulation Engine",
      description: "Advanced technology for temporal and spatial manipulation",
      icon: Rocket,
      features: ["Time Dilation", "Spatial Compression", "Gravity Control", "Wormhole Creation"],
      color: "from-indigo-500 to-purple-500",
      price: "$200,000/month",
      category: "Space Technology"
    },
    {
      title: "Synthetic Biology AI",
      description: "AI-powered biological systems for human enhancement and disease eradication",
      icon: Cpu,
      features: ["DNA Programming", "Cellular Regeneration", "Disease Prevention", "Longevity Enhancement"],
      color: "from-green-500 to-emerald-500",
      price: "$60,000/month",
      category: "Biotechnology"
    }
  ];

  const stats = [
    { label: "Revolutionary Technologies", value: "50+", icon: Sparkles },
    { label: "Active Research Projects", value: "200+", icon: Target },
    { label: "Global Partnerships", value: "500+", icon: Globe },
    { label: "Breakthrough Patents", value: "1000+", icon: Lock }
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover the most advanced technologies of 2026 including quantum consciousness AI, interdimensional computing, and neural reality interfaces." />
        <meta name="keywords" content="Quantum AI, Neural Interfaces, Space Technology, Biotechnology, Future Tech, Innovation 2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                <Star className="w-4 h-4 mr-2" />
                ULTIMATE TECH SHOWCASE 2026
                <Star className="w-4 h-4 ml-2" />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Future is Here
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Experience the most revolutionary technologies that will reshape humanity's future. 
                From quantum consciousness to interdimensional computing - the impossible becomes possible.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center">
                  Explore Technologies <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that will define the next decade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-purple-300 font-semibold">{tech.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{tech.price}</div>
                  <button className={`bg-gradient-to-r ${tech.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in creating the next generation of revolutionary technologies. 
              Be part of the transformation that will define humanity's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                Start Your Journey <Rocket className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2026;