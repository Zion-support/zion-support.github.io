import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Atom,
  Cpu,
  Lock,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Database,
  Network,
  FileText,
  BarChart3,
  Globe,
  Microscope,
  Calculator,
  CircuitBoard,
  Activity
} from 'lucide-react';

const QuantumComputing2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState('quantum-ai');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumSolutions = {
    'quantum-ai': [
      {
        title: 'Quantum Machine Learning',
        description: 'Accelerate AI training and optimization using quantum computing algorithms.',
        features: ['Quantum Neural Networks', 'Optimization Algorithms', 'Faster Training', 'Enhanced Accuracy'],
        price: 'Starting at $7,999/month',
        badge: 'Revolutionary',
        icon: Brain,
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Quantum Optimization',
        description: 'Solve complex optimization problems with quantum annealing and variational algorithms.',
        features: ['Supply Chain Optimization', 'Portfolio Management', 'Route Planning', 'Resource Allocation'],
        price: 'Starting at $6,499/month',
        badge: 'Advanced',
        icon: Target,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Quantum Simulation',
        description: 'Simulate complex quantum systems for research and development applications.',
        features: ['Material Science', 'Drug Discovery', 'Chemical Reactions', 'Physical Modeling'],
        price: 'Starting at $8,999/month',
        badge: 'Research',
        icon: Microscope,
        color: 'from-green-500 to-emerald-500'
      }
    ],
    'quantum-security': [
      {
        title: 'Quantum Cryptography',
        description: 'Unbreakable encryption using quantum key distribution and post-quantum cryptography.',
        features: ['Quantum Key Distribution', 'Post-Quantum Algorithms', 'Unbreakable Security', 'Future-Proof'],
        price: 'Starting at $5,999/month',
        badge: 'Secure',
        icon: Shield,
        color: 'from-indigo-500 to-purple-500'
      },
      {
        title: 'Quantum Random Number Generation',
        description: 'True random number generation using quantum mechanics for enhanced security.',
        features: ['True Randomness', 'Cryptographic Keys', 'Security Applications', 'Gaming & Simulation'],
        price: 'Starting at $3,999/month',
        badge: 'Essential',
        icon: Lock,
        color: 'from-orange-500 to-red-500'
      },
      {
        title: 'Quantum Communication',
        description: 'Secure quantum communication networks with quantum teleportation capabilities.',
        features: ['Quantum Teleportation', 'Secure Networks', 'Quantum Internet', 'Global Connectivity'],
        price: 'Starting at $9,999/month',
        badge: 'Cutting Edge',
        icon: Network,
        color: 'from-teal-500 to-blue-500'
      }
    ],
    'quantum-computing': [
      {
        title: 'Quantum Computing as a Service',
        description: 'Access to quantum computing power through cloud-based quantum processors.',
        features: ['Cloud Quantum Access', 'Multiple Qubit Systems', 'Quantum Algorithms', 'API Integration'],
        price: 'Starting at $4,999/month',
        badge: 'Cloud',
        icon: Cloud,
        color: 'from-cyan-500 to-blue-500'
      },
      {
        title: 'Quantum Error Correction',
        description: 'Advanced error correction techniques for reliable quantum computing operations.',
        features: ['Fault Tolerance', 'Error Mitigation', 'Reliable Operations', 'Scalable Systems'],
        price: 'Starting at $6,999/month',
        badge: 'Reliability',
        icon: CircuitBoard,
        color: 'from-pink-500 to-rose-500'
      },
      {
        title: 'Quantum Algorithm Development',
        description: 'Custom quantum algorithm development for specific business applications.',
        features: ['Custom Algorithms', 'Optimization Solutions', 'Problem-Specific Design', 'Performance Tuning'],
        price: 'Starting at $10,999/month',
        badge: 'Custom',
        icon: Calculator,
        color: 'from-violet-500 to-purple-500'
      }
    ]
  };

  const capabilities = [
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational advantages impossible with classical computers',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum entanglement for secure communication and computation',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Superposition',
      description: 'Process multiple states simultaneously for exponential speedup',
      icon: Activity,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Interference',
      description: 'Use quantum interference to amplify correct solutions',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const applications = [
    {
      industry: 'Financial Services',
      solution: 'Quantum Portfolio Optimization',
      description: 'Optimize investment portfolios using quantum algorithms for maximum returns.',
      results: '40% better returns, 90% faster optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Healthcare',
      solution: 'Quantum Drug Discovery',
      description: 'Accelerate drug discovery and molecular modeling using quantum simulation.',
      results: '10x faster drug discovery, 60% cost reduction',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Manufacturing',
      solution: 'Quantum Supply Chain',
      description: 'Optimize complex supply chains using quantum optimization algorithms.',
      results: '35% cost reduction, 50% efficiency improvement',
      icon: Network,
      color: 'from-orange-500 to-red-500'
    },
    {
      industry: 'Cybersecurity',
      solution: 'Quantum Security',
      description: 'Implement quantum-resistant cryptography and secure quantum communication.',
      results: '100% quantum-resistant, zero security breaches',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Chief Scientist',
      company: 'Quantum Research Labs',
      content: 'Zion Tech Group\'s quantum computing solutions have revolutionized our research capabilities. The speed and accuracy are unprecedented.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'James Park',
      role: 'CTO',
      company: 'Financial Innovations',
      content: 'The quantum portfolio optimization has transformed our investment strategies. We\'re seeing consistent outperformance.',
      rating: 5,
      avatar: 'JP'
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'Research Director',
      company: 'MedTech Quantum',
      content: 'Their quantum drug discovery platform has accelerated our research by 10x. This is truly the future of pharmaceutical development.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Quantum Computing</h1>
              <p className="text-sm text-purple-300">Powered by Zion Tech Group</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-purple-400 transition-colors">Solutions</a>
            <a href="#capabilities" className="hover:text-purple-400 transition-colors">Capabilities</a>
            <a href="#applications" className="hover:text-purple-400 transition-colors">Applications</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Quantum Revolution</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Quantum Computing
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Unlock the power of quantum mechanics with our cutting-edge quantum computing solutions. 
            Experience exponential speedup and solve problems impossible for classical computers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '1000+', label: 'Qubits', icon: Cpu },
              { number: '99.9%', label: 'Accuracy', icon: Gauge },
              { number: '10x', label: 'Speedup', icon: Zap },
              { number: '24/7', label: 'Access', icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum computing solutions for the most challenging problems
            </p>
          </motion.div>

          {/* Solution Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'quantum-ai', name: 'Quantum AI', icon: Brain },
              { id: 'quantum-security', name: 'Quantum Security', icon: Shield },
              { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSolution(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeSolution === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumSolutions[activeSolution as keyof typeof quantumSolutions]?.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-xs font-semibold">
                    {solution.badge}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{solution.price}</span>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the fundamental principles of quantum mechanics for unprecedented computational power
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries across the globe
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${application.color} rounded-lg flex items-center justify-center`}>
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{application.industry}</h3>
                    <p className="text-purple-400 font-semibold">{application.solution}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{application.description}</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg">
                  <p className="text-green-400 font-semibold text-sm">Results: {application.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Quantum Pioneers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading researchers and companies say about our quantum solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the quantum revolution and solve problems impossible for classical computers
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Your Quantum Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Quantum Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Quantum Computing 2025</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Unlocking the power of quantum mechanics.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumComputing2025;