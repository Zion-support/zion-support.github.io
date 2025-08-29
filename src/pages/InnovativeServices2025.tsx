import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Cloud, 
  Bot, 
  Database, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Workflow,
  Lock,
  BarChart3,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';

const InnovativeServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovation, setSelectedInnovation] = useState<string | null>(null);

  const innovationCategories = [
    { id: 'all', name: 'All Innovations', icon: <Rocket className="w-6 h-6" /> },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-6 h-6" /> },
    { id: 'edge', name: 'Edge Computing', icon: <Server className="w-6 h-6" /> },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Globe className="w-6 h-6" /> },
    { id: 'biotech', name: 'Biotechnology', icon: <Zap className="w-6 h-6" /> }
  ];

  const innovativeServices = [
    {
      id: 'quantum-ai',
      name: 'Quantum AI Platform',
      category: 'quantum',
      description: 'Revolutionary quantum computing platform that accelerates AI training by 1000x',
      features: [
        'Quantum neural networks',
        'Superposition-based algorithms',
        'Entanglement optimization',
        'Quantum error correction'
      ],
      benefits: [
        '1000x faster AI training',
        'Unprecedented accuracy',
        'Breakthrough in complex problems',
        'Future-proof technology'
      ],
      status: 'Beta Testing',
      launchDate: 'Q2 2025',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'edge-intelligence',
      name: 'Edge Intelligence Network',
      category: 'edge',
      description: 'Distributed AI processing at the network edge for real-time decision making',
      features: [
        'Edge AI processing',
        'Real-time analytics',
        'Low-latency response',
        'Distributed learning'
      ],
      benefits: [
        'Sub-10ms response time',
        'Reduced bandwidth usage',
        'Enhanced privacy',
        'Scalable architecture'
      ],
      status: 'Available',
      launchDate: 'Q1 2025',
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'autonomous-ai',
      name: 'Autonomous AI Agents',
      category: 'ai-ml',
      description: 'Self-learning AI agents that can operate independently and make complex decisions',
      features: [
        'Autonomous decision making',
        'Continuous learning',
        'Multi-agent collaboration',
        'Ethical AI framework'
      ],
      benefits: [
        'Reduced human intervention',
        '24/7 operation',
        'Adaptive problem solving',
        'Scalable automation'
      ],
      status: 'Early Access',
      launchDate: 'Q3 2025',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'quantum-security',
      name: 'Quantum-Safe Security',
      category: 'quantum',
      description: 'Post-quantum cryptography solutions that protect against quantum attacks',
      features: [
        'Quantum-resistant algorithms',
        'Lattice-based cryptography',
        'Hash-based signatures',
        'Quantum key distribution'
      ],
      benefits: [
        'Future-proof security',
        'Quantum attack resistance',
        'Compliance ready',
        'Zero-trust architecture'
      ],
      status: 'Available',
      launchDate: 'Q1 2025',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'biotech-ai',
      name: 'Biotech AI Platform',
      category: 'biotech',
      description: 'AI-powered biotechnology platform for drug discovery and genetic research',
      features: [
        'Drug discovery AI',
        'Genetic sequence analysis',
        'Protein folding prediction',
        'Clinical trial optimization'
      ],
      benefits: [
        'Faster drug development',
        'Precision medicine',
        'Reduced research costs',
        'Breakthrough discoveries'
      ],
      status: 'Research Phase',
      launchDate: 'Q4 2025',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'web3-platform',
      name: 'Web3 Development Platform',
      category: 'blockchain',
      description: 'Comprehensive platform for building decentralized applications and smart contracts',
      features: [
        'Smart contract templates',
        'DeFi protocol builder',
        'NFT marketplace tools',
        'Cross-chain integration'
      ],
      benefits: [
        'Rapid dApp development',
        'Multi-chain support',
        'Security best practices',
        'Developer-friendly tools'
      ],
      status: 'Available',
      launchDate: 'Q1 2025',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const upcomingInnovations = [
    {
      name: 'Neural Interface Platform',
      description: 'Direct brain-computer interface for enhanced human-AI collaboration',
      timeline: 'Q4 2025',
      impact: 'Revolutionary'
    },
    {
      name: 'Quantum Internet',
      description: 'Secure quantum communication network spanning the globe',
      timeline: '2026',
      impact: 'Transformative'
    },
    {
      name: 'Synthetic Biology AI',
      description: 'AI-driven synthetic biology for sustainable materials and energy',
      timeline: 'Q2 2026',
      impact: 'Breakthrough'
    }
  ];

  const innovationMetrics = [
    { label: 'Patents Filed', value: '47', change: '+12' },
    { label: 'Research Papers', value: '156', change: '+23' },
    { label: 'Industry Awards', value: '23', change: '+8' },
    { label: 'Client Success Rate', value: '98%', change: '+5%' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? innovativeServices 
    : innovativeServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge innovative services for 2025, including quantum AI, edge computing, autonomous agents, and breakthrough technologies."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovation 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our breakthrough innovations in quantum computing, 
              edge AI, autonomous systems, and cutting-edge biotechnology.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Innovation Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400 mb-2">{metric.label}</div>
                <div className="flex items-center justify-center text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {innovationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Breakthrough Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our revolutionary services that are reshaping the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedInnovation(selectedInnovation === service.id ? null : service.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                      service.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                      service.status === 'Early Access' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {service.status}
                    </span>
                    <div className="text-sm text-gray-400 mt-1">Launch: {service.launchDate}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {selectedInnovation === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </motion.div>
                )}
                
                {selectedInnovation !== service.id && (
                  <div className="text-center">
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200">
                      Click to expand details
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Innovations */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a glimpse of the revolutionary technologies we're developing for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{innovation.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    innovation.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                    innovation.impact === 'Transformative' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6">{innovation.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Timeline:</span> {innovation.timeline}
                  </div>
                  <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-all duration-300 border border-slate-600">
                    Join Waitlist
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Innovation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we transform ideas into breakthrough technologies that shape the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Deep research into emerging technologies and market needs',
                icon: <Lightbulb className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Prototype Development',
                description: 'Rapid prototyping and proof-of-concept development',
                icon: <Cpu className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Testing & Validation',
                description: 'Rigorous testing and validation with real-world scenarios',
                icon: <Target className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Launch & Scale',
                description: 'Strategic launch and scalable deployment to market',
                icon: <Rocket className="w-8 h-8" />
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {process.icon}
                </div>
                
                <div className="text-2xl font-bold text-cyan-400 mb-2">{process.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in shaping the future of technology. Get early access to our most 
              innovative services and be among the first to experience breakthrough technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServices2025;