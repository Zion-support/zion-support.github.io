import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Rocket, 
  Cpu, 
  Brain,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Eye,
  Microscope,
  Network,
  Database,
  Zap,
  Shield,
  Globe,
  Layers,
  Workflow
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const InnovationShowcase2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = [
    {
      icon: Brain,
      title: 'Autonomous AI Systems',
      description: 'Self-managing AI that operates without human intervention',
      details: 'Revolutionary AI systems that can learn, adapt, and make decisions autonomously, transforming how businesses operate.',
      color: 'from-purple-500 to-pink-500',
      impact: 'Revolutionary',
      status: 'Live Now',
      applications: ['Business Operations', 'Customer Service', 'Data Analysis', 'Process Automation']
    },
    {
      icon: Cpu,
      title: 'Quantum-Enhanced Computing',
      description: 'Quantum computing power for complex problem solving',
      details: 'Leverage quantum computing capabilities to solve previously impossible problems and accelerate innovation.',
      color: 'from-blue-500 to-cyan-500',
      impact: 'Game-changing',
      status: 'Beta Testing',
      applications: ['Cryptography', 'Optimization', 'Simulation', 'Machine Learning']
    },
    {
      icon: Network,
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for seamless interaction',
      details: 'Breakthrough technology that enables direct communication between the human brain and computer systems.',
      color: 'from-green-500 to-emerald-500',
      impact: 'Transformative',
      status: 'In Development',
      applications: ['Medical Treatment', 'Enhanced Cognition', 'Accessibility', 'Gaming']
    },
    {
      icon: Layers,
      title: 'Digital Twin Ecosystems',
      description: 'Complete digital replicas of physical systems',
      details: 'Create comprehensive digital twins that mirror real-world systems for optimization and predictive analysis.',
      color: 'from-orange-500 to-red-500',
      impact: 'Industry-changing',
      status: 'Coming Soon',
      applications: ['Manufacturing', 'Healthcare', 'Smart Cities', 'Supply Chain']
    }
  ];

  const breakthroughTechnologies = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      technologies: [
        'GPT-5 and Beyond',
        'Multimodal AI Systems',
        'Autonomous Decision Making',
        'Emotional Intelligence AI'
      ],
      timeline: '2025-2026',
      description: 'Next-generation AI that understands context, emotions, and complex human needs'
    },
    {
      category: 'Quantum Computing',
      icon: Cpu,
      technologies: [
        'Quantum Supremacy',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulation'
      ],
      timeline: '2025-2027',
      description: 'Quantum computers solving problems that would take classical computers millennia'
    },
    {
      category: 'Biotechnology',
      icon: Microscope,
      technologies: [
        'Gene Editing 2.0',
        'Synthetic Biology',
        'Personalized Medicine',
        'Longevity Research'
      ],
      timeline: '2025-2028',
      description: 'Revolutionary biotech advances extending human healthspan and capabilities'
    },
    {
      category: 'Space Technology',
      icon: Rocket,
      technologies: [
        'Space Manufacturing',
        'Mars Colonization',
        'Asteroid Mining',
        'Space Tourism'
      ],
      timeline: '2025-2030',
      description: 'Making space accessible and profitable for humanity'
    }
  ];

  const innovationImpact = [
    {
      sector: 'Healthcare',
      icon: Shield,
      innovations: [
        'AI-powered diagnostics with 99% accuracy',
        'Personalized treatment plans',
        'Real-time health monitoring',
        'Predictive disease prevention'
      ],
      impact: '50% reduction in medical errors',
      timeline: '2025-2026'
    },
    {
      sector: 'Education',
      icon: Users,
      innovations: [
        'Personalized learning AI tutors',
        'Virtual reality classrooms',
        'Adaptive curriculum design',
        'Global knowledge sharing'
      ],
      impact: '300% improvement in learning outcomes',
      timeline: '2025-2027'
    },
    {
      sector: 'Transportation',
      icon: Globe,
      innovations: [
        'Fully autonomous vehicles',
        'Hyperloop transportation',
        'Flying cars and drones',
        'Smart traffic optimization'
      ],
      impact: '90% reduction in traffic accidents',
      timeline: '2025-2028'
    },
    {
      sector: 'Energy',
      icon: Zap,
      innovations: [
        'Fusion power generation',
        'Wireless energy transmission',
        'Smart grid optimization',
        'Carbon capture technology'
      ],
      impact: '100% renewable energy systems',
      timeline: '2025-2030'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
              🚀 INNOVATION SHOWCASE 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Innovation Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover the groundbreaking innovations that are reshaping our world. 
              From AI to quantum computing, explore the technologies that will define the future.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Innovations
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Innovation Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Featured Innovations</h2>
            <p className="text-xl text-gray-300">Click on each innovation to explore in detail</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeInnovation === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className={`bg-gradient-to-r ${innovation.color} p-6 rounded-xl text-white text-center border-2 ${
                  activeInnovation === index ? 'border-white shadow-2xl' : 'border-transparent'
                }`}>
                  <innovation.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                  <p className="text-sm opacity-90">{innovation.description}</p>
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <span className="bg-white/20 px-2 py-1 rounded-full">{innovation.impact}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">{innovation.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Innovation Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInnovation}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${innovations[activeInnovation].color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {React.createElement(innovations[activeInnovation].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{innovations[activeInnovation].title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{innovations[activeInnovation].details}</p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Impact:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                        {innovations[activeInnovation].impact}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Status:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-semibold">
                        {innovations[activeInnovation].status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {innovations[activeInnovation].applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Breakthrough Technologies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">⚡ Breakthrough Technologies</h2>
            <p className="text-xl text-gray-300">The technologies that will define the next decade</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {breakthroughTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tech.category}</h3>
                    <p className="text-sm text-gray-400">Timeline: {tech.timeline}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{tech.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {tech.technologies.map((technology, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">{technology}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Impact by Sector */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏭 Innovation Impact by Sector</h2>
            <p className="text-xl text-gray-300">How innovations are transforming major industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovationImpact.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{sector.sector}</h3>
                    <p className="text-sm text-gray-400">Timeline: {sector.timeline}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Innovations:</h4>
                  <ul className="space-y-2">
                    {sector.innovations.map((innovation, innovationIndex) => (
                      <li key={innovationIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{innovation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Expected Impact:</h4>
                  <p className="text-purple-200 font-semibold">{sector.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$2.5T</div>
            <div className="text-gray-300">Market Opportunity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Innovation Pipeline</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Be Part of the Innovation Revolution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future with cutting-edge innovations. 
            Partner with Zion Tech Group to implement breakthrough technologies that will transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovation Journey
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors text-lg">
              Explore Partnerships
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InnovationShowcase2025;