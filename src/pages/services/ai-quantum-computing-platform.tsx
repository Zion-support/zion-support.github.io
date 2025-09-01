import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Atom, Zap, CheckCircle, ArrowRight, Star, Globe, Lock, Cpu, Target, Award, BarChart3, Rocket, CircuitBoard, Database, TrendingUp, Network, Shield } from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIQuantumComputingPlatform: React.FC = () => {

  const features = [
    'Hybrid quantum-classical AI algorithms for optimization',
    'Quantum machine learning with quantum neural networks',
    'Real-time quantum error correction and fault tolerance',
    'Quantum cryptography and secure communications',
    'Quantum simulation for complex scientific problems',
    'Integration with major quantum hardware providers',
    'Quantum advantage demonstration and benchmarking',
    'Automated quantum circuit optimization',
    'Multi-qubit entanglement and quantum state preparation',
    'Quantum cloud access with enterprise security'
  ];

  const benefits = [
    'Solve complex problems 1000x faster than classical computers',
    'Achieve quantum advantage in specific computational domains',
    'Enable breakthroughs in drug discovery and materials science',
    'Revolutionize cryptography and cybersecurity',
    'Accelerate AI training and inference with quantum acceleration'
  ];

  const pricing = [
    {

      plan: 'Research',
      price: '$7,999',
      period: 'month',
      features: ['Up to 50 qubits', 'Basic quantum algorithms', 'Standard quantum hardware', 'Email support', 'Basic quantum simulation'],
      popular: false
    },
    {

      plan: 'Enterprise',
      price: '$19,999',
      period: 'month',
      features: ['Up to 200 qubits', 'Advanced quantum algorithms', 'Multiple quantum hardware', 'Priority support', 'Advanced analytics', 'Custom quantum circuits'],
      popular: true
    },
    {

      plan: 'Government',
      price: '$49,999',
      period: 'month',
      features: ['Unlimited qubits', 'Custom quantum algorithms', 'All quantum hardware', 'Dedicated support', 'White-label solution', 'On-premise deployment'],
      popular: false
    }
  ];

  const quantumApplications = [
    'Drug Discovery & Pharmaceuticals',
    'Financial Modeling & Risk Analysis',
    'Logistics & Supply Chain Optimization',
    'Climate Modeling & Weather Prediction',
    'Cryptography & Cybersecurity',
    'Materials Science & Chemistry',
    'Machine Learning & AI Training',
    'Optimization & Operations Research'
  ];

  const quantumHardware = [
    'IBM Quantum Systems',
    'Google Sycamore',
    'Microsoft Azure Quantum',
    'Amazon Braket',
    'Rigetti Computing',
    'IonQ Systems',
    'Honeywell Quantum Solutions',
    'D-Wave Systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      <SEO 
        title="AI Quantum Computing Platform | Zion Tech Group"
        description="Revolutionary AI-powered quantum computing platform that combines quantum algorithms with artificial intelligence for unprecedented computational power and problem-solving capabilities."
        keywords="AI quantum computing, quantum AI, quantum algorithms, quantum machine learning, quantum optimization, quantum simulation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Atom className="w-8 h-8 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              AI Quantum Computing Platform
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Harness the power of quantum computing combined with AI to solve the world's most complex problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-300 text-purple-300 font-semibold rounded-lg hover:bg-purple-300 hover:text-purple-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum + AI = Computational Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced AI to deliver unprecedented computational capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-600">
              Transform industries with quantum computing solutions across diverse domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quantumApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">{application}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Hardware Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Provider Quantum Access
            </h2>
            <p className="text-xl text-gray-600">
              Access to all major quantum computing hardware providers through our unified platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quantumHardware.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <CircuitBoard className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">{provider}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Computational Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Experience quantum advantage and breakthrough performance in complex problem-solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Access to quantum computing power with flexible pricing for research and enterprise use
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${

                  plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Quantum Advantage?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join leading organizations that have already embraced the future of computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Quantum Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumComputingPlatform;