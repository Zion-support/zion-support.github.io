import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Atom, Zap, Target, Brain, Globe, Shield, BarChart3 } from 'lucide-react';

const QuantumComputingPage = () => {
  const services = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Custom quantum algorithms designed for specific business problems and optimization challenges.'
    },
    {
      icon: Zap,
      title: 'Quantum Simulation',
      description: 'Advanced quantum simulation for complex systems in chemistry, materials science, and finance.'
    },
    {
      icon: Target,
      title: 'Optimization Solutions',
      description: 'Quantum optimization for logistics, supply chain, and resource allocation problems.'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Quantum machine learning algorithms for enhanced pattern recognition and data analysis.'
    },
    {
      icon: Globe,
      title: 'Cryptography',
      description: 'Quantum-resistant cryptography and secure communication protocols for the future.'
    },
    {
      icon: Shield,
      title: 'Research & Development',
      description: 'Collaborative R&D programs to advance quantum computing applications in your industry.'
    }
  ];

  const applications = [
    'Financial Modeling & Risk Assessment',
    'Drug Discovery & Molecular Design',
    'Supply Chain Optimization',
    'Climate Modeling & Prediction',
    'Artificial Intelligence Enhancement',
    'Cryptographic Security',
    'Material Science Research',
    'Logistics & Transportation'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Unlock the future of computing with quantum technology. Solve previously impossible problems 
              and accelerate innovation across industries with our quantum computing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Quantum Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Research Partnership
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From algorithm development to quantum simulation, we provide comprehensive quantum computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Quantum computing is revolutionizing industries by solving complex problems that were previously 
                impossible with classical computers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <motion.div
                    key={application}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Quantum Readiness
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Assess your organization's readiness for quantum computing adoption.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              The Quantum Advantage
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how quantum computing can provide exponential speedup for your most complex computational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Exponential Speedup</h3>
              <p className="text-zion-slate-light">Solve problems in minutes that would take classical computers years.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Complex Optimization</h3>
              <p className="text-zion-slate-light">Find optimal solutions for multi-dimensional optimization problems.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Simulation</h3>
              <p className="text-zion-slate-light">Simulate quantum systems and complex molecular interactions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Position your organization at the forefront of quantum computing innovation and gain a competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Quantum Strategy Session
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Research Partnership
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingPage;