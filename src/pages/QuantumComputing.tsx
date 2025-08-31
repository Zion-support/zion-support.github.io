import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Cpu,
  Zap,
  Brain,
  Shield,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Lightbulb,
  Database,
  Network,
  Cloud,
  Server,
  Square
} from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Supremacy",
      description: "Achieve computational advantage over classical systems for specific problems"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum Machine Learning",
      description: "Enhanced AI algorithms leveraging quantum computational capabilities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum algorithms"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms like QAOA and VQE"
    }
  ];

  const benefits = [
    "Exponential speedup for specific computational problems",
    "Enhanced security through quantum cryptography",
    "Improved machine learning and AI capabilities",
    "Revolutionary breakthroughs in drug discovery and materials science"
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Portfolio optimization", "Risk assessment", "Fraud detection", "Algorithmic trading"]
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      applications: ["Drug discovery", "Protein folding", "Molecular modeling", "Personalized medicine"]
    },
    {
      industry: "Logistics & Supply Chain",
      applications: ["Route optimization", "Inventory management", "Scheduling", "Resource allocation"]
    },
    {
      industry: "Cybersecurity",
      applications: ["Post-quantum cryptography", "Quantum key distribution", "Threat detection", "Secure communications"]
    }
  ];

  const technologyStack = [
    {
      name: "IBM Qiskit",
      description: "Open-source quantum computing framework",
      features: ["Circuit design", "Quantum algorithms", "Cloud access"]
    },
    {
      name: "Google Cirq",
      description: "Quantum computing framework for NISQ devices",
      features: ["Noise modeling", "Circuit optimization", "Hardware integration"]
    },
    {
      name: "Microsoft Q#",
      description: "Quantum programming language",
      features: ["Quantum algorithms", "Simulation", "Azure integration"]
    },
    {
      name: "Rigetti Forest",
      description: "Quantum computing platform",
      features: ["Cloud access", "Hybrid algorithms", "Developer tools"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Atom className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Quantum Computing
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Unlock the power of quantum mechanics to solve previously intractable computational problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Quantum Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quantum Computing Features</h2>
            <p className="text-gray-300">Discover the revolutionary capabilities of quantum computing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-gray-300">Transform your business with quantum computing advantages</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {benefits.slice(2).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-gray-300">Quantum computing solutions across diverse industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                                         <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                       <Square className="w-4 h-4 text-cyan-400" />
                       {app}
                     </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300">Leading quantum computing platforms and frameworks</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                <ul className="text-left space-y-1">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how quantum computing can revolutionize your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;
