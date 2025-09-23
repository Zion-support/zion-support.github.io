'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Atom
  Zap
  Cpu
  Database
  Shield
  Globe
  Rocket
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Sparkles,
  Activity,
  Lock,
  Infinity
} from 'lucide-react';

const QuantumComputingBreakthroughs2030Showcase = () => {
  const [activeTabsetActiveTab] = useState('overview');
  const [currentBreakthroughsetCurrentBreakthrough] = useState(0);

  const breakthroughs = [
    {
      id: 'quantum-supremacy-2030',
      title: 'Quantum Supremacy 2030',
      description: 'Achieving true quantum supremacy with 1000+ qubit systems that can solve problems impossible for classical computers.',
      features: [
        '1000+ logical qubits',
        '99.9% error correction',
        'Real-time quantum algorithms',
        'Exponential speedup'
      ],
      impact: 'Solve optimization problems in seconds that would take classical computers millennia',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      timeline: 'Q2 2030'
    },
    {
      id: 'quantum-internet',
      title: 'Quantum Internet Infrastructure',
      description: 'Global quantum communication network enabling ultra-secureinstant data transmission across the planet.',
      features: [
        'Quantum entanglement networks',
        'Unbreakable encryption',
        'Instant global communication',
        'Quantum teleportation protocols'
      ],
      impact: 'Revolutionize global communication with quantum-secure networks',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      timeline: 'Q4 2030'
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Platform',
      description: 'Revolutionary integration of quantum computing with artificial intelligence for unprecedented problem-solving capabilities.',
      features: [
        'Quantum neural networks',
        'Quantum machine learning',
        'Hybrid classical-quantum algorithms',
        'Quantum optimization engines'
      ],
      impact: 'Enable AI systems with quantum-enhanced intelligence and processing power',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      timeline: 'Q3 2030'
    },
    {
      id: 'quantum-simulation',
      title: 'Universal Quantum Simulator',
      description: 'Quantum computers that can simulate any physical system with perfect accuracyrevolutionizing scientific discovery.',
      features: [
        'Molecular simulation',
        'Material design',
        'Drug discovery',
        'Climate modeling'
      ],
      impact: 'Accelerate scientific breakthroughs across all fields',
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      timeline: 'Q1 2030'
    }
  ];

  const quantumStats = [
    { label: 'Qubit Count'value: '1,000+'icon: Cpudescription: 'Logical qubits' },
    { label: 'Error Rate'value: '0.01%'icon: Shieldescription: 'Quantum error correction' },
    { label: 'Speed Increase'value: '10^15x'icon: Zapdescription: 'vs classical computers' },
    { label: 'Global Coverage'value: '100%'icon: Globedescription: 'Quantum internet reach' }
  ];

  const applications = [
    {
      category: 'Cryptography',
      title: 'Quantum-Safe Security',
      description: 'Unbreakable encryption methods that will protect data against quantum attacks.',
      benefits: ['Post-quantum cryptography'Quantum key distribution'Unbreakable encryption'Future-proof security'],
      icon: Lock
    },
    {
      category: 'Drug Discovery',
      title: 'Molecular Simulation',
      description: 'Simulate complex molecular interactions to accelerate drug discovery and development.',
      benefits: ['Faster drug development'Precise molecular modeling'Reduced R&D costs'Personalized medicine'],
      icon: Atom
    },
    {
      category: 'Climate Science',
      title: 'Climate Modeling',
      description: 'Ultra-accurate climate models that can predict weather patterns and climate change effects.',
      benefits: ['Accurate weather prediction'Climate change modeling'Disaster prevention'Resource optimization'],
      icon: Globe
    },
    {
      category: 'Finance',
      title: 'Quantum Finance',
      description: 'Revolutionary financial modeling and risk assessment using quantum algorithms.',
      benefits: ['Portfolio optimization'Risk assessment'Fraud detection'Market prediction'],
      icon: TrendingUp
    }
  ];

  const timeline = [
    { quarter: 'Q1 2030'milestone: 'Universal Quantum Simulator Launch'status: 'completed' },
    { quarter: 'Q2 2030'milestone: 'Quantum Supremacy Achievement'status: 'in-progress' },
    { quarter: 'Q3 2030'milestone: 'Quantum-AI Fusion Platform'status: 'upcoming' },
    { quarter: 'Q4 2030'milestone: 'Global Quantum Internet'status: 'upcoming' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }6000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Infinity className="w-8 h-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Quantum Computing 2030</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Quantum Breakthroughs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the quantum revolution that will transform computingcommunicationand scientific discovery. 
              The future of quantum computing is here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Quantum Future
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Watch Quantum Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Breakthrough Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary Quantum Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the quantum technologies that will define the next decade of computing
          </p>
        </motion.div>

        {/* Breakthrough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthroughindex) => (
            <motion.div
              key={breakthrough.id}
              initial={{ opacity: 0y: 20 }}
              whileInView={{ opacity: 1y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${breakthrough.color} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group`}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <breakthrough.icon className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-2xl font-bold text-white">{breakthrough.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                    {breakthrough.timeline}
                  </span>
                </div>
                <p className="text-white/90 mb-6 text-lg">{breakthrough.description}</p>
                <div className="space-y-2 mb-6">
                  {breakthrough.features.map((featureidx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-300 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">Impact: {breakthrough.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quantum Stats */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Quantum Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quantumStats.map((statindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                whileInView={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications Section */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-12">Quantum Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((appindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <app.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                    {app.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{app.title}</h4>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefitidx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-12">Quantum Roadmap 2030</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            <div className="space-y-8">
              {timeline.map((itemindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl shadow-lg">
                      <div className="flex items-center mb-2">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          item.status === 'completed' ? 'bg-green-400' : 
                          item.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`} />
                        <span className="text-cyan-400 font-semibold text-sm">{item.quarter}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{item.milestone}</h4>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center relative z-10">
                    <Atom className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the quantum computing revolution and be part of the future that's being built today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Quantum Solutions
              <Rocket className="w-5 h-5 ml-2 inline" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Join Quantum Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthroughs2030Showcase;