import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Heart,
  Building,
  Rocket,
  Cpu,
  Database,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Activity,
  Eye,
  Lock,
  Cloud,
  Server,
  Brain,
  CircuitBoard,
  Microscope,
  Flask,
  TestTube,
  Calculator,
  Quantum
} from 'lucide-react';

export function QuantumComputingPage() {
  const quantumServices = [
    {
      category: 'Quantum Computing Platforms',
      services: [
        {
          name: 'Quantum Neural Network Platform',
          description: 'Advanced quantum machine learning platform for complex AI tasks',
          icon: Brain,
          href: '/services/quantum-neural-network-platform',
          features: ['Quantum Neural Networks', 'Hybrid Classical-Quantum', 'Optimization Algorithms']
        },
        {
          name: 'Quantum AI Hybrid Platform',
          description: 'Seamless integration of quantum and classical AI systems',
          icon: Atom,
          href: '/services/ai-quantum-hybrid-platform',
          features: ['Hybrid Computing', 'Quantum Advantage', 'Scalable Architecture']
        },
        {
          name: 'Quantum Edge Computing',
          description: 'Quantum processing at the edge for real-time applications',
          icon: Activity,
          href: '/services/quantum-edge-computing',
          features: ['Edge Quantum Processing', 'Low Latency', 'Distributed Computing']
        }
      ]
    },
    {
      category: 'Quantum Applications',
      services: [
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum algorithms for high-frequency trading and risk assessment',
          icon: TrendingUp,
          href: '/services/quantum-ai-trading-platform',
          features: ['Portfolio Optimization', 'Risk Modeling', 'Market Analysis']
        },
        {
          name: 'Quantum Cybersecurity',
          description: 'Quantum-resistant encryption and quantum key distribution',
          icon: Shield,
          href: '/services/quantum-cybersecurity',
          features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Threat Detection']
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Quantum algorithms for enhanced machine learning capabilities',
          icon: Brain,
          href: '/services/quantum-machine-learning',
          features: ['Quantum ML Algorithms', 'Feature Selection', 'Pattern Recognition']
        }
      ]
    },
    {
      category: 'Quantum Research & Development',
      services: [
        {
          name: 'Quantum Algorithm Development',
          description: 'Custom quantum algorithms for specific business problems',
          icon: Code,
          href: '/services/quantum-algorithm-development',
          features: ['Custom Algorithms', 'Performance Optimization', 'Problem Solving']
        },
        {
          name: 'Quantum Simulation',
          description: 'Quantum simulation for complex scientific and business problems',
          icon: Microscope,
          href: '/services/quantum-simulation',
          features: ['Molecular Modeling', 'Material Science', 'Chemical Reactions']
        },
        {
          name: 'Quantum Optimization',
          description: 'Quantum optimization for complex logistical and planning problems',
          icon: Target,
          href: '/services/quantum-optimization',
          features: ['Supply Chain Optimization', 'Route Planning', 'Resource Allocation']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Exponential Speed',
      description: 'Solve complex problems exponentially faster than classical computers'
    },
    {
      icon: Target,
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical systems'
    },
    {
      icon: TrendingUp,
      title: 'Future-Proof Technology',
      description: 'Stay ahead with next-generation quantum computing capabilities'
    },
    {
      icon: Users,
      title: 'Competitive Edge',
      description: 'Gain strategic advantages in research, finance, and optimization'
    }
  ];

  const quantumTechnologies = [
    'Quantum Gates', 'Quantum Circuits', 'Quantum Entanglement',
    'Superposition States', 'Quantum Interference', 'Quantum Error Correction',
    'Quantum Annealing', 'Quantum Fourier Transform', 'Grover\'s Algorithm',
    'Shor\'s Algorithm', 'Quantum Teleportation', 'Quantum Cryptography'
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Portfolio Optimization', 'Risk Assessment', 'Algorithmic Trading', 'Fraud Detection']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      applications: ['Drug Discovery', 'Protein Folding', 'Genomic Analysis', 'Medical Imaging']
    },
    {
      industry: 'Manufacturing & Logistics',
      applications: ['Supply Chain Optimization', 'Production Planning', 'Route Optimization', 'Quality Control']
    },
    {
      industry: 'Energy & Utilities',
      applications: ['Grid Optimization', 'Energy Trading', 'Climate Modeling', 'Resource Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex problems. 
              Experience computing beyond classical limitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Explore Quantum Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/research-development"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-200 font-medium"
              >
                Research & Development
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering unprecedented capabilities for solving complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive quantum computing portfolio covers platforms, applications, 
              and research to accelerate your quantum journey.
            </p>
          </motion.div>

          <div className="space-y-12">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center space-x-3">
                  <category.icon className="w-6 h-6" />
                  <span>{category.category}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and creating 
              new possibilities across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{useCase.industry}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quantum Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge quantum technologies and algorithms to deliver 
              breakthrough solutions for complex computational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CircuitBoard className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and discover how our quantum computing solutions 
              can solve your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Start Your Quantum Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/research-development"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-200 font-medium"
              >
                Explore Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default QuantumComputingPage;