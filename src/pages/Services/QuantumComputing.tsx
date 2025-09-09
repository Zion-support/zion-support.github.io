import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  Database, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Cpu,
  Network
} from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const services = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Develop and optimize quantum algorithms for complex computational problems.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research, drug discovery, and materials science.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Implement quantum-safe encryption and secure communication protocols.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Database,
      title: 'Quantum Machine Learning',
      description: 'Leverage quantum computing for advanced AI and machine learning applications.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Financial Modeling',
      description: 'Optimize portfolio management and risk assessment with quantum algorithms.',
      icon: BarChart3,
      features: ['Portfolio optimization', 'Risk analysis', 'Option pricing', 'Market simulation']
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research with quantum molecular simulations.',
      icon: Package,
      features: ['Molecular modeling', 'Protein folding', 'Drug interaction', 'Chemical synthesis']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Solve complex logistics problems with quantum optimization algorithms.',
      icon: Network,
      features: ['Route optimization', 'Inventory management', 'Resource allocation', 'Scheduling']
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced climate simulations for environmental research and prediction.',
      icon: Globe,
      features: ['Weather prediction', 'Climate analysis', 'Environmental modeling', 'Risk assessment']
    }
  ];

  const technologies = [
    'Quantum Gates',
    'Quantum Circuits',
    'Quantum Error Correction',
    'Quantum Entanglement',
    'Superposition States',
    'Quantum Annealing',
    'Quantum Machine Learning',
    'Post-Quantum Cryptography'
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Solve problems that would take classical computers thousands of years.',
      icon: Zap,
      metric: '1000x faster'
    },
    {
      title: 'Complex Optimization',
      description: 'Handle optimization problems with millions of variables efficiently.',
      icon: Cpu,
      metric: 'Millions of variables'
    },
    {
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical computing.',
      icon: Star,
      metric: 'Quantum advantage'
    },
    {
      title: 'Future-Proof',
      description: 'Prepare for the quantum era with early adoption and expertise.',
      icon: Shield,
      metric: 'Future-ready'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Director, Quantum Labs',
      content: 'Zion Tech Group\'s quantum computing expertise helped us achieve breakthroughs in molecular simulation.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, FinTech Innovations',
      content: 'Their quantum algorithms transformed our portfolio optimization, delivering unprecedented results.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'VP R&D, PharmaCorp',
      content: 'Quantum computing accelerated our drug discovery process by orders of magnitude.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600/20 rounded-full">
              <Atom className="h-16 w-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quantum
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum mechanics to solve previously intractable problems. 
            Experience exponential speedup and unlock new possibilities in computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Quantum Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Quantum Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our quantum computing platform leverages cutting-edge quantum technologies 
                to deliver unprecedented computational power and capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Quantum Computing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-purple-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quantum Principles */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Principles</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Atom className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Superposition</h3>
                <p className="text-gray-300 text-sm">
                  Qubits can exist in multiple states simultaneously, enabling parallel computation
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Network className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Entanglement</h3>
                <p className="text-gray-300 text-sm">
                  Qubits can be correlated in ways impossible for classical bits
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Zap className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Interference</h3>
                <p className="text-gray-300 text-sm">
                  Quantum waves can interfere constructively or destructively
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Monitor className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Measurement</h3>
                <p className="text-gray-300 text-sm">
                  Quantum states collapse upon measurement, providing classical results
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were previously impossible. 
              Partner with Zion Tech Group for cutting-edge quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Quantum Journey
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Quantum Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default QuantumComputing;