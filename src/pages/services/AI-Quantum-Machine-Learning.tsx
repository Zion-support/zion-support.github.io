import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Settings,
  Target,
  Star,
  TrendingUp,
  Database,
  Monitor,
  Network,
  Cpu
} from 'lucide-react';

const AIQuantumMachineLearning: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Models",
      description: "Combine quantum and classical computing for superior ML performance"
    },
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "Leverage quantum superposition for enhanced neural network capabilities"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Achieve exponential speedup for complex optimization problems"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography for future-proof security"
    },
    {
      icon: Globe,
      title: "Global Quantum Network",
      description: "Access to quantum computers worldwide through cloud integration"
    },
    {
      icon: BarChart3,
      title: "Quantum Analytics",
      description: "Advanced analytics powered by quantum computing algorithms"
    }
  ];

  const benefits = [
    "Solve complex optimization problems 1000x faster than classical computers",
    "Achieve quantum advantage in machine learning tasks",
    "Enable breakthroughs in drug discovery and materials science",
    "Future-proof your AI infrastructure with quantum-safe security",
    "Access cutting-edge quantum computing resources globally",
    "Reduce computational costs for complex AI workloads"
  ];

  const pricing = [
    {
      plan: "Quantum Starter",
      price: "$5,500",
      period: "/month",
      features: [
        "Up to 100 qubits access",
        "Basic quantum ML models",
        "Standard quantum algorithms",
        "Email support",
        "Basic quantum security",
        "Cloud quantum access"
      ]
    },
    {
      plan: "Quantum Professional",
      price: "$12,800",
      period: "/month",
      features: [
        "Up to 500 qubits access",
        "Advanced quantum ML models",
        "Custom quantum algorithms",
        "Priority support",
        "Full quantum security suite",
        "API access",
        "Hybrid classical-quantum models"
      ]
    },
    {
      plan: "Quantum Enterprise",
      price: "$28,000",
      period: "/month",
      features: [
        "Unlimited qubits access",
        "Custom quantum model training",
        "Multi-quantum computer access",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "On-premise quantum options"
      ]
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Quantum ML for molecular simulation and drug design",
      icon: Atom
    },
    {
      title: "Financial Modeling",
      description: "Portfolio optimization and risk assessment with quantum algorithms",
      icon: BarChart3
    },
    {
      title: "Materials Science",
      description: "Quantum simulation for new material discovery",
      icon: Cpu
    },
    {
      title: "Logistics Optimization",
      description: "Complex routing and scheduling problems",
      icon: Globe
    }
  ];

  const quantumTechnologies = [
    {
      title: "Quantum Gates",
      description: "Fundamental quantum operations for computation",
      icon: Atom
    },
    {
      title: "Quantum Circuits",
      description: "Programmable quantum computing sequences",
      icon: Network
    },
    {
      title: "Quantum Error Correction",
      description: "Maintain quantum coherence and accuracy",
      icon: Shield
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum correlations for ML",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              AI-Powered Quantum Machine Learning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}Machine Learning
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of quantum computing for machine learning. Solve complex problems 
              exponentially faster and achieve quantum advantage in AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Quantum ML Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage the power of quantum computing to transform machine learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on cutting-edge quantum computing principles and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum ML Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform industries with quantum-powered machine learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Advantage Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See exponential improvements in performance and problem-solving capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access to cutting-edge quantum computing resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  index === 1 
                    ? 'border-cyan-500/50 bg-cyan-500/5' 
                    : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for Quantum Advantage?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading organizations that trust our quantum machine learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact Us</h3>
              <p>kleber@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumMachineLearning;