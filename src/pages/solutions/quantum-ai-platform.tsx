import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Cpu, 
  Shield, 
  Database,
  Target,
  Users,
  Globe,
  Lock,
  Network,
  Lightbulb,
  Rocket,
  TrendingUp
} from 'lucide-react';

const QuantumAIPlatform = () => {
  const capabilities = [
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Leverage quantum bits for exponentially faster computational power',
      features: ['Quantum algorithms', 'Superposition states', 'Quantum entanglement']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamless integration of quantum computing with artificial intelligence',
      features: ['Quantum neural networks', 'AI optimization', 'Machine learning acceleration']
    },
    {
      icon: Zap,
      title: 'Quantum Speedup',
      description: 'Achieve quantum advantage in complex computational problems',
      features: ['Exponential speedup', 'Parallel processing', 'Quantum parallelism']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum cryptography principles',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Quantum-resistant algorithms']
    },
    {
      icon: Database,
      title: 'Quantum Databases',
      description: 'Revolutionary database systems powered by quantum mechanics',
      features: ['Quantum search algorithms', 'Quantum data structures', 'Quantum indexing']
    },
    {
      icon: Network,
      title: 'Quantum Networks',
      description: 'Secure quantum communication networks for the future',
      features: ['Quantum internet', 'Quantum repeaters', 'Quantum teleportation']
    }
  ];

  const applications = [
    {
      domain: 'Financial Services',
      useCases: ['Portfolio Optimization', 'Risk Assessment', 'Algorithmic Trading']
    },
    {
      domain: 'Drug Discovery',
      useCases: ['Molecular Simulation', 'Protein Folding', 'Drug Design']
    },
    {
      domain: 'Climate Modeling',
      useCases: ['Weather Prediction', 'Climate Simulation', 'Environmental Analysis']
    },
    {
      domain: 'Logistics',
      useCases: ['Route Optimization', 'Supply Chain Management', 'Resource Allocation']
    }
  ];

  const advantages = [
    {
      icon: Rocket,
      title: 'Exponential Speed',
      description: 'Solve problems in minutes that would take classical computers years'
    },
    {
      icon: Target,
      title: 'Perfect Accuracy',
      description: 'Achieve unprecedented precision in complex calculations and simulations'
    },
    {
      icon: Lock,
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides theoretically unbreakable encryption'
    },
    {
      icon: TrendingUp,
      title: 'Future-Proof',
      description: 'Stay ahead of the curve with next-generation computing technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of computing with our revolutionary Quantum AI Platform, combining quantum computing power with artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Explore Platform
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harness the power of quantum mechanics and artificial intelligence for unprecedented computational capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how Quantum AI is transforming industries and solving previously impossible problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.domain}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-indigo-400 mr-3" />
                  {application.domain}
                </h3>
                <div className="space-y-3">
                  {application.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the revolutionary benefits of quantum computing combined with artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-300">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on cutting-edge quantum computing frameworks and AI technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Quantum Circuits', 'Neural Networks', 'Quantum Gates', 'AI Models'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and experience computing power beyond imagination.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Get Quantum Access
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIPlatform;